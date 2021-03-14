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

/* 状态模式
 * 
 */
class StatePattern{
  #state      
  setStateObj(obj){this.#state = obj}
  // 触手API
  addState(name, fn){this.#state[name] = fn}
  get(name){return this.#state[name]}
  run(name){return this.#state[name].apply(null, arguments)}
}