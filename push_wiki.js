const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const wikiDir = path.resolve(__dirname, 'wiki_temp');
if (fs.existsSync(wikiDir)) {
  fs.rmSync(wikiDir, { recursive: true, force: true });
}
fs.mkdirSync(wikiDir);

// Copy all files from wiki/ to wiki_temp/
const srcWiki = path.resolve(__dirname, 'wiki');
const files = fs.readdirSync(srcWiki);
for (const file of files) {
  fs.copyFileSync(path.join(srcWiki, file), path.join(wikiDir, file));
}

try {
  execSync('git init', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git config user.name "meth"', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git config user.email "methanol@users.noreply.github.com"', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git add .', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git commit -m "docs: publish all wiki pages"', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git branch -M master', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git remote add origin git@github.com:methanol-dev/nihongo-master.wiki.git', { cwd: wikiDir, stdio: 'inherit' });
  execSync('git push -u origin master --force', { cwd: wikiDir, stdio: 'inherit' });
  console.log('✅ PUSHED TO GITHUB WIKI REPO SUCCESSFULLY!');
} catch (err) {
  console.log('⚠️ GitHub Wiki needs to be initialized via Web UI first.');
}
