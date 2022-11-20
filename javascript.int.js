// let a = 52223 / 3;
// let b = 54445 / 4;
// //올림
// console.log(Math.ceil(a));

// //소수점 다 버리기
// console.log(Math.floor(a));

// // 소수점 2번째 자리 까지  보여주기
// console.log(a.toFixed(2));

// //소수점 반올림
// console.log(Math.round(b));

// console.log(isFinite("200"));
// console.log(isFinite("add"));

// //랜덤 함수 생성
// console.log(Math.random() * 10);

// // 거듭 제곤 함수 생성
// console.log(Math.pow(2, 10));

// let str = "Hello world";

// console.log(str.indexOf("world"));

// let str = "Good evening";

// console.log(str.substring(5));

// let str = "Good evening";

// console.log(str.substring(0, 5));

// let fruits = [];
// fruits.push("사과");
// fruits.push("배");
// fruits.push("포도");
// fruits.pop();
// fruits.shift();
// fruits.push("포도");
// fruits.unshift("오렌지");
// console.log(fruits);

// let fruits = ["사과","배","오렌지","바나나"];

// for(let x of fruits){
//   console.log(x);
// }

// let arr = ["나는", "밥을", "좋아합니다."];
// arr.splice(0, 2, "저는", "국을"); // 저는 국을 좋아합니다
// console.log(arr);

// let animals = [
//   // { key: 1, name: "사자" },
//   // { key: 2, name: "호랑이" },
//   // { key: 3, name: "원숭이" },
//   // { key: 4, name: "기린" },
//   "사자",
//   "호랑이",
//   "토끼",
// ];

// let animal = animals.find((item) => item.key == 1);
// console.log(animal.name);

// let animal = animals.map((item) => item.length);
// console.log(animal);

// let ABC = "ABCDE";

// let abc = ABC.split("").reverse().join("");

// console.log(abc);

// let str = "1234";

// let sum = str.split("").reduce((a, b) => a + Number(b), 0);

// console.log(sum);

// const arr = [1, 2, "3", "4", 5];
// const answer = arr.reduce((a, c) => parseInt(a) + parseInt(c));

// console.log(answer);

// console.log(+"100px");

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 3)); // 8

// console.log("hello");
// var myname = "HEEE"; // var 변수
// let myname2 = "HEEE2"; // let 변수

// var animal = "fish";
// var yourAnimal;

// function animal() {
//   console.log("cat");
// }

// function yourAnimal() {
//   console.log("dog");
// }

// console.log(typeof animal); // > "string"
// console.log(typeof yourAnimal); // > "string"

//writable true이면 값을 수정할 수 있다. false이면 읽기만 가능
//enumberable - true 이면 반복문을 사용해 나열
//configurable - true 이면 프로퍼티 삭제나 플래그 수정이 가능

// let animal = {
//   animal: "Dog",
// };

// Object.defineProperty(animal, "animal", {
//   writable: false,
// });

// animal.animal = "Cat";

// console.log(animal.animal);

// let animal = {
//   animal: "cat",
//   animal_to: "dog",
//   get fullanimalName() {
//     return `${this.animal} ${this.animal_to}`;
//   },

//   set fullanimalName(value) {
//     [this.animal, this.animal_to] = value.split(" ");
//   },
// };
// console.log(animal.fullanimalName);
// animal.fullanimalName = "rabbit";
// animal.fullanimalName = "fish";
// console.log(animal.animal);

// function Man() {}
// Man.prototype = {
//   gender: true,
// };

// let man = new Man();

// delete Man.prototype.gender;

// console.log(man.gender);

// let Man = {
//   run: null,
// };

// let Woman = {
//   __proto__: Man,
//   run: true,
// };

// console.log(Woman.run);

// delete Woman.run;

// console.log(Woman.run);

// delete Man.run;

// console.log(Woman.run);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(this.name);
//   }
// }

// let person = new Person("park");

// person.run = function () {
//   return "50";
// };

// person.hello();

// let kim = new Person("kim");

// console.log(kim.run());

// class Clock {
//   constructor(time) {
//     this.time = time;
//   }
//   click = () => {
//     console.log(this.time);
//   };
// }

// let clock = new Clock("10시");

// setTimeout(clock.click, 1000);

// class Person {
//   constructor(name) {
//     this.kg = 0;
//     this.name = name;
//   }
//   weight(kg) {
//     this.kg = kg;
//     console.log(`${this.name}의 몸무게는 ${this.kg} `);
//   }
//   run() {
//     console.log(`${this.name}이 달립니다.`);
//   }
// }

// class Kim extends Person {
//   stop() {
//     console.log(`${this.name}이 멈췄습니다.`);
//   }
//   run() {
//     super.run();
//     this.stop();
//   }
// }

// let kim = new Kim("park");
// kim.weight(10);
// kim.run();

// class Person {
//   constructor(name) {
//     this.kg = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`여기는 부모 클래스임.`);
//   }
// }

// class Kim extends Person {
//   run() {
//     console.log(`여기는 자식 클래스임.`);
//   }
// }
// let kim = new Person("park");

// kim.run("park");

// class Animal {}

// console.log(animal instanceof Animal);

// animal.prototpy = {};

// console.log(animal instanceof Animal);

// Animal.prototype = {};

// console.log(animal instanceof Animal);

// function Animal() {}

// let animal = new Animal();

// Animal.prototype = {};

// console.log(animal instanceof Animal);

//비동기

// const myPromise = new Promise((resolve, reject) => {
//   console.log("doning some heavy work: network, read files");
//   setTimeout(() => {
//     resolve("hi");
//     reject(new Error("this is error msg"));
//   }, 2000);
// });

// myPromise
//   .then((value) => {
//     console.log(value); // resolve 가 있다면 'hi' 출력
//   })
//   .catch((error) => {
//     console.log(error); // reject에 있는 'this is error msg' 출력
//   })
//   .finally(() => {
//     console.log("finally!!");
//   });

// const initialPokemon = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("파이리"), 1000);
//   });

// const nextPokemon = (prevPokemon) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${prevPokemon} => 리자드`), 1000);
//   });

// const finalPokemon = (prevPokemon) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${prevPokemon} => 리자몽`), 1000);
//   });

// initialPokemon() // 1초 소요
//   .then((prev) => {
//     console.log(prev); // 파이리
//     return nextPokemon(prev); // 1초 소요
//   })
//   .then((prev) => {
//     console.log(prev); // 파이리 => 리자드
//     return finalPokemon(prev); // 1초 소요
//   })
//   .then(console.log); // 파이리 => 리자드 => 리자몽

// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log());

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     // (***)

//     console.log(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 4
//     return result * 2;
//   });

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }

//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new HttpError(response);
//         }
//       })
//   }

//   // 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
//   function demoGithubUser() {
//     let name = prompt("GitHub username을 입력하세요.", "iliakan");

//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         alert(`이름: ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }

//   demoGithubUser();

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 10;
//   }

//   function f() {
//     // shows 10 after 1 second
//     wait().then(result => alert(result));
//   }

// //   f();
// const arr = new Proxy([], {
//   set(target, prop, value) {
//     if (typeof value === "number") {
//       target[prop] = value;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push("졸려"); // VM503:1 Uncaught TypeError: 'set' on proxy: trap returned falsish for property '3'

// console.log([...arr]); // 1, 2, 3

// const Animal = {
//   name: "tofu",
//   type: "Dog",
//   greeting: function () {
//     console.log(`Animal name is ${this.name}`);
//   },
// };

// console.log(Reflect.has(Animal, "type"));
// console.log(Reflect.has(Animal, "gender"));

// function abc(a, b) {
//   const ab1 = a + b;

//   console.log(ab1);
// }

// abc(1, 2);

function a() {
  const ab = 123;
  console.log(ab);
  return ab;
}

function b() {
  a().ab;
}

b();
