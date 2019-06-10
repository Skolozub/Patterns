// Module

/*
  «Модуль» — это популярная реализация паттерна, 
  инкапсулирующего приватную информацию, состояние 
  и структуру, используя замыкания. Это позволяет 
  оборачивать публичные и приватные методы и переменные 
  в модули, и предотвращать их попадание в глобальный 
  контекст, где они могут конфликтовать с интерфейсами 
  других разработчиков. Паттерн «модуль» возвращает 
  только публичную часть API, оставляя всё остальное 
  доступным только внутри замыканий.

  Это хорошее решение для того, чтобы скрыть внутреннюю 
  логику от посторонних глаз и производить всю тяжелую 
  работу исключительно через интерфейс, который вы 
  определите для использования в других частях вашего 
  приложения. Этот паттерн очень похож на 
  немедленно-вызываемые функции (IIFE), за тем исключением, 
  что модуль вместо функции, возвращает объект.

  Важно заметить, что в JavaScript нет настоящей приватности. 
  В отличии от некоторых традиционных языков, он не имеет 
  модификаторов доступа. Переменные технически не могут 
  быть объявлены как публичные или приватные, и нам приходится 
  использовать область видимости для того, чтобы эмулировать 
  эту концепцию. Благодаря замыканию, объявленные внутри 
  модуля переменные и методы доступны только изнутри этого 
  модуля. Переменные и методы, объявленные внутри объекта, 
  возвращаемого модулем, будут доступны всем.
*/

// const Module = (function() {
//   let sum = 0;
//   const goods = [];

//   return {
//     addProduct: function(product) {
//       sum += product.price;
//       goods.push(product);
//     },
//     printProducts: function() {
//       goods.forEach(product => console.log(product.name, product.price));
//     },
//     printSum: function() {
//       console.log('sum: ', sum)
//     }
//   };
// })();

// const sault = {
//   name: "Соль",
//   price: 20
// };
// const sugar = {
//   name: "Сахар",
//   price: 35
// };

// Module.addProduct(sault);
// Module.addProduct(sugar);
// Module.printProducts();
// Module.printSum();