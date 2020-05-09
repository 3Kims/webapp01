// Object Literals
// key-value
/*
let user = {
  name: "Crystal",
  age: 30,
  email: "beanskobe@gmail.com",
  location: "Berlin",
  blogs: ["Why mac & chesse rules", "money ball"],
};

// accessing properties
console.log(user.name);

//////////////////////////////////////////////////////////////////////

// overide properites
user.name = "JooHyuk";
console.log(user.name);
user["name"] = "주혁";
console.log(user.name);

// ANOTHER Way
const key = "location";
console.log(user[key]);

// type
console.log(typeof user);
//////////////////////////////////////////////////////////////////////
let user = {
  name: "Crystal",
  age: 30,
  email: "beanskobe@gmail.com",
  location: "Berlin",
  blogs: ["Why mac & chesse rules", "money ball"],
  login: function () {
    console.log("user logged in");
  },
  // arrow functions also possible
  logout: (saying) => console.log(saying),
  logBlogs: function () {
    this.blogs;
  },
};

user.login();
user.logout("아디오스");
user.logBlogs();
console.log(this);

//////////////////////////////////////////////////////////////////////

// using this, depending on location, refers to different things.

let user = {
  name: "김주혁",
  age: 30,
  email: "beanskobe@gmail.com",
  location: "Berlin",
  blogs: ["Why mac & chesse rules", "money ball"],
  login: function () {
    console.log("user logged in");
  },
  // arrow functions also possible
  logout: (saying) => console.log(saying),
  logBlogs: function () {
    // console.log(this.blogs);
    console.log(`blogs by ${this.name}`);
    //using 'this' in () =>{} arrow function will call global this.
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};


// function inside objects.
user.login();
user.logout("아디오스");
user.logBlogs();
console.log(this);
//////////////////////////////////////////////////////////////////////
// shorter way to write function inside object.
// function 키워드를 제거하기


let user = {
  name: "김주혁",
  age: 30,
  email: "beanskobe@gmail.com",
  location: "Berlin",
  blogs: ["Why mac & chesse rules", "money ball"],
  login() {
    console.log("user logged in");
  },
  // arrow functions also possible
  logout: (saying) => console.log(saying),
  logBlogs() {
    // console.log(this.blogs);
    console.log(`blogs by ${this.name}`);
    //using 'this' in () =>{} arrow function will call global this.
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.login();
user.logout("아디오스");
user.logBlogs();
console.log(this);


//////////////////////////////////////////////////////////////////////

// objects inside array

const blogs = [
  { title: "why mac & cheese rules", likes: 30 },
  { title: "why me", likes: 20 },
];

console.log(blogs);




let user = {
  name: "김주혁",
  age: 30,
  email: "beanskobe@gmail.com",
  location: "Berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "why me", likes: 20 },
  ],
  login() {
    console.log("user logged in");
  },
  // arrow functions also possible
  logout: (saying) => console.log(saying),
  logBlogs() {
    // console.log(this.blogs);
    console.log(`blogs by ${this.name}`);
    //using 'this' in () =>{} arrow function will call global this.
    this.blogs.forEach((blog) => {
      console.log(`${blog.title} : ${blog.likes}`);
    });
  },
};

user.logBlogs();
*/

//////////////////////////////////////////////////////////////////////
// console.log(Math);
// Math.PI,
// Math.E,
// Math.round(3);
// Math.ceil

//////////////////////////////////////////////////////////////////////
/*
Types in JavaScript:
1. Primitive Types =  ['Numbers','strings','Booleans','null','undefined','symobls']
    = Stored in Stack (Quicker access)
2. Reference Types = (Object) ['object literals','arrays','functions','dates','others.']
    = Stored in Heap and pointed to name in stack
*/

const One = { name: "주혁", age: 29 };
const Two = One;
console.log(One);
console.log(Two);
One.name = "도연";
One.age = 31;
console.log(One);
console.log(Two);
