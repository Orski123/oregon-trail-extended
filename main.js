class Traveler  {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
       //  Increases the traveler's food by 2.
       return this.food = this.food + 2
       
    }   
    eat()  {
      // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
  
      if (this.food > 0){
      this.isHealthy = true;
      this.food = this.food - 1;
    }
    else {
        this.isHealthy = false
    }
  
}
}
class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers= []
    }

    getAvailableSeatCount() {
    //Returns the number of empty seats, determined by the capacity set when
    // the wagon was created, subtracted by the number of passengers currently on board.
        return this.capacity - this.passengers.length
    }   

    join(Traveler)  {
       //Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them
       if (this.capacity > this.passengers.length){
           this.passengers.push(Traveler)
       }
       else {
           return ('no more room available')
       }
    }   

    shouldQuarantine() {
    //  Returns true if there is at least one unhealthy person in the wagon. Return false if not.
   const unHealthy=
   this.passengers.some (passengers => this.passengers.isHealthy === true)
   return unHealthy
}

    totalFood() {
// Returns the total amount of food among all passengers in the wagon.

let sum =0
let totSum= this.passengers
for (let val of totSum){
    sum += val.food}
    return sum
    }
}

class Doctor extends Traveler {
 constructor (name, food, isHealthy){
     super (name,  food, isHealthy)
    }

    heal(traveler) {
    //  set the traveler's isHealthy property to true.
    traveler.isHealthy = true


    } 
}

class Hunter extends Traveler {
    constructor (name, food, isHealthy){
        super (name,  food, isHealthy)
        this.food = 2
       }
       hunt() {
        //   Increase the hunter's food by 5. (A normal traveler gains only 2.)
        this.food = this.food + 5
       if ( Traveler.food<2){
           Hunter.food = Hunter.food+2

       } 
        
     }   
     eat()  {
       // Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
       if (this.food >=2){
      // this.isHealthy = true;
       this.food = this.food - 2;
     }
     else {
         this.food=this.food-0
     }
   
 }


giveFood(traveler, numOfFoodUnits) {
    //  Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.
 
    if (numOfFoodUnits> 0) {
        traveler = Traveler.food= Hunter.food 
        return Traveler.food
 }
 
 }   
}



// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);