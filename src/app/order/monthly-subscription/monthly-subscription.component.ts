import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModelComponent} from '../../shared/components/booking-model/booking-model.component';


@Component({
  selector: 'app-monthly-subscription',
  templateUrl: './monthly-subscription.component.html',
  styleUrls: ['./monthly-subscription.component.css']
})
export class MonthlySubscriptionComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content) {
    const modelRef = this.modalService.open(BookingModelComponent, { size: 'lg' });
    modelRef.componentInstance.categoryName = content;
  }

}
