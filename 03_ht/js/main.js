let car = Object.create({
    showInfo: function() {
        console.log("Manifacturer:", this.manufacturer);
        console.log("Model:", this.model);
        console.log("Year of manufacture:", this.year);
        console.log("Average speed:", this.averageSpeed, "kph");
    },

    calculateTravelTime: function(distance) {
        let timeWithoutBreaks = distance / this.averageSpeed;
        let breaks = Math.floor(timeWithoutBreaks / 4);
        let totalTime = timeWithoutBreaks + breaks;
        console.log(`To overcome ${distance} km you need ${totalTime} hours with breaks`);
    }
},
{
    manufacturer: {
        value: "Ford Motor Company",
        writable: false,
        configurable: false,
        enumerable: true
    },
    model: {
        value: "Ford",
        writable: false,
        configurable: false,
        enumerable: true
    },
    year: {
        value: 2002,
        writable: false,
        configurable: false,
        enumerable: true
    },
    averageSpeed: {
        value: 90, 
        writable: true,
        configurable: true,
        enumerable: true
    }
});

car.showInfo();
car.calculateTravelTime(450);


function createFraction(numerator, denominator) {
    let newFraction = Object.create(fraction);
    newFraction.numerator = numerator;
    newFraction.denominator = denominator;
    newFraction.reduce();
    return newFraction;
}
let fraction = {
    numerator: 1,      
    denominator: 1,
    addition:function(other)
    {
        let num = this.numerator * other.denominator + other.numerator * this.denominator;
        let den = this.denominator * other.denominator;
        return createFraction(num, den);
    },
    subtraction:function(other)
    {
        let num = this.numerator * other.denominator - other.numerator * this.denominator;
        let den = this.denominator * other.denominator;
        return createFraction(num, den);
    },
    multiplication:function(other)
    {
        let num = this.numerator * other.numerator;
        let den = this.denominator * other.denominator;
        return createFraction(num, den);
    },
    division:function(other)
    {
        let num = this.numerator * other.denominator;
        let den = this.denominator * other.numerator;
        return createFraction(num, den);
    },
    reduce: function() {
        let a = Math.abs(this.numerator);
        let b = Math.abs(this.denominator);

        while (b !== 0) {
            let tmp = b;
            b = a % b;
            a = tmp;
        }

        this.numerator /= a;
        this.denominator /= a;
    },
    show: function() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }
}


let a = createFraction(2, 3);
let b = createFraction(3, 4);


let sum = a.addition(b);
sum.show(); 

let difference = a.subtraction(b);
difference.show(); 

let product = a.multiplication(b);
product.show(); 

let quotient = a.division(b);
quotient.show(); 



let time = {
    hours: 20,
    minutes: 30,
    seconds: 45,

    showTime: function() {
        let h = (this.hours < 10 ? '0' : '') + this.hours;
        let m = (this.minutes < 10 ? '0' : '') + this.minutes;
        let s = (this.seconds < 10 ? '0' : '') + this.seconds;
        console.log(h + ':' + m + ':' + s);
    },

    addSeconds: function(sec) {
        this.seconds += sec;
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
        this.normalTime();
    },

    addMinutes: function(min) {
        this.minutes += min;
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        this.normalTime();
    },

    addHours: function(hr) {
        this.hours += hr;
        this.normalTime();
    },

    normalTime: function() {
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
        if (this.hours >= 24) {
            this.hours = this.hours % 24;
        }
    }
};
time.showTime();        
time.addSeconds(30);    
time.showTime();        
time.addMinutes(90);    
time.showTime();       
time.addHours(5);       
time.showTime();        
