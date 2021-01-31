let express = require('express') //webpackServer自带
let app = express()
app.get('api/user', (req,res)=>{
  res.json({name:'服务数据'})
})
app.listen(3000)  