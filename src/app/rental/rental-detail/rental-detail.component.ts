import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId: number;
  rental: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {

    this.route.params.subscribe
      ((params) => {
        this.currentId = params['rentalId'];
        this.getRental(params['rentalId']);
      });
  }

  getRental(rentalId: number) {
    this.rentalService.getRentalId(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }

}
