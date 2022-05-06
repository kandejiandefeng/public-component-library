const child_process = require('child_process');

const copyDir = () => {
    child_process.exec('xcopy "packages" "docs/packages/" /f/y/s');
};

copyDir();