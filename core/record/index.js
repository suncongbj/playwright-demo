var process = require('child_process');
var argv = require('yargs').argv;
let path = require('path');
let fs = require('fs');
const { URL } = require('url');

const RECORD_NAME = argv._[0];
const RECORD_URL = argv._[1];

if (!RECORD_NAME || !RECORD_URL) {
    throw new Error('需要模块名以及url')
}

/**
 * @desc 新建代码生成文件夹
*/
function createFile() {
    return new Promise((resolve, reject) => {
        let genFileCmd = `cd tests && mkdir ${RECORD_NAME} && cd ${RECORD_NAME} && mkdir mock`
        process.exec(genFileCmd, function (error) {
            if (error) reject(error)
            resolve()
        });
    })
}

/**
 * @desc 启动抓包并写入请求到对应测试文件夹下
*/
function startGenMockFileServer() {
    return new Promise((resolve, reject) => {
        let resWitePath = path.join(__dirname, '../../tests/' + RECORD_NAME + '/mock');
        resWitePath = resWitePath.split('\\').join('/')
        const whistleUrl = new URL(RECORD_URL)

        fs.writeFile('.whistle.js', `
            exports.name = 'temp'
            exports.rules = '${whistleUrl.hostname} resWrite://${resWitePath} includeFilter:///api/i';
        `, err => {
                if (err) {
                    reject(err)
                }
                process.exec(`w2 add --force`, function (error) {
                    if (error) reject(error)
                });
            })
        resolve()
    })
}

/**
 * @desc playwright 生成代码到指定位置
*/
function startPlaywrightRecord() {
    return new Promise((resolve, reject) => {
        let recordCmd = `npx playwright codegen -o ./tests/${RECORD_NAME}/index.spec.js --ignore-https-errors  --timeout 999999 ${RECORD_URL}`
        process.exec(recordCmd, function (error) {
            if (error) reject(error)
            resolve()
        });
    })
}

createFile()
    .then(startGenMockFileServer())
    .then(startPlaywrightRecord())
    .catch(e => {
        throw new Error(e)
    })
