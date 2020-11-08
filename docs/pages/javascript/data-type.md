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

        [1 for](let i=0;i<5;i++){ }                                             逻辑终止(break)&跳过(continue)
[1,2,3].[1 every](e=>e<3)                  false                                逻辑与
[1,2,3].[1 some](e=>e>2)                   true                                 逻辑或
------------------------------------------------------------------------------------------------
[1,2,3].[1 forEach]((e,i,a)=>{a[i]=e*2})   [2,4,6]                              编辑原数组
------------------------------------------------------------------------------------------------
[1,2,3].[1 map](e=>e*e)                    [1,2,3] > [1,4,9]                    遍历数组 返回和原数组同等长度计算值的数组
[1,2,3].[1 filter](e=>e%2===0)             [1,2,3] > [2]                        过滤数组 返回的是原数组的子集
------------------------------------------------------------------------------------------------
[1,2,7].[1 find](e=>e>2)                   7                                    第一个验证值
[1,2,7].[1 findIndex](e=>e>2)              2                                    第一个验证索引

new Array(2);                          [,]
new Array(2,3);                        [2,3]

扩展+

```
#### String
```table dianzhui
------------------------------------------------------------------------------------------------------------
'Hello'.[3 slice](1,2))         "e"       'Hello'.slice(-3)           "llo"     截取范围 第一个负数参数为5+-3
'Hello'.[3 substring](1,2)      "e"       'Hello'.substring(-3)     "Hello"     截取范围 所有负数参数转为 0
'Hello'.[3 substr](2,3))        "llo"     'Hello'.substr(-3, -4))   ""          截取长度 第一个负数参数为5+-3 第二个负数参数转为 0
------------------------------------------------------------------------------------------------------------
'Hello'.[3 indexOf]('l',1)       2                                              位置
'Hello'.[3 indexOf]('l',3)       3
'Hello'.[3 lastIndexOf]('l')     3
'Hello'.[3 charAt](2)           "l"                                             子字符
'Hello'.[3 charCodeAt](2)        108                                            Unicode编码
------------------------------------------------------------------------------------------------------------
'He l lo'.[3 trim]()  "He l lo"                                                 去空格
' Hello '.[3 trim]()  "Hello"
------------------------------------------------------------------------------------------------------------
'Hello'.[3 toUpperCase]() "HELLO"                                               大小写
'Hello'.[3 toLowerCase]() "hello"
'Türkç'.[3 toLocaleUpperCase]()) "TÜRKÇ"
'Türkç'.[3 toLocaleLowerCase]()) "türkç" 
------------------------------------------------------------------------------------------------------------
'a'.[3 localeCompare]('b')  -1                                                  比较
'a'.[3 localeCompare]('a')  0
'b'.[3 localeCompare]('a')  1
['猫','狗',"鸡"].sort((a, b)=>a.localeCompare(b)) ['猫','狗',"鸡"] > ["狗", "鸡", "猫"]

typeof instanceof toString.call()


split([连接符])  
match(),search(),
replace(),split()
replace(RegExp/字符串,字符串/函数)

String.fromCharCode(65)       "A"
String.fromCharCode(65,66,67) "ABC"

扩展+
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