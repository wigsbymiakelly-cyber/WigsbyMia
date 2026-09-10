import './photo-prep.css';

const input = document.querySelector<HTMLInputElement>('#photo-input')!;
const status = document.querySelector<HTMLDivElement>('#status')!;
const results = document.querySelector<HTMLDivElement>('#results')!;
const MAX_EDGE = 2000;
const JPEG_QUALITY = 0.82;

function readableSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function outputName(name: string) {
  return `${name.replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}-web.jpg`;
}

async function prepare(file: File) {
  const sourceUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = sourceUrl;
    await image.decode();
    const scale = Math.min(1, MAX_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { alpha: false })!;
    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.drawImage(image, 0, 0, width, height);
    const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
      value => value ? resolve(value) : reject(new Error('Could not create the resized photo.')),
      'image/jpeg', JPEG_QUALITY,
    ));
    const downloadUrl = URL.createObjectURL(blob);
    const card = document.createElement('article');
    card.className = 'result-card';
    const preview = document.createElement('img');
    preview.src = downloadUrl;
    preview.alt = `Prepared preview of ${file.name}`;
    const copy = document.createElement('div');
    copy.className = 'result-copy';
    const name = document.createElement('strong');
    name.textContent = outputName(file.name);
    const details = document.createElement('span');
    details.textContent = `${width.toLocaleString()} × ${height.toLocaleString()} · ${readableSize(blob.size)}`;
    copy.append(name, details);
    const download = document.createElement('a');
    download.className = 'download-button';
    download.href = downloadUrl;
    download.download = outputName(file.name);
    download.textContent = 'Download prepared photo';
    card.append(preview, copy, download);
    results.append(card);
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

input.addEventListener('change', async () => {
  const files = Array.from(input.files ?? []);
  if (!files.length) return;
  results.replaceChildren();
  status.textContent = `Preparing ${files.length} photo${files.length === 1 ? '' : 's'}…`;
  let completed = 0;
  for (const file of files) {
    try { await prepare(file); completed += 1; }
    catch {
      const error = document.createElement('p');
      error.className = 'error';
      error.textContent = `${file.name} could not be opened. Export it as JPEG first, then try again.`;
      results.append(error);
    }
  }
  status.textContent = completed
    ? `${completed} upload-ready photo${completed === 1 ? '' : 's'} prepared. Download each one, then add it in the inventory editor.`
    : 'No photos were prepared.';
  input.value = '';
});
