var process = require('child_process');

var cmd = `npx playwright test`

process.exec(cmd, function(error) {
    if(error) console.log(error)
});
