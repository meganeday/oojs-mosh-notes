// Object Literals

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };
// circle.draw();

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         location: {
//             x: 1,
//             y: 1
//         },
//         draw: function(){
//             console.log('draw factory function');
//         }
//     };
// }

// const corcle = createCircle(1);
// corcle.draw();


// Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw constructor function');
//     }
// }

// const anotherCircle = new Circle(1);
// anotherCircle.draw();

// Data Types
// let x = {value: 10};
// let y = x;

// x.value = 20

// let obj = {value: 10};
// function increase(obj) {
//     obj.value++;
//     console.log(obj);
// }

// increase(obj);
// console.log(obj);

//Abstraction
// function Circle(radius) {
//     this.radius = radius;
    
//     let defaultLocation = { x: 0, y: 0};

    // this.getDefaultLocation = function() {
    //     return defaultLocation;
    // }

//     this.draw = function() {
//         console.log('draw');
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(valut) {
//             if(!value.x || !value.y)
//                 throw new Error('Invalid location.');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.draw();

// Stopwatch Exercise





function Stopwatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }
        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if (!running) {
            throw new Error('Stopwatch has not started.');
        }
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        console.log(duration)
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
}

const sw = new Stopwatch();