import {copyFileSync,existsSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const here=dirname(fileURLToPath(import.meta.url));
const project=resolve(here,'..');
const upstream=resolve(project,'upstream');
const target=resolve(here,'../../../site/008-handraw-style');
const references=resolve(upstream,'skills/handdraw-style-prompter/references');
const readJson=(name)=>JSON.parse(readFileSync(resolve(references,name),'utf8'));
const mediaPath=(path)=>`media/${path.replace(/^images\//,'')}`;
const assetPath=(value)=>value.replace(/^\.\.\/\.\.\/\.\.\//,'');
const readPrompts=(name)=>{
  const raw=readFileSync(resolve(references,'layouts',name),'utf8');
  const [zh,en='']=raw.split('<!-- en -->');
  return {zh:zh.replace('<!-- zh -->','').trim(),en:en.trim()};
};
const styles=readJson('styles.json').map(item=>{
  const path=`images/individual/${Number(item.number)<=200?'001-200':'201-400'}/${item.number}.webp`;
  return {id:item.number,group:item.group,reference:item.reference,name:item.generation_name,traits:item.traits,image:mediaPath(path),sourcePath:path};
});
const layouts=readJson('layouts.json').map(item=>{
  const path=assetPath(item.image);
  const prompt=readPrompts(item.prompt_file.split('/').at(-1));
  return {id:item.id,category:item.category,name:item.name,nameEn:item.name_en,keywords:item.keywords,image:mediaPath(path),sourcePath:path,promptZh:prompt.zh,promptEn:prompt.en};
});
const colors=readJson('colors.json').map(item=>{
  const path=assetPath(item.image);
  return {id:item.id,category:item.category_zh,name:item.name_zh,nameEn:item.name_en,quote:item.quote_zh,image:mediaPath(path),sourcePath:path,promptZh:item.prompt_zh,promptEn:item.prompt_en};
});
if(styles.length!==280||layouts.length!==124||colors.length!==36)throw new Error(`Unexpected catalog counts: ${styles.length}/${layouts.length}/${colors.length}`);
const version=JSON.parse(readFileSync(resolve(upstream,'version.json'),'utf8')).version;
const catalog={commit:'b5c302e7164f287230ed80bde2f69f35aac39914',version,styles,layouts,colors};
writeFileSync(resolve(here,'catalog-data.js'),`window.HANDRAW_CATALOG=${JSON.stringify(catalog).replace(/</g,'\\u003c')};\n`);
mkdirSync(target,{recursive:true});
for(const name of ['index.html','styles.css','app.js','gallery.html','gallery.css','gallery.js','trials.html','workflow.html','scenarios.html','scenarios.css','scenarios.js','capability-map-source.html','catalog-data.js'])copyFileSync(resolve(here,name),resolve(target,name));
const paths=new Set([...styles,...layouts,...colors].map(item=>item.sourcePath));
for(const path of paths){
  const source=resolve(upstream,path);
  if(!existsSync(source))throw new Error(`Missing upstream image: ${path}`);
  const dest=resolve(target,mediaPath(path));
  mkdirSync(dirname(dest),{recursive:true});
  copyFileSync(source,dest);
}
copyFileSync(resolve(upstream,'LICENSE'),resolve(target,'UPSTREAM-LICENSE.txt'));
const trialDir=resolve(project,'trials');
for(const name of ['style-268-c26-cat.png','style-275-c26-cat.png','style-276-c26-cat.png','style-276-c01-cat.png','ig-003-coffee.png','sb-002-cat-comic.png','sc-001-autumn-card.png','photo-redraw-268.png','sc-021-photo-split.png','source-photo-cat.png']){
  const dest=resolve(target,'trials',name);
  mkdirSync(dirname(dest),{recursive:true});
  copyFileSync(resolve(trialDir,name),dest);
}
for(const name of ['style-276-pure.txt','sc-001-card.txt','ig-003-auto.txt','sc-021-redraw.txt']){
  const dest=resolve(target,'prompts',name);
  mkdirSync(dirname(dest),{recursive:true});
  copyFileSync(resolve(trialDir,'prompts',name),dest);
}
const scenarioDir=resolve(project,'scenarios/images');
const scenarioNames=['research-cover','seed-guide','reuse-guide','craft-market','museum-poster','water-saving','sprout-mascot','knit-lookbook','meeting-comic','game-concept','wellbeing-journal','pet-collage'];
for(const name of scenarioNames){
  const dest=resolve(target,'scenarios/images',`${name}.png`);
  mkdirSync(dirname(dest),{recursive:true});
  copyFileSync(resolve(scenarioDir,`${name}.png`),dest);
}
copyFileSync(resolve(project,'assets/capability-map.png'),resolve(target,'capability-map.png'));
console.log(`Built ${target} with ${styles.length} styles, ${layouts.length} layouts, ${colors.length} colors, ${paths.size} original previews and ${scenarioNames.length} scenario tests`);
