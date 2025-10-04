const supermarket = {
    name: 'Silpo',
    location: 'Lviv',
    yearFounded: 2000,
    departments: ['Meet', 'Dairy', 'Bakery', 'Produce'],
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
    }
};

supermarket.displayInfo();
