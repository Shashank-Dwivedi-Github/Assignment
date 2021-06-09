//q1


var Rectangle = function(width , height){
    this.height = height;
    this.width = width;
    this.getArea = function(){
        document.write(" The Area of Rectangle is " + width*height);

    };
}

Rectangle.prototype.getArea = function(){ 
    document.write(" The Area of Rectangle is " + this.width*this.height );
    return (this.width)*(this.height);
    

};

var newPerson = {
    firstName : "Shashank", lastName : " Dwivedi" ,
    
};
document.write(newPerson.firstName);


document.write(newPerson.lastName = " Dwivedi");



var myString = {firstName : "Shashank", 
            lastName : " Dwivedi"};

var r1 = new Rectangle(5 , 4);
r1.getArea();



//Q2

var Person = function(fname, lname, age , skills , dateofbirth  , address ,married , profession){

    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address
    this.married= married;
    this.profession= profession;

}
var person1 = new Person("rahul" , "solanki", 24, ["java", "python"], "09/09/1997",
{ city:"hyderabad" , pincode: 454545}, true , "actor");


var person2 = new Person("Shashank" , "Dwivedi", 22, ["java script", "OOPs"], "12/19/1999",
{ city:"Indore" , pincode: 454775}, false , "Software Er.");


var print = function(){

    console.log(person1);
    console.log(person2);
}();
console.log(person2.age);


//Q4
class Account{
  
    constructor(id, name , balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

   
}

class SavingAccount extends Account{

    constructor(id , name , balance , intrest){
        super(id,name,balance);
        this.intrest =intrest;
    }
}

class CurrentAccount extends Account{
    constructor(id , name , balance , cashCredit){
        super(id,name,balance);
        this.cashCredit=cashCredit;
    }
}

let A1 = new CurrentAccount(101, 'rahul', 100, 10);
let A2 = new CurrentAccount(101, 'ram', 200 , 5);
let A3 = new SavingAccount(101, 'shyam', 150 , 3);
let A4 = new SavingAccount(101, 'anuj', 250, 7);

console.log(A1);









