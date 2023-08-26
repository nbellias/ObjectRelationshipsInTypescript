// Define some basic classes

class Engine {
    start() {
        console.log("Engine started");
    }

    stop() {
        console.log("Engine stopped");
    }
}

class Wheels {
    rotate() {
        console.log("Wheels rotating");
    }
}

class Seats {
    sit() {
        console.log("Sitting on the seats");
    }
}

class Doors {
    open() {
        console.log("Doors opened");
    }

    close() {
        console.log("Doors closed");
    }
}

class Dashboard {
    showSpeed(speed: number) {
        console.log(`Current speed: ${speed} mph`);
    }
}

class CarLights {
    turnOn() {
        console.log("Car lights turned on");
    }

    turnOff() {
        console.log("Car lights turned off");
    }
}

// Define a Car class that composes the above components

class Car {
    private engine: Engine;
    private wheels: Wheels;
    private seats: Seats;
    private doors: Doors;
    private dashboard: Dashboard;
    private carLights: CarLights;

    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
        this.seats = new Seats();
        this.doors = new Doors();
        this.dashboard = new Dashboard();
        this.carLights = new CarLights();
    }

    start() {
        this.engine.start();
        this.wheels.rotate();
        this.dashboard.showSpeed(0);
        this.carLights.turnOn();
        console.log("Car is ready to go!");
    }

    stop() {
        this.carLights.turnOff();
        this.engine.stop();
        this.wheels.rotate();
        this.dashboard.showSpeed(0);
        console.log("Car has stopped.");
    }

    accelerate(speed: number) {
        this.dashboard.showSpeed(speed);
        console.log(`Car is accelerating to ${speed} mph`);
    }

    brake() {
        console.log("Car is applying the brakes");
    }
}

// Create an instance of the Car class and demonstrate composition

const myCar = new Car();
myCar.start();
myCar.accelerate(60);
myCar.brake();
myCar.stop();
