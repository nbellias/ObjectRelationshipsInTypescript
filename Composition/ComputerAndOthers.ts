// Define some basic classes

class CPU {
    process(data: string): string {
        return `Processed: ${data}`;
    }
}

class Memory {
    private data: string[] = [];

    storeData(data: string): void {
        this.data.push(data);
    }

    retrieveData(): string {
        return this.data.join(", ");
    }
}

class HardDrive {
    private storage: string = "";

    writeToDisk(data: string): void {
        this.storage += data;
    }

    readFromDisk(): string {
        return this.storage;
    }
}

// Define a Computer class that composes the above components

class Computer {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    boot(): void {
        const bootData = this.hardDrive.readFromDisk();
        this.memory.storeData(bootData);
        console.log("Computer booted up");
    }

    processData(data: string): string {
        const processedData = this.cpu.process(data);
        this.memory.storeData(processedData);
        this.hardDrive.writeToDisk(processedData);
        return processedData;
    }

    displayData(): void {
        const storedData = this.memory.retrieveData();
        console.log(`Stored data: ${storedData}`);
    }
}

// Create an instance of the Computer class and demonstrate composition

const myComputer = new Computer();
myComputer.boot();

const processedResult = myComputer.processData("Input data");
console.log(processedResult);

myComputer.displayData();
