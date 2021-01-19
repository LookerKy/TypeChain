### 1. TypeScript

- TypeScript 는 내가 놓치는 부분에 대해서도 모두 알려준다

```javascript

const name = "kyuyoung",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
```
- 위의 코드에서 gender? 는 선택적 파라미터가 된다. `?`를 뺀다면 gender를 parmeter로 전달하지 않았기 때문에 컴파일시 Error를 유발한다.

### Interface

- 간단하게 설명해서 TypeScript가 object를 인식시키 위한 목적으로 많이 사용된다.(그 외의 다양한 목적에 대해선 차차 서술해 나가겠다.)

```javascript
interface Human {
  name: string;
  age: number;
  gender: string;
};

const person = {
  name : "LookerKy",
  age : 24,
  gender : "male"
};

const sayHi = (person: Human): string =>{
  return `Hello ${person.name}, you are ${person.age}, you are a ${gender}`
};

console.log(sayHi(person));

```


### 부록. Error

- tsc-watch를 사용 시(특정 다른 typescript의 원초적인 모듈을 사용시에 모두 나타날 수 있음) typescript를 global로 설치 했을 때의 문제 

[문제]

```
Cannot Find module 'typescript'
```

[해결법]
```shell
npm link typescript
```