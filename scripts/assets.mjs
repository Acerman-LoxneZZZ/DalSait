import fs from 'node:fs/promises';
const assets = new URL('../dist/assets/', import.meta.url);
await fs.mkdir(assets, {recursive:true});
const photos = {
  hero:'photo-1470770841072-f978cf4d019e',
  dolomites:'photo-1464822759023-fed622ff2c3b',
  iceland:'photo-1476610182048-b716b8518aae',
  japan:'photo-1493976040374-85c8e12f0c0e',
  desert:'photo-1590112692261-95970dc49be6',
  lake:'photo-1501785888041-af3ef285b470',
  forest:'photo-1441974231531-c6227db76b6e',
  mountains:'photo-1469474968028-56623f02e42e',
  night:'photo-1519681393784-d120267933ba'
};
await Promise.all(Object.entries(photos).map(async ([name,id])=>{
 const url=`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${name==='hero'?2200:1200}&q=85`;
 const response=await fetch(url); if(!response.ok) throw new Error(`${name}: ${response.status}`);
 await fs.writeFile(new URL(`${name}.jpg`,assets),Buffer.from(await response.arrayBuffer()));
 await fs.writeFile(new URL(`${name}.jpg.origin.txt`,assets),`Source: ${url}\nStock photograph from Unsplash image CDN. Used in an illustrative travel journal.\n`);
 console.log(`Saved ${name}.jpg`);
}));
for (const [name,family] of [['manrope','Manrope:wght@400;500;600;700;800'],['cormorant','Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500']]) {
 const cssUrl=`https://fonts.googleapis.com/css2?family=${family}&display=swap`;
 const css=await (await fetch(cssUrl,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}})).text();
 const blocks=[...css.matchAll(/\/\* ([^*]+) \*\/\s*(@font-face\s*\{[^}]+\})/g)].filter(m=>['cyrillic','latin'].includes(m[1].trim()));
 const urlMap=new Map();let local='';
 for(const block of blocks){
  const url=block[2].match(/url\(([^)]+)\)/)[1];
  if(!urlMap.has(url)){
   const file=`${name}-modern-${urlMap.size}.woff2`;const response=await fetch(url);
   if(!response.ok)throw new Error(`Font ${response.status}`);
   await fs.writeFile(new URL(file,assets),Buffer.from(await response.arrayBuffer()));urlMap.set(url,file);
  }
  local+=`/* ${block[1]} */\n${block[2].replace(url,`./${urlMap.get(url)}`)}\n`;
 }
 await fs.writeFile(new URL(`${name}.css`,assets),local);
 console.log(`Saved ${name} font`);
}
