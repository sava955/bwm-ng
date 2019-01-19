const Rental = require('./models/rental');

class FakeDb {
    constructor() {
        this.rentals = [
            {
                title: 'Modern apartment in center',
                city: 'New York',
                street: 'Time Square',
                category: 'apartmant',
                img: 'http://via.placeholder.com/350x250',
                badrooms: 3,
                description: 'Very nice apartmant',
                dailyRate: 34,
                shared: false,
                createdOut: "24/12/2017"
            },
            {
                title: 'Nice view on ocean',
                city: 'San Francisco',
                street: 'Time Square',
                category: 'condo',
                img: 'http://via.placeholder.com/350x250',
                badrooms: 2,
                description: 'Very nice apartmant',
                dailyRate: 12,
                shared: true,
                createdOut: "24/12/2017"
            },
            {
                title: 'Old house in nature',
                city: 'Bratislava',
                street: 'Hlavna',
                category: 'condo',
                img: 'http://via.placeholder.com/350x250',
                badrooms: 2,
                description: 'Very nice apartmant',
                dailyRate: 334,
                shared: true,
                createdOut: "24/12/2017"
            },
            {
                title: 'Central Apartmant 4',
                city: 'Berlin',
                street: 'Haupt Strasse',
                category: 'house',
                img: 'http://via.placeholder.com/350x250',
                badrooms: 9,
                description: 'Very nice apartmant',
                dailyRate: 33,
                shared: false,
                createdOut: "24/12/2017"
            },
        ];

    }

    async cleanDb() {
        await Rental.remove();
    }

    pushRentalsToDb() {
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);

            newRental.save();
        })
    }

    seedDb() {
        this.cleanDb();
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb;