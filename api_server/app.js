// 导入express
const express = require('express');
const app = express();
// 导入body-parser
const bodyParser = require('body-parser');
// 引入对应的路由
// const router = require('./router');
// 引入mysql
const mysql = require('mysql');
// 设置跨域访问
app.use(require('cors')());
// 挂在参数处理中间件（post）
app.use(bodyParser.urlencoded({
        extended: false
    }))
    // 处理json格式参数
app.use(bodyParser.json())
    // 使用路由
    // app.use('/', router)

// 创建数据库连接
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456quNA",
    database: "zqdb"
})

db.connect((err => {
    if (err) throw err;
    console.log('连接成功');
}))

// 监听8090端口
app.listen(8090, (req, res) => {
    console.log('http://127.0.0.1:8090')
})

// 验证用户名和密码是否存在
app.post("/doLogin", (req, res) => {
    // console.log(req.body.username);
    // console.log(req.body);
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(req);
            result = {
                status: 'ok'
            }
            res.send(result)
                // console.log("验证失败");
        }
    })
})

// 新建流程
app.post("/process", (req, res) => {
    // console.log(req.body.username);
    // console.log(req.body);
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(req);
            result = {
                status: 'ok'
            }
            res.send(result)
                // console.log("验证失败");
        }
    })
})

// 发送待办任务清单
app.get("/currentProcessInstances/10/1", (req, res) => {
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let i = {
                pageNum: 1,
                total: 10,
                list: []
            }
            i.list = result
            res.send(i)
        }
    })
})

// 发送待办任务清单
app.get("/histProcessInstances/:pageSize/:pageNum", (req, res) => {
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let i = {
                pageNum: 1,
                total: 10,
                list: []
            }
            i.list = result

            res.send(i)
        }
    })
})


// 发送待办任务清单
app.get("/needAcceptTasks/:pageSize/:pageNum", (req, res) => {
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let i = {
                pageNum: 1,
                total: 10,
                list: []
            }
            i.list = result
            res.send(i)
        }
    })
})

// 发送待办任务清单
app.get("/acceptedTasks/:pageSize/:pageNum", (req, res) => {
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let i = {
                total: 10,
                pageNum: 1,
                list: []
            }
            i.list = result
            res.send(i)
        }
    })
})


// 修改密码
app.post("/staff/password", (req, res) => {
    let sql = "select * from orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            result = {
                status: "ok"
            }
            res.send(result)
        }
    })
})


app.post("/task/:taskId/receive", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    let result = {
        status: 'ok'
    };
    res.send(result);
})

app.post("/task/:taskId", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    let result = {
        status: 'ok'
    };
    res.send(result);
})