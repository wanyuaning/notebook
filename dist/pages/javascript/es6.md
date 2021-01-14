# Promise/then
```
[b b5 cf| 回调地狱解脱 ] 横向赋值 链式调用 传参1个
```

# async/await
```
[b b5 cf| 同一作用域 自动 异步方案 ] 顺序执行 同步习惯 无传参限制 基于Promise的优化

```

# generator/yield/next
```
[b b5 cf| 同一作用域 手动 异步方案 ]
function [green b|*]main(){   // [object Generator]
  [green b|yield] 1
  [green b|yield] 2
  return 3
}

let m = main()      // {<suspended>}
m.[green b|next]()            // {value: 1, done: false}
m.[green b|next]()            // {value: 2, done: false}
m.[green b|next]()            // {value: 3, done: true }

```
