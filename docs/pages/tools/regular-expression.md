
```table
.  通配符[^\n\r\u2028\u2029]，换行符、回车符、行分隔符和段分隔符除外

\d  [0-9]              \D  [^0-9]             匹配任意非数字的字符
\w  [0-9a-zA-Z_]       \W  [^0-9a-zA-Z_]      匹配任意不是字母，数字，下划线，汉字的字符
\s  [ \t\v\n\r\f]      \S  [^ \t\v\n\r\f]     匹配任意不是空白符的字符
\b  a\b \bnice         \B                     匹配不是单词开头或结束的位置(隐式位置) 

?  {0,1}            +  {1,}           *  {0,}

/i  不区分大小写     /g  全局匹配       /m  多行匹配  

取反      \W \S \D [^x]匹配除了x以外的任意字符 !(else|\s) [^aeiou]匹配除了aeiou这几个字母以外的任意字符 
惰性匹配  量词 + ?  实现惰性匹配  {m,n}?　　{m,}?　　??　　+?　　*?


```
例子：
```table dianzhui
/\b(?:(?!(else|\s))[\w\W])+\b/gi  "[1| if] else [1| no] else [1| but] [1| if]" 
/<span[^>]+>/                     "[1| <span title="#">]"
a\b \bnice                        "It's [1| a nice] day today."   
```

```dianzhui
/SCENE\(([^\)]+)\)/.[2 exec](string) 

let item
while ((item = /正则/.exec(data)) !== null) {
  
}
```