class Person {

    name = ""
    age = 0

    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let pessoa1 = new Person("Well", 30)

console.log(pessoa1.name+ " "+ pessoa1.age)
