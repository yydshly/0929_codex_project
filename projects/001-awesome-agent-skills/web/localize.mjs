import fs from 'node:fs';
import crypto from 'node:crypto';

// The translations are authored against this exact source snapshot, not inferred from categories.
const sourceHash='e834c8628e16b858096ac42a084da9519eb690e38cc3a990c1932e92430e4a8f';
const sectionNames={
 'Official Claude Skills':'Claude 官方技能','Core Skills':'核心技能',
 'Security Skills by Trail of Bits Team':'Trail of Bits 团队安全技能',
 'Skills by Sentry team for their dev team.':'Sentry 团队开发技能',
 'Skills by HashiCorp Team for Terraform':'HashiCorp 团队 Terraform 技能',
 'Skills by Vercel Engineering Team':'Vercel 工程团队技能',
 'Skills by WordPress Development Team':'WordPress 开发团队技能',
 'Skills by - Google Chrome team - Addy Osmani (Web Quality)':'Google Chrome 团队 Addy Osmani 网页质量技能',
 'Marketing Skills by Corey Haines':'Corey Haines 营销技能',
 'Advertising Skills by Kim Barrett':'Kim Barrett 广告技能',
 'Product Manager Skills by Dean Peters':'Dean Peters 产品经理技能',
 'Product Management Skills by Pawel Huryn':'Pawel Huryn 产品管理技能',
 'Vector Databases':'向量数据库','Marketing':'营销',
 'Productivity and Collaboration':'效率与协作','Development and Testing':'开发与测试',
 'Context Engineering':'上下文工程','Specialized Domains':'专业领域','n8n Automation':'n8n 自动化'
};
function sectionZh(s){
 if(sectionNames[s])return sectionNames[s];
 if(s.startsWith('Skills by '))return s.slice(10).replace(/ Team$/,' 团队')+'技能';
 if(s.endsWith(' Skills'))return s.slice(0,-7)+' 技能';
 throw new Error(`Missing Chinese section: ${s}`);
}
export function localizeCatalog(catalog,readme){
 const hash=crypto.createHash('sha256').update(readme.replace(/\r\n/g,'\n')).digest('hex');
 if(hash!==sourceHash)throw new Error('Upstream snapshot changed; review translations before rebuilding.');
 const translations=new Map();
 for(const line of fs.readFileSync(new URL('./translations-zh.tsv',import.meta.url),'utf8').trim().split(/\r?\n/)){
  const [number,zh,...extra]=line.split('\t'),id=`entry-${number}`;
  if(!/^\d+$/.test(number)||!zh||extra.length||!/[\u3400-\u9fff]/.test(zh)||translations.has(id))throw new Error(`Invalid or duplicate translation: ${number}`);
  translations.set(id,zh);
 }
 if(translations.size!==catalog.length)throw new Error('Chinese translation coverage mismatch');
 for(const entry of catalog){
  const zh=translations.get(entry.id);
  if(!zh)throw new Error(`Missing translation: ${entry.name}`);
  entry.descriptionZh=zh;entry.sectionZh=sectionZh(entry.section);
 }
 console.log(JSON.stringify({chineseDescriptions:translations.size}));
}
