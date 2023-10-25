// 导入express模块
var express = require('express')
// 导入cors模块
var cors = require('cors')
// 创建服务
var app = express()
// 设置监听端口号
app.listen(3000)
// 解决跨域问题
app.use(cors())
// 解析post请求参数
app.use(express.json())

app.get('/', (req, res) => {
    
})
