// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;

  // Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log('_______________________________________________________');
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    console.log('_______________________________________________________');
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('_______________________________________________________');
    console.log('Vehicle started');
    console.log('_______________________________________________________');
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log('_______________________________________________________');
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
      console.log('_______________________________________________________');
    } else {
      console.log('_______________________________________________________');
      console.log('Start the vehicle first');
      console.log('_______________________________________________________');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log('_______________________________________________________');
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
      console.log('_______________________________________________________');
    } else {
      console.log('_______________________________________________________');
      console.log('Start the vehicle first');
      console.log('_______________________________________________________');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('_______________________________________________________');
    console.log('Vehicle stopped');
    console.log('_______________________________________________________');
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('_______________________________________________________');
      console.log(`Vehicle turned ${direction}`);
      console.log('_______________________________________________________');
    } else {
      console.log('_______________________________________________________');
      console.log('Start the vehicle first');
      console.log('_______________________________________________________');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('_______________________________________________________');
      console.log('Vehicle reversed');
      console.log('_______________________________________________________');
    } else {
      console.log('_______________________________________________________');
      console.log('Start the vehicle first');
      console.log('_______________________________________________________');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
