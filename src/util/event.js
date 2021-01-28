class EventEmitter {
  constructor() {
    // 存储时间/回调键值对
    this._events = this._events || new Map();
    // 设立监听上线
    this._maxListeners = this._maxListeners || 10
  }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function(type, ...args) {
  let hander;
  // 从储存事件键值对的this._events中获取对应事件回调函数
  hander = this._events.get(type);
  if (Array.isArray(hander)) {
    for (let i = 0; i < hander.length; i++) {
      if (args.length > 0) {
        hander[i].apply(this, args)
      } else {
        hander[i].call(this)
      }
    }
  } else {
    if (args.length > 0) {
      hander.apply(this, args);
    } else {
      hander.call(this)
    }
  }
  return true;
}

// 监听名为type的事件
EventEmitter.prototype.addListener = function(type, fn) {
  // 获取对应事件名称的函数清单
  const handler = this._events.get(type)
  // 将type事件以及对应的fn函数放入this._events中储存
  if (!handler) {
    this._events.set(type, fn);
  } else if (handler && typeof handler === 'function') {
    // 如果 handler 是函数 说明只有一个监听者
    // 多个监听者 需要用数组存储
    this._events.set(type, [handler, fn]);
  } else {
    // 已经有多个监听者，直接往数组里push函数即可
    handler.push(fn);
  }
}

// 移除监听

EventEmitter.prototype.removeListener = function(type, fn) {
  // 获取对应事件名称的函数清单
  const handler = this._events.get(type);
  
  if (handler && typeof handler === 'function') {
    this._events.delete(type, fn)
  } else {
    let position;
    // 如果是数组，说明被监听多次 要找到对应的函数
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        position = i
      } else {
        position = -1
      }
    }

    // 找到匹配的函数 从数组中移除
    if (position !== -1) {
      handler.splice(position, 1);
      // 如果清除后只有一个函数 那么取消数组 以函数形式保存
      if (handler.length === 1) {
        this._events.set(type, handler[0])
      }
    } else {
      return this
    }
  }
}

// 实例化
const emitter = new EventEmitter();

// 监听一个名为 getName 的事件 对应一个回调函数

emitter.addListener('getName', name => {
  console.log(`监听到了 ${name}`);
})

emitter.addListener('getName', name => {
  console.log(`监听到了 2 ${name}`);
})

// 触发 getName 事件
emitter.emit('getName', 'motou')

console.log(emitter);