class Contra {
  constructor () {
    //存储当前待执行的动作 们
    this._currentstate = {};
  }
  //添加动作
  changeState (){
    //清空当前的动作集合
    this._currentstate = {};
    //遍历添加动作
    Object.keys(arguments).forEach( (i) => this._currentstate[arguments[i]] = true )
    return this;
  }
  //执行动作
  contraGo (){
    //当前动作集合中的动作依次执行
    Object.keys(this._currentstate).forEach( (k) => Actions[k] && Actions[k].apply(this) )
    return this;
  }
};

const Actions = {
  up : function(){ console.log('up') },
  down : function(){ console.log('down') },
  forward : function(){ console.log('forward') },
  backward : function(){ console.log('backward') },
  shoot : function(){ console.log('shoot') },
};
var littlered = new Contra();
littlered.changeState('shoot','up').contraGo();