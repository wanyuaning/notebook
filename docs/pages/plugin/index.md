```
[h4|canvas绘图反锯齿]
canvas(canvas,ctx) 
function antiAliasing(cvs,ctx){
    var _width = cvs.width,_height=cvs.height;
    var _ratio= window.devicePixelRatio || 4;
    cvs.style.width = _width + "PX";
    cvs.style.height = _height + "PX";
    cvs.height = _height * _ratio;
    cvs.width = _width * _ratio;
    ctx.scale(_ratio, _ratio);
}

[h4|日期时间格式转换]
Date.prototype.format = function(fmt) { //author: meizz
var o = {
"M+": this.getMonth() + 1, //月份
"d+": this.getDate(), //日
"h+": this.getHours(), //小时
"m+": this.getMinutes(), //分
"s+": this.getSeconds(), //秒
"q+": Math.floor((this.getMonth() + 3) / 3), //季度
"S": this.getMilliseconds() //毫秒
};
if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
for(var k in o)
if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
return fmt;
};

[h4|viewport固定下字号解决方案]
<div class="fontsize-adaptive">
    <span>
        text
    </span>
</div>
$('.fontsize-adaptive').each(function(i,e){
    $(e).height($(e).height()).height($('span',e).height());
});
```