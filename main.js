// Exercise 1
class Subject1 {
    constructor() {
        this.observers = [];
    }
    // Add methods here
    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const observerId = observer.getId();

        this.observers = this.observers.filter(observer => observer.getId() !== observerId);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer1 {
    #id;

    constructor(id) {
        this.#id = id;
    }

    update() {
        console.log('Observer updated!');
    }

    getId() {
        return this.#id;
    }
 }

const subjectOne = new Subject1;

const observerOne = new Observer1(1);
const observerTwo = new Observer1(2);
const observerThree = new Observer1(3);

subjectOne.addObserver(observerOne);
subjectOne.addObserver(observerTwo);
subjectOne.addObserver(observerThree);

subjectOne.notifyObservers();

subjectOne.removeObserver(observerTwo);

subjectOne.notifyObservers();

// Exercise 2
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

// I
let { name, age } = person;

console.log(name, age);

// II
const fruits = ['apple', 'banana', 'cherry', 'date'];

let [, b,, d] = fruits;

console.log(b, d);

// III
let { address: { city, country } } = person;

console.log(city, country);

// Exercise 3
async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	// Your async/await code here
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("ERROR ", error)
      }
}

// Call the function to fetch posts
fetchPosts();

// Exercise 4
class Subject2 {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
        this.observers.push(observer);
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
        const observerId = observer.getId();

        this.observers = this.observers.filter(observer => observer.getId() !== observerId);
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
        this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		// TODO: Fetch data from the API and notify observers
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.notifyObservers(data);
          } catch {
            this.notifyObservers('ERROR! Please try again later.');
          }
	}
}

class Observer2 {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
        let { title } = data[0];

        if(title === undefined) {
            console.log(data);
        } else {
            console.log(title);
        }
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subjectTwo = new Subject2;

const observerFour = new Observer2;
const observerFive = new Observer2;
const observerSix = new Observer2;

subjectTwo.addObserver(observerFour);
subjectTwo.addObserver(observerFive);
subjectTwo.addObserver(observerSix);

subjectTwo.fetchAndNotify();