namespace Aufgabe2 {
    /*
        class DomesticAnimal {
            name: string;
            age: number;
            color: string;
            owner?: string;
            constructor(_name: string, _color: string, _age: number = 0, _owner: string = "") {
                console.log("Animal Constructor")
                this.name = _name;
                this.age = _age;
                this.color = _color;
                this.owner = _owner;
            }
            makeSound() {
                console.log("<undefined Animal Sound>")
            }
        }
    
        class Dog extends DomesticAnimal {
            goodBoyOrGirl: boolean;
            constructor(_name: string, _color: string, _age: number = 0, _goodBoyOrGirl: boolean = true, _owner: string = "") {
                console.log("Dog Constructor")
                super(_name, _color, _age, _owner);
                this.goodBoyOrGirl = _goodBoyOrGirl;
            }
            makeSound() {
                console.log("woof!");
            }
        }
    
        class Cat extends DomesticAnimal {
            makeSound() {
                console.log("maunz!");
            }
        }
    
        let a: DomesticAnimal = new DomesticAnimal("Anim", "schwarz");
        let c: Cat = new Cat("Rey", "getiegert", 2);
        let d: Dog = new Dog("Bello", "weiß", 5, true);
    
        a.makeSound(); // "<undefined Animal Sound>"
        c.makeSound(); // "maunz!"
        d.makeSound(); // "woof!";
    
    
    
        function square(x) {
            return x * x;
        }
        console.log(square(4, false, "Käsekuchen"));
    
    
        function print(x, y) {
            console.log(x, y);
        }
        print("hi"); //-> Gibt folgendes auf der Konsole aus: "hi" undefined
    
    
    
        function minus(a: number, b?: number): number {
            if (b === undefined) return -a;
            else return a - b;
        }
    
        console.log(minus(10));     // -> -10
        console.log(minus(10, 5));  // -> 5
    
    
    
    
        function power(base: number, exponent: number = 2) {
            let result = 1;
            for (let count = 0; count < exponent; count++) {
                result *= base;
            }
            return result;
        }
    
        console.log(power(10));    // -> 100
        console.log(power(2, 6));  // -> 64
    
    
    
        function printAll(...outputs): void {
            for (let i: number = 0; i < outputs.length; i++) {
                console.log(outputs[i]);
            }
        }
        printAll(1, 2, 3, 4, 5);
    
    


    function chicken(): string {
        return egg();
    }
    function egg(): string {
        return chicken();
    }

    console.log(chicken(), "war zuerst da.");



    //Call by Value
    let a: number = 100;
    let b: number = addOne(a);
    console.log(a, b);          // 100, 101

    function addOne(n: number): number {
        return n++;
    }

    //Call by Reference
    let x: number[] = [1, 2, 3];
    let y: number[] = appendOne(x);
    console.log(x, y);          // [1, 2, 3, 0], [1, 2, 3, 0]

    function appendOne(arr: number[]): number[] {
        arr.push(0);        //hier wird direkt auf dem übergebenen Array gearbeitet
        return arr;
    }



    let arr: number[] = [10, 20, 42];

    for (let i of arr) {        //keine Typannotation für num
        console.log(i);         //10, 20, 42
    }




    let arr: number[] = [10, 20, 42];

    for (let key in arr) {        //keine Typannotation für key, immer string.
        console.log(key + ": " + arr[key]);  // "0", "1", "2"  // 10, 20, 42 
    }

    let obj: SomeInterface = {
        name: "Lukas",
        age: 25
    };

    for (let key in obj) {
        console.log(key);         // "name", "age"
        console.log(obj[key]);    // "Lukas", 25 
    }




    class Animal {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Woof! Woof!");
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();




    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distanceInMeters: number = 0) {                        //methode
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move();


    
    class Vector {
        x: number;
        y: number;

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1: Vector = new Vector();
    v1.scale(2);
    console.log(v1);


    let canvas: HtmlCanvasElement = <HtmlCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    let path: Path2D = new Path2D();
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    context.stroke(path);
*/

    function min(): void {
        let x: number = Math.min(30, 5, 15, 3);
        console.log(x);
    }
    min();


    function isEven(): void {
        let y: number = -2;
        let z: boolean = false;
        if (y % 2 == 0) {
            z = true;
        }
        console.log(z);


    }
    isEven();




    interface Student {
        name: string;
        course: "OMB" | "MKB" | "MIB";
        age: number;
    }
    let s1: Student = { name: "Anna", course: "OMB", age: 23 };
    let s2: Student = { name: "Lena", course: "MKB", age: 19 };
    let s3: Student = { name: "Nick", course: "MIB", age: 21 };

    let arr: Student[] = [s1, s2, s3, { name: "Tim", course: "OMB", age: 25 }];
    for (var i in arr) {
        for (var j in arr[i]) {
            console.log(arr[3][1]);
        }
    }













}