
// 1
// Alex = 24

// 2
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
let www = person.call
// получен доступ
console.log(www);
// выведено

// 3
const person1 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(let i in person1){
    console.log(i);
}  

// 4

const person2 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(let i in person2){
    console.log(person2[i]);
}  

// 6

const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

let rrr = JSON.stringify(person3); 

console.log(rrr);

// 7
class user {
    constructor(){
        name: 'Alex'
        age: 24
        isMarried: false
        hasCar: false
        hasJob: true
        job: 'Programmer'
        childs: ['Hanz', 'Marry']
        awards: {
            itMaster: 'Legend rang'
            driver: 'Fast man'
        }
    }
}

// 8
// String Number Boolean Object Array RegExp Function Date

// 9
function Person11(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let user1 = new Person11("Renat", 11, "Школьник")
