// One-time cleanup after upgrading to the new portfolio design.
// Run from the project folder:   node cleanup.js
// It deletes the old pages/components that no longer exist in the new
// design, then commits and pushes the result to GitHub.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = process.cwd();

if (!fs.existsSync(path.join(root, 'package.json')) || !fs.existsSync(path.join(root, 'app'))) {
  console.error('Please run this from your project folder (the one that contains package.json and the app folder).');
  process.exit(1);
}

const oldFiles = [
  'app/about',
  'app/contact',
  'app/projects',
  'app/services',
  'components/CategoryTag.js',
  'components/Testimonials.js',
  'components/Navbar.js',
  'components/Glow.js',
  'components/CornerFrame.js',
  'components/HeroStack.js',
  'components/ProjectFeature.js',
  'components/MoreProjects.js',
];

console.log('Removing old files...');
for (const f of oldFiles) {
  const p = path.join(root, f);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('  deleted  ' + f);
  } else {
    console.log('  already gone  ' + f);
  }
}

function git(cmd) {
  return execSync('git ' + cmd, { cwd: root, stdio: 'pipe' }).toString().trim();
}

try {
  git('rev-parse --is-inside-work-tree');
} catch {
  console.log('\nThe old files are removed, but this folder is not connected to Git.');
  console.log('Push your changes to GitHub the way you normally do.');
  process.exit(0);
}

try {
  console.log('\nSaving changes to Git...');
  git('add -A');
  if (!git('status --porcelain')) {
    console.log('Nothing new to commit. Everything is already up to date.');
  } else {
    git('commit -m "Redesign: dark cinematic portfolio"');
    console.log('Committed.');
  }
  console.log('Pushing to GitHub...');
  const out = execSync('git push', { cwd: root, stdio: 'pipe' }).toString();
  if (out.trim()) console.log(out.trim());
  console.log('\nDone. Vercel will now rebuild your site automatically.');
} catch (e) {
  console.error('\nSomething went wrong with Git:');
  console.error((e.stderr ? e.stderr.toString() : e.message).trim());
  console.error('\nThe old files are removed. Copy the message above and send it to me if you are stuck.');
  process.exit(1);
}
