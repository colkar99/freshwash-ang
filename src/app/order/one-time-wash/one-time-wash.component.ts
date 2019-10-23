import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModelComponent} from '../../shared/components/booking-model/booking-model.component';

@Component({
  selector: 'app-one-time-wash',
  templateUrl: './one-time-wash.component.html',
  styleUrls: ['./one-time-wash.component.css']
})
export class OneTimeWashComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content) {
    debugger
    const modelRef = this.modalService.open(BookingModelComponent, { size: 'xl' });
    modelRef.componentInstance.categoryName = content;
  }

}
