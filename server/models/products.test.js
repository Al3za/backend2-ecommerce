const {getProduct}=require("./products")

test("should create product",()=>{
    const product = createProduct({
        name:"new product",
        sku:"xty-481",
        price:499,
        description:"a new product"    
    })
})
