// let student = new Object();
// student.name = "Denis";
// student.age = 19;
// console.log(student)

// let test = "marks";
// let id = 5;
// let student = {
//     name:"Denis",
//     year:2005,
//     [test]:[11,8,12,3 ],
//     id:id,
//     ["user " + id]:"user",
//     getAge:function() {return new Date().getFullYear() - this.year}
// }
// console.log(student)

// student.surname = "Bondar"
// console.log(student.name)
// console.log(student[test])
// console.log(student["user 5"])
// for (const key in student) {
//     document.write(`<p> ${key} : ${student[key]} </p>`)
// }

// console.log("name" in student)
// console.log(test in student)
// console.log("test" in student)

// delete student["user 5"]

// function Car(model, year)
// {
//     this.model = model;
//     this.year = year;
//     this.print = function() {console.log(this.model, this.year)}
// }

// let ford = new Car("Ford", 2000);
// let bmw = new Car("BMW", 2020)

// console.log(ford)
// console.log(bmw)

// // ford.color = "black"
// // bmw.color = "black"

// Car.prototype.color = "black"
// ford.color = "pink"

// Car.prototype.getAge = function() {return new Date().getFullYear() - this.year}

// console.log(ford.color)
// console.log(bmw.color)

let ford = Object.create({
    calculateDistancePerYear:
    function()
    {
        Object.defineProperties(this, "distanceYear", {
            value:this.distance / this.age,
            writable:false,
            configurable:false,
            enumerable:false
        })
    }
},{
    model:
    {
        value:"Ford",
        writable:false,
        configurable:false,
        enumerable:true
    },
    year:
    {
        value:2002,
        writable:false,
        configurable:false,
        enumerable:true
    },
    distance:
    {
        value:1234,
        writable:true,
        configurable:true,
        enumerable:false
    },
    age:
    {
        get:function(){console.log("get value"); return new Date().getFullYear() - this.year },
        set:function() {console.log("edit value age", this.age > 30)}
    }
})
console.log(ford)
// for (const key in ford) {
//     document.write(`<p> ${key} : ${ford[key]} </p>`)
// }
console.log(Object.keys(ford))


function print(a)
{
    Object.keys(ford).forEach(key => document.writeln(`<p> ${key}: ${ford[key]} </p>`))
}
print(ford)