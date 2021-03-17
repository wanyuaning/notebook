[设计模式的六大原则](pages/concept/object-oriented/index.md?id=设计模式的六大原则) [算法](pages/concept/algorithm/index.md)

##### 设计模式

// 策略模式 //
class StrategyPattern{
  #strategy
  #name
  setStrategyObj(obj){this.#strategy = obj}
  useStrategy(name){this.#name = name}
  // 触手API
  addStrategy(name, fn){this.#strategy[name] = fn}
  get(){return this.#strategy[this.#name]}
  run(){return this.#strategy[this.#name].apply(null, arguments)}
}


// 状态模式 //
class StatePattern{
  #state      
  setStateObj(obj){this.#state = obj}
  // 触手API
  addState(name, fn){this.#state[name] = fn}
  get(name){return this.#state[name]}
  run(name){return this.#state[name].apply(null, arguments)}
}


// 观察者模式 //
class StatePattern{}
// 发布订阅模式 //
class StatePattern{}


