const fs = require('node:fs');
const path = require('node:path');
// Use installed sharp, or pass the path of an available sharp package as argv[2].
const sharp = require(process.argv[2] || 'sharp');
const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
const source = path.join(assets, 'agent-skills-full-map.svg');
const png = path.join(assets, 'agent-skills-full-map.png');
(async () => {
  const result = await sharp(source).png().toFile(png);
  await sharp(png).resize({width:1200}).png().toFile(path.join(assets, 'agent-skills-full-map-preview.png'));
  for (const destination of [__dirname, path.resolve(root, '../../site/002-agent-skills')]) {
    fs.mkdirSync(destination,{recursive:true});
    fs.copyFileSync(png, path.join(destination,'agent-skills-full-map.png'));
  }
  console.log(JSON.stringify({width:result.width,height:result.height,bytes:result.size}));
})().catch(error => { console.error(error); process.exitCode = 1; });
