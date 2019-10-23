import { Component, OnInit, Input } from '@angular/core';
import{NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';

@Component({
  selector: 'booking-model',
  templateUrl: './booking-model.component.html',
  styleUrls: ['./booking-model.component.css']
})
export class BookingModelComponent implements OnInit {
  @Input('categoryName') categoryName;
  order = {};

  constructor(public activeModal: NgbActiveModal, private router: Router) {
    console.log(this.categoryName)
   }

  ngOnInit() {
  }
  submitForm(f){
    debugger
    this.activeModal.close();
    this.router.navigate(["my-orders"]);
  }

}
