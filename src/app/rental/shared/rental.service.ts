import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()

export class RentalService {
    private rentals: Rental[] = [
        {
            id: 1,
            title: 'Central Apartmant 1',
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
            id: 2,
            title: 'Central Apartmant 2',
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
            id: 3,
            title: 'Central Apartmant 3',
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
            id: 4,
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

    public getRentalId(rentalId: number): Observable<Rental> {
        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id == rentalId;
                });

                observer.next(foundRental);
            }, 500);
        })
    }

    public getRentails(): Observable<Rental[]> {

        return new Observable<Rental[]>((observer) => {
            setTimeout(() => {
 
                observer.next(this.rentals);
            }, 1000);
            setTimeout(() => {

                observer.error('I AM ERROR');
            }, 2000);
            setTimeout(() => {
 
                observer.complete();
            }, 3000);
        });
    }
}