var process = require('child_process');
var argv = require('yargs').argv;
var customerConf = require('./customer.config');
var path = require('path')

var recordName = argv._[0];

var recordUrl = argv._[1];

// 新建代码生成文件夹
var genFileCmd = `cd tests && mkdir ${recordName}-${new Date().getTime()} && cd ${recordName} && mkdir mock`

process.exec(genFileCmd, function(error, stdout, stderr) {
    console.log("error:"+error);
    console.log("stdout:"+stdout);
    console.log("stderr:"+stderr);
});

// playwright 生成代码到制定位置
var recordFilePath = path.join(__dirname, `/tests/${recordName}/index.spec.js`)

var recordCmd = `npx playwright codegen -o ${recordName}.js ${recordUrl} --ignore-https-errors --timeout 999999`

process.exec(recordCmd, function(error, stdout, stderr) {
    console.log("error:"+error);
    console.log("stdout:"+stdout);
    console.log("stderr:"+stderr);
});
