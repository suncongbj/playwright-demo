var process = require('child_process');
var argv = require('yargs').argv;

const RECORD_NAME = argv._[0];
const RECORD_URL = argv._[1];
const GEN_FILE_NAME = RECORD_NAME + '-' + new Date().getTime()

/**
 * @desc 新建代码生成文件夹
*/
function createFile() {
    return new Promise((resolve, reject) => {
        let genFileCmd = `cd tests && mkdir ${GEN_FILE_NAME} && cd ${GEN_FILE_NAME} && mkdir mock`
        process.exec(genFileCmd, function(error) {
            if(error) reject(error)
            resolve()
        });
    })
}

/**
 * @desc 启动抓包并写入请求到对应测试文件夹下
*/
function startGenMockFileServer() {
    // var cmd = `${RECORD_URL} file://${}`
    return Promise.resolve()
}
/**
 * @desc 启动抓包并写入请求到对应测试文件夹下
*/
function startGenMockFileServer() {
    // var cmd = `${RECORD_URL} file://${}`
    // process.exec(cmd1, function(error) {
    //     if(error) reject(error)
    //     process.exec(cmd1, function(error) {
    //         if(error) reject(error)
    //     });
    // });
    return Promise.resolve()
}

function stopGenMockServer() {
    return Promise.resolve()
}

/**
 * @desc playwright 生成代码到指定位置
*/
function startPlaywrightRecord() {
    return new Promise((resolve, reject) => {
        let recordCmd = `npx playwright codegen -o ./tests/${GEN_FILE_NAME}/index.spec.js --ignore-https-errors --timeout 999999 ${RECORD_URL}`
        process.exec(recordCmd, function(error) {
            if(error) reject(error)
            resolve()
        });
    })
}

createFile()
.then(startGenMockFileServer())
.then(startPlaywrightRecord())
.then(stopGenMockServer())
.catch(e => {
    stopGenMockServer()
    throw new Error(e)
})
