const supermarket = {
    name: 'Silpo',
    location: 'Lviv',
    yearFounded: 2000,
    departments: ['Meat', 'Dairy', 'Bakery'],
    manager: {
        name: 'Ivan',
        age: 45
    },
    displayInfo: function() {
        console.log('Supermarket name is: ' + this.name);
        console.log('Location: ' + this.location);
        console.log('Year Founded: ' + this.yearFounded);
        console.log('Departments: ' + this.departments.join(', '));
        console.log('Manager: ' + this.manager.name + ', Age: ' + this.manager.age);
    },

    get totalDepartments() {
        return this.departments.length;
    },

    get managerName() {
        return this.manager.name;
    },

    get summary() {
        return `${this.name} in ${this.location} has ${this.totalDepartments} departments. Manager: ${this.manager.name}`;
    },

    set addDepartment(newDepartment) {
        this.departments.push(newDepartment);
    },

    set newManager(newManager) {
        this.manager = newManager;
    }
};

console.log('Total Departments: ', supermarket.totalDepartments);

supermarket.addDepartment = 'Seafood';
console.log('Updated Departments: ', supermarket.departments);

supermarket.newManager = { name: 'Maria', age: 70 };
console.log('New Manager Name: ', supermarket.managerName);

console.log(supermarket.summary);

supermarket.displayInfo();
