// oop is a concept to write the code
// oop i s a package contain properties and methods

//old version
// function User(id, name, salary) {
//   this.id = id;
//   this.name = name;
//   this.salary = salary + (salary * 10) / 100;

//   this.print = function () {
//     console.log(this.id, this.name, this.salary);
//   };
// }

// let user1 = new User(101, "abdelrahman", 2000);
// let user2 = new User(102, "ahmed", 3000);

// user1.print(); //101 abdelrahman 2200
// user2.print(); //102 ahmed 3300

//new version
class User {
  //static properties for the main class only
  static count = 0;

  //private properties
  #expSalary;
  constructor(id, name, expectedSalary, salary) {
    this.id = id;
    this.name = name;
    this.#expSalary = expectedSalary;
    this.salary = salary + (salary * 10) / 100;

    //this is also property not a method
    this.msg = () => {
      return `hello ${this.name} your salary is ${this.salary}`;
    };

    User.count++;
  }

  //methods

  hello() {
    return `hello ${this.name} your salary is ${this.salary}`;
  }

  printAllData() {
    console.log(this.id, this.name, this.salary);
  }

  upadateName(newName) {
    this.name = newName;
  }

  getExpSalary() {
    return parseInt(this.#expSalary);
  }

  //static methods for the main class only
  static getCount() {
    return User.count;
  }
}

let user1 = new User(101, "abdelrahman", 2000, 2000);
let user2 = new User(102, "ahmed", 3000, 3000);

console.log(user1.msg()); // hello abdelrahman your salary is 2200
console.log(user1.hello()); // hello abdelrahman your salary is 2200

user1.printAllData(); // 101 abdelrahman 2200
user1.upadateName("ahmed");
user1.printAllData(); // 101 ahmed 2200

console.log(User.getCount()); // 2
// console.log(user1.getCount()); // ERROR

class Admin extends User {
  constructor(id, name, expSalary, salary, department) {
    super(id, name, expSalary, salary);
    this.department = department;
  }
}

let admin = new Admin(103, "ali", "17000 gneh", 4000, "it");
console.log(admin);

console.log(Admin.getCount()); // 3
console.log(admin.getExpSalary()); // 3000
