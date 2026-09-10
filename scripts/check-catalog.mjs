import fs from 'node:fs';
import path from 'node:path';
const statuses = new Set(['Available','Sold','Coming Soon','Hidden']);
const errors=[];
for (const file of fs.readdirSync('content/wigs').filter(x=>x.endsWith('.json'))) {
 const w=JSON.parse(fs.readFileSync(`content/wigs/${file}`));
 if(!w.name?.trim() || !statuses.has(w.status)) errors.push(`${file}: name or availability missing`);
 if(w.order != null && (typeof w.order !== 'number' || !Number.isFinite(w.order))) errors.push(`${file}: invalid display order`);
 for(const image of w.images ?? []) {
  if(!image.src?.startsWith('/images/') || !fs.existsSync(path.join('public',image.src))) errors.push(`${file}: missing photo ${image.src}`);
  if(!image.label?.trim()) errors.push(`${file}: photo description missing`);
 }
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('Catalog valid: names, statuses, ordering, and photo files checked.');
