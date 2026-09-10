/// <reference types="vite/client" />
export type Wig = {
  id: string;
  name: string;
  collection?: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  status: 'Available' | 'Sold' | 'Coming Soon' | 'Hidden';
  order?: number;
  lace?: string;
  length?: string;
  density?: string;
  capSize?: string;
  features?: string[];
  images?: {src: string; label: string}[];
};
const entries = import.meta.glob('../content/wigs/*.json', {eager: true, import: 'default'}) as Record<string, Omit<Wig, 'id'>>;
export const wigs: Wig[] = Object.entries(entries)
  .map(([path, wig]) => ({...wig, id: path.split('/').pop()!.replace(/\.json$/, '')}))
  .filter(wig => wig.status !== 'Hidden')
  .sort((a,b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));
