function Product(name, price){
	this.name = name;
	this.price = price;
}

Product.prototype.print = function(){
	console.log(this.name,'가격은 ', this.price,'원입니다');
	// body... 
};

let products = [
	new Product('바나나', 1200),
	new Product('사가', 2000),
	new Product('베', 3000),
	new Product('고구마', 700),
	new Product('감자', 600),
	new Product('수박', 5000)
];

for(let product of products){
	product.print()
}