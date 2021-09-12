/**
 * @file 生成测试代码到制定文件
*/

var process = require('child_process');
var argv = require('yargs').argv;

var recordName = argv._[0];
var recordUrl = argv._[1];
let genfile = recordName + '-' + new Date().getTime()

// 新建代码生成文件夹
var genFileCmd = `cd tests && mkdir ${genfile} && cd ${genfile} && mkdir mock`
process.exec(genFileCmd, function(error) {
    if(error) console.log(error)
});

// playwright 生成代码到制定位置
var recordCmd = `npx playwright codegen -o ./tests/${genfile}/index.spec.js --ignore-https-errors --timeout 999999 ${recordUrl}`
process.exec(recordCmd, function(error) {
    if(error) console.log(error)
});

module.exports = function() {

}