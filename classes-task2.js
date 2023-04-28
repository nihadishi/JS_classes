class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        if (this.age >= person.age) {
            console.log(`${this.name} is old ${person.name}`)
        }
        else {
            console.log(`${this.name} is young ${person.name}`)
        }
    }
}
const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);
person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);