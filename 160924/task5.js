class Pet{
    eat(){
        console.log(`Питомец ест`)
    }
    makeSound(){}
}

class Dog extends Pet {

    eat() {
        console.log(`Собака ест`)
    }
    makeSound() {
        console.log(`Собака лает`)
    }

    sleep() {
        console.log(`Собака спит`)
    }
}

class Cat extends Pet {

    eat() {
        console.log(`Кот ест`)
    }
    makeSound() {
        console.log(`Кот мяукает`)
    }

    sleep() {
        console.log(`Кот спит`)
    }
}


// let dog = new Dog()
// let cat = new Cat()

// dog.eat()
// cat.eat()
// dog.makeSound()
// cat.makeSound()
// dog.sleep()
// cat.sleep()