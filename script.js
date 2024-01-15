
function First() {}


First.prototype.hello = function () {
    console.log("Привет я метод родителя!");
};


function Second() {
    First.call(this); 
}


Second.prototype = Object.create(First.prototype);
Second.prototype.constructor = Second;


Second.prototype.hello = function () {
    First.prototype.hello.call(this); 
    console.log("А я наследуемый метод!");
};


var instance = new Second();


instance.hello();
