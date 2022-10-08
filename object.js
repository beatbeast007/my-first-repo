user = {
    sayHi: function () {
        alert("Hello");
    }
};

// method shorthand looks better, right?
user = {
    sayHi() { // same as "sayHi: function(){...}"
        alert("Hello");
    }
};


user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // leads to an error
    }

};


admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); //



user = { name: "John" };
admin = { name: "Admin" };


function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); //

function sayHi() {
  alert(this);
}

sayHi(); // undefined
