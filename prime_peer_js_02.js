
function People(name, empNum, pay, dept){
	this.name = name;
	this.empNum = empNum;
	this.pay = pay;
	this.dept = dept;

	this.magic = function() {
		return this.pay + this.dept / this.empNum + this.name;
	};
	this.log = function() {
		console.log(this.magic());
	};
}

var array = [];

for(i = 0; i <=20; i++){
	var obj = new People(i, randomNumber(10, 50), randomNumber(1, 10), 54)
	obj.log();
	array.push(obj);
};


//Code goes here

//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

