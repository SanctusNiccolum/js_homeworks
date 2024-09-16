class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.basket = {};
    }
    addProduct(product, quantity) {
        if (this.basket[product.name] == undefined)
        {
            this.basket[product.name] = [quantity, product.price]
            console.log(this.basket)
            return `product ${product.name} added to basket`
        } else {
            return `product ${product.name} already in basket`
        }

        
    }
    deleteProduct(product){
        if (this.basket['product'] == undefined) {return `not found this product`}
        delete this.basket['product']
        return `Product ${product.name} is deleted`
    }

    getTotalPrice(){
        let totalPrice = 0;
        for (let product in this.basket){
            console.log(product)
            totalPrice += this.basket[product][0] * this.basket[product][1];
        }
        return totalPrice;
    }
    checkout(){
        let allProducs = Object.keys(this.basket)
        let res = `${allProducs} total cost is ${this.getTotalPrice()}`
        this.basket = {}
        return res
    }
}

// let product1 = new Product('milk', 80)
// let product2 = new Product('bread', 20)
// let basket = new ShoppingCart()


// console.log(basket.addProduct(product1, 1))
// console.log(basket.addProduct(product2, 3))

// console.log(basket.basket)
// console.log(`-------`)

// console.log(basket.getTotalPrice())
// console.log(basket.checkout())
