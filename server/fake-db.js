const Rental = require('./models/rental');
const User = require('./models/user');

class FakeDb {
    constructor() {
        this.rentals = [
            {
                title: 'Modern apartment in center',
                city: 'New York',
                street: 'Time Square',
                category: 'apartment',
                image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                bedrooms: 3,
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
                image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                bedrooms: 2,
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
                image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                bedrooms: 2,
                description: 'Very nice apartmant',
                dailyRate: 34,
                shared: true,
                createdOut: "24/12/2017"
            },
            {
                title: 'Central Apartmant 4',
                city: 'Berlin',
                street: 'Haupt Strasse',
                category: 'house',
                image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                bedrooms: 9,
                description: 'Very nice apartmant',
                dailyRate: 33,
                shared: false,
                createdOut: "24/12/2017"
            },
        ];

        this.users = [{
            username: "Test User",
            email: "test@gmail.com",
            password: "testtest"
        }];

    }

    async cleanDb() {
        await User.remove({})
        await Rental.remove({});
    }

    pushDataToDb() {
        const user = new User(this.users[0]);

        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);
            newRental.user = user;

            user.rentals.push(newRental);
            newRental.save();
        });

        user.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = FakeDb;