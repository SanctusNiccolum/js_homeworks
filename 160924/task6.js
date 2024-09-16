class Expression{
    constructor(a, b, operant){
        this.a = a;
        this.b = b;
        this.operant = operant;
    }
    evaluate(){}

    toString(){
        return `${this.a} ${this.operant}`
    }
}

class Addition extends Expression{
    constructor(a, b, operant){
        super(a, b, operant)
    }
    evaluate(){
        return a+b
    }

    toString(){
        return `${this.a} ${this.operant} ${this.b} = ${this.evaluate()}`
    }
}

class Multiplication extends Expression{
    constructor(a, b, operant){
        super(a, b, operant)
    }
    evaluate(){
        return a*b
    }

    toString(){
        return `${this.a} ${this.operant} ${this.b} = ${this.evaluate()}`
    }
}


class Division extends Expression{
    constructor(a, b, operant){
        super(a, b, operant)
    }
    evaluate(){
        if (b != 0){
        return a/b
        } else {
            console.log(`на 0 делить нельзя`)
        }
    }

    toString(){
        return `${this.a} ${this.operant} ${this.b} = ${this.evaluate()}`
    }
}


class Subtraction extends Expression{
    constructor(a, b, operant){
        super(a, b, operant)
    }
    evaluate(){
        return a-b
    }

    toString(){
        return `${this.a} ${this.operant} ${this.b} = ${this.evaluate()}`
    }
}



// let a = 2
// let b = 4

// let res = new Addition(a, b, '+')
// console.log(res.evaluate())
// console.log(res.toString())