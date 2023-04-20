/* eslint no-console: "off" */
const exec = require("child_process").execSync;
const version = require("../package.json").releaseVersion;

console.log("Building new release for ", version);

exec("yarn");
exec("yarn build");

console.log("Creating release dir");

// Update mkdir command based on the operating system
const mkdirCommand = process.platform === 'win32' ? 'mkdir releases\\' + version : 'mkdir -p releases/' + version;
console.log(mkdirCommand);
exec(mkdirCommand);

console.log("copying release files");

// Update cp command based on the operating system
const copyCommand = process.platform === 'win32' ? 'xcopy /s /e /i /q /y build\\* releases\\' + version : 'cp build/* releases/' + version;
console.log(copyCommand);
exec(copyCommand);

console.log("stage release artifacts");
exec("git add releases/" + version);
