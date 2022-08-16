

class Hamster {
    constructor(owner, nombre, price){
        this.owner = "";
        this.nombre = ""; 
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.mood = mood;
        this.hamsters =[];
        this.bankAccount = 0;

        const p = new Person("Timmy");
        p.age = 5;
    }

   

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(this.name)
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(Hamster) {
        this.hamsters.push(Hamster);
        this.mood += 10;
        this.bankAccount - getPrice();

    }
}