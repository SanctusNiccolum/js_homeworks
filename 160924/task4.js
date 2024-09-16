class Customer {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}


class Order {
    constructor( customer) {
        this.listOfProsuct = [];
        this.customer = customer;
    }
    addProduct(product, quantity) {
            if (this.listOfProsuct[product.name] == undefined)
            {
                this.listOfProsuct[product.name] = [quantity, product.price]
                console.log(this.listOfProsuct)
                return `product ${product.name} added to order`
            } else {
                return `product ${product.name} already in order`
            }
    }

    calculateTotal(){
        let totalPrice = 0;
        for (let product in this.listOfProsuct){
            console.log(product)
            totalPrice += this.listOfProsuct[product][0] * this.listOfProsuct[product][1];
        }
        return totalPrice; 
    }

    printOrder(){
        let allProducs = Object.keys(this.listOfProsuct)
        return `customer ${this.customer.name}, his order: ${allProducs} costs ${this.calculateTotal()} `
    }
}

// let c = new Customer('Ivan', 'ivan@cust.com')
// let order =new Order(c)

// let product1 = new Product('milk', 80)
// let product2 = new Product('bread', 20)

// order.addProduct(product1, 1)
// order.addProduct(product2, 4)

// console.log(order.printOrder())