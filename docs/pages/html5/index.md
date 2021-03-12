canvas

```
▇ 管理 ▇
clearRect(x, y, width, height) 清除画布特定矩形区域中像素。
beginPath()                    开启一条新路径的唯一方法
save()                         保存当前环境状态
restore()                      恢复当前环境状态

▇ 路径 ▇ 
moveTo(x, y)                            抬悬笔触定位到目标位置
lineTo(x, y)                            当前路径延伸到下一点
arc(x, y, r, sAngle, eAngle, nishizhen) 当前路径添加一条弧线
arcTo(sX, sY, eX, eY, r)                创建介于两个切线之间的弧
rect(x, y , width, height)              矩形子路径。
quadraticCurveTo(cx, cy, x, y)          二次贝塞尔曲线 开始点智能获取或moveTo设定 控制点x 控制点y 目标点x 目标点y
bezierCurveTo(c1x,c1y,c2x,c2y,x,y)      三次贝塞尔曲线 开始点智能获取或moveTo设定 第一个控制点xy 第二个控制点xy 目标点xy

▇ 路径工具 ▇
fill()         填充当前路径 
stroke()       描边当前路径
fillText       填充文本
strokeText     描边文本
closePath()    闭合路径 与beginPath没有逻辑关系！！！！！！！

▇ 绘制 ▇
drawImage(img, ix,iy,iwidth,iheight, x,y,width,height)  图片 图片剪切点 图片剪切范围 放置在画布的位置 在画布上显示的尺寸
fillRect(x,y,width,height)                              绘制矩形
strokeRect(x,y,width,height)                            描边矩形。

▇ 变换 ▇
rotate(angle)                  以弧度计 角度&弧度换算：角度*Math.PI/180 公式进行计算 如需旋转 5 度：5*Math.PI/180
scale(scalewidth,scaleheight)  以1为基数
translate(x, y)                位移
clip()                         用当前路径去定义的剪切区域

▇ 复杂填充 ▇
var linearGradient = context.createLinearGradient(0, 0, 170, 0)           创建线性渐变模型 开始点xy 结束点xy
    linearGradient.addColorStop(0, "#f00")                                为模型添加颜色 停止位置(跨程映射在0-1位置) 颜色值
    linearGradient.addColorStop(0.5, "#000")
    context.fillStyle = linearGradient                                    使用模型
    context.fillRect(20, 20, 150, 100)
var pattern = context.createPattern(image,"repeat")                       资源排列模型 用于填充路径 repeat|repeat-x|repeat-y|no-repeat
    context.rect(0,0,150,100) 
    context.fillStyle = pattern
    context.fill() 
var radialGradient = context.createRadialGradient(x0, y0, r0, x1, y1, r1) 放射圆形渐变模型 起点圆圆心xy 半径 放射圆圆心xy 半径
    radialGradient.addColorStop(0,"red");
    radialGradient.addColorStop(1,"white");
    context.fillStyle = radialGradient                                    使用模型
    context.fillRect(20, 20, 150, 100)
```