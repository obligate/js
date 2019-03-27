class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `(${this.x},${this.y})`
    }
}


console.log(typeof Point)
console.log(Point === Point.prototype.constructor)
// 上面代码表明，类的数据类型就是函数，类本身就指向构造函数

let point = new Point(23,45)
console.log(point.toString())
console.log(point.hasOwnProperty('x'))



// 与函数一样，类也可以使用表达式的形式定义
// 1. const MyClass = class Me { /* ... */ };
const myClass = class Me{
    getClassName(){
        return Me.name;
    }
}
let inst = new myClass();
console.log(inst.getClassName())
// 2. 采用 Class 表达式，可以写出立即执行的 Class
//  let person = new class{ }();
let person = new class{ 
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name)
    }
}('Whisper');

person.sayName()



class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }
    toString(){
        return `${this.color}  ${super.toString()}`
    }
}


let cp = new ColorPoint(2,5,'Red');
console.log(cp.toString())
console.log(cp instanceof Point)
console.log(cp instanceof ColorPoint)
console.log(Object.getPrototypeOf(ColorPoint) === Point) // Object.getPrototypeOf方法可以用来从子类上获取父类,因此，可以使用这个方法判断，一个类是否继承了另一个类