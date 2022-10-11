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
