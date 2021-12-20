const ci = require('miniprogram-ci')
const dayjs = require('dayjs')
const chalk = require('chalk')
const fs = require('fs-extra')
const axios = require('axios')

const projectConfig = require('../project.config.json')

const { log } = console

// 钉钉机器人 token
const DING_TOKEN = ''

const message = (data) =>
  axios.post('https://oapi.dingtalk.com/robot/send?access_token=' + DING_TOKEN, data)

// 获取当前时间的年月日信息用于设置上传备注
const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

const { appid, projectname, compileType } = projectConfig
const privateKeyPath = `${process.cwd()}/scripts/private.${appid}.key`

// 判断密钥文件是否存在
if (!fs.existsSync(privateKeyPath)) {
  log(chalk.red('代码上传密钥不存在，请先生成密钥'))
  process.exit(1)
}

// 实例化项目对象
const project = new ci.Project({
  appid,
  type: compileType,
  projectPath: process.cwd(),
  privateKeyPath,
  ignores: ['node_modules/**/*', 'scripts/**/*', 'typings/**/*']
})

// 开始上传
ci.upload({
  project,
  version: '1.0.0',
  desc: `ci 机器人 1  在 ${currentTime} 提交上传测试版代码`,
  robot: 1,
  setting: {
    // "es6 是否转 es5"
    es6: true,
    // 是否压缩代码
    minify: true
  }
})
  .then((res) => {
    log(res)
    log(chalk.green('测试版发布成功'))

    // 发送钉钉消息
    DING_TOKEN &&
      message({
        msgtype: 'actionCard',
        actionCard: {
          title: '提示',
          btns: [
            {
              title: '查看体验版二维码',
              actionURL:
                'dingtalk://dingtalkclient/page/link?url=https%3A%2F%2Fmp.weixin.qq.com%2F&pc_slide=true'
            }
          ],
          text: `### 上传测试版成功 \n #### 名称：${projectname} \n #### 时间：${currentTime}`
        }
      })
  })
  .catch((error) => {
    log(error)
    log(chalk.red('测试版发布存在异常，请检查'))
    process.exit(1)
  })
