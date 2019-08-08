class Person {

    constructor(name) {
        this.name = name || 'test';
    }

    getGreeting() {
        return `Hi I am ${this.name}`;
    }
}

class Students extends Person {
    constructor(name, major) {
        super(name);
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescrption() {
        return 'testing'
    }
}

const me = new Students('Sandaru Thilakarathne', 'Computer Science');
// me.getGreeting();

console.log(me.getDescrption());

const other = new Students();
console.log(other.getDescrption())