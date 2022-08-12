

class Hamster {
    constructor(owner, nombre, price){
        this.owner = "",
        this.nombre = "", 
        this.price = 15,
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
