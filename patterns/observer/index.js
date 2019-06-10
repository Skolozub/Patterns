// Observer

/*
  Наблюдатель представляет собой шаблон проектирования, 
  в котором объект (в данном паттерне именуются субъектом) 
  хранит список объектов (наблюдателей), зависящих от его 
  состояния. При любом изменении состояния субъекта происходит 
  автоматическое уведомление наблюдателей. Когда с субъектом 
  произошло что-то интересное, он проходит по списку 
  наблюдателей и сообщает им об этом («что-то интересное» может 
  содержать конкретные данные).

  Если мы больше не хотим, чтобы какой-либо наблюдатель был 
  привязан к изменениям субъекта, то мы можем удалить его 
  списка наблюдателей.
*/

function Observable() {
  let observers = [];

  this.sendMessage = function(msg) {
    observers.forEach(observer => observer.notify(msg));
  };

  this.addObserver = function(observer) {
    observers = [...observers, observer];
  };
}

function Observer(behavior) {
  this.notify = function(msg) {
    behavior(msg);
  };
}

const obs1 = new Observer(function(msg) {
  console.log(`obs1 - ${msg}`);
});
const obs2 = new Observer(function(msg) {
  console.log(`obs2 - ${msg}`);
});

const observable = new Observable();
observable.addObserver(obs1);
observable.addObserver(obs2);

setTimeout(function() {
  observable.sendMessage(`Текущее время ${new Date()}`);
}, 3000);
