#### Array
```table dianzhui
[2 shift] [[2 unshift] [2 push]] [2 pop]               增删
[2 splice](s,l,N,N,N...])                  增删改
[2 sort]([fn]) reverse()                   改
----------------------------------------------------
[2 slice](s,e)                             信息 内容
[2 indexOf](item,s) lastIndexOf(item,s)    信息 位置 
[2 toString]() join('*')                   信息 字符
----------------------------------------------------
[2 slice]() concat([],arr)                 拷贝

[1 for](let i=0;i<5;i++){ break continue }                    逻辑终止&跳过
[1,2,3].[1 every](e=>e<3)                  false              逻辑与
[1,2,3].[1 some](e=>e>2)                   true               逻辑或
----------------------------------------------------------------------------
[1,2,3].[1 forEach]((e,i,a)=>{a[i]=e*2})   [2,4,6]            编辑原数组
----------------------------------------------------------------------------
[1,2,3].[1 map](e=>e*e)                    [1,2,3] > [1,4,9]  包装出一个新数组
[1,2,3].[1 filter](e=>e%2===0)             [1,2,3] > [2]      挑选出一个新数组
----------------------------------------------------------------------------
[1,2,7].[1 find](e=>e>2)                   7                  第一个验证值
[1,2,7].[1 findIndex](e=>e>2)              2                  第一个验证索引

new Array(2);                          [,]
new Array(2,3);                        [2,3]

```
#### String
```
  



+ 截取   
  -'Hello'.slice(1,2))      "e"   
'Hello'.substring(1,2)   "e"
'Hello'.substr(2,3))     "llo"
位置 
'Hello'.indexOf('l',1)   2     
'Hello'.indexOf('l',3)   3
'Hello'.lastIndexOf('l') 3
'Hello'.charAt(2)        "l"  子字符
'Hello'.charCodeAt(2)    108  Unicode编码
去空格
'He l lo'.trim()  "He l lo"
' Hello '.trim()  "Hello"
大小写   
'Hello'.toUpperCase() "HELLO"  
'Hello'.toLowerCase() "hello"
'Türkç'.toLocaleUpperCase()) "TÜRKÇ"
'Türkç'.toLocaleLowerCase()) "türkç" 
比较
'a'.localeCompare('b')  -1     
'a'.localeCompare('a')  0
'b'.localeCompare('a')  1
['猫','狗',"鸡"].sort((a, b)=>a.localeCompare(b)) ['猫','狗',"鸡"] > ["狗", "鸡", "猫"]

typeof instanceof toString.call()


split([连接符])  
match(),search(),
replace(),split()
replace(RegExp/字符串,字符串/函数)

String.fromCharCode(65)       "A"
String.fromCharCode(65,66,67) "ABC"
```

#### 类型转换
```
> Number
    true => 1       
    false => 0        
    '' => 0        
    '4S' => NaN            
    null => 0        
    undefined => NaN        
    {valueOf:()=>1} => 1
> Boolean
    false、""、0、NaN、null、undefined   =>  false         
    " " => true
```