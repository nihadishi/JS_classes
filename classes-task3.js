class CarServices{
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    constructor(name, working_hours) {
        this.name = name;
        this.working_hours = working_hours || CarService.DefaultWorkingHours;
    };
    repairCar(carName) {
        if (!carName) {
            console.error("You need to specify the name of the car in order to repair it");
        }
        let currentTime = new Date().getUTCHours();
        let workingHourStart = this.working_hours.from.split(":")[0];
        let workingHourEnd = this.working_hours.till.split(":")[0];
        if (currentTime <= workingHourEnd && currentTime >= workingHourStart) {
            console.log(`We'll repair your car ${carName} Please wait`);
        }
        else {
            console.log("We are closed now. Come back tomorrow");
        }
    }
}
const carService = new CarServices('RepairCarNow', { from: '8:00', till: '2:00' });
carService.repairCar('BMW');
