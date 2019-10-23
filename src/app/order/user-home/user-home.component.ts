import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModelComponent } from '../../shared/components/booking-model/booking-model.component';


@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  plans: any[];
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.initPlans();
  }
  open(content) {
    const modelRef = this.modalService.open(BookingModelComponent, { size: 'lg' });
    modelRef.componentInstance.categoryName = content;
  }
  initPlans() {
    this.plans = [{
      title: "One Time Wash",
      description: "Hi Trichy , we are here to take care of all cars from city peoples, we are doing doorstep car wash with little amount of water using latest waterjet technic. For the first time user we do additional complementry as basic interial wash using high pressure vaccum. We use Foam/liquid to remove all dust particles from the car. We only user micro-fiber cloths to avoid scratches on your beautifull car. Finally we do wax polish(Totally customer option). Dont search for water wash just login and register your convinient time . We will take care of all other stuffs. Pay after the completion of work. We also run referal program for monthy and yearly subscribers. Please click here for details.",
      routerLink: "/one-time-wash",
      buttonName: "Book your Slot",
      buttonContent: "One Time Wash",
      originalPrice: 600,
      offerPrice: 500,
      imageUrl: this.images[0]
    },
    {
      title: "Monthly Subscription",
      description: "Monthy subscription are the great plan for the car holders. For monthly subscriber we are doing 4 washes at the cost of 3 washes. This package also include 1 interial wash for a month. And also we have great referal plan . By refering 2 cars and pay ₹.1000/- for a monthy. By using referal plan you only pay for 2 wash and get 2 wash absolutely free. Hurry up this is limited period offer. We only user micro-fiber cloths to avoid scratches on your beautifull car. Finally we do wax polish(Totally customer option). Dont search for water wash just login and register your convinient time . We will take care of all other stuffs. Pay after the completion of work. Refer 2 cars and get 2 wash totally free at the cost of ₹.1000/per month..!",
      routerLink: "/monthly-subscription",
      buttonName: "Book your Slot",
      buttonContent: "Monthly Subscription",
      originalPrice: 2000,
      offerPrice: 1450,
      imageUrl: this.images[1]
    },
    {
      title: "Yearly Subscription",
      description: "Yearly subscription are the great plan for the car holders. By doing yearly subscription you can save upto 25% on your annual bill. For monthly subscriber we are doing 4 washes at the cost of 3 washes. This package also include 1 interial wash for a month. And also we have great referal plan . By refering 2 cars and pay ₹.15000/- for a year. By using referal plan you can get upto 30% discount on your annual plan. Hurry up this is limited period offer. We only user micro-fiber cloths to avoid scratches on your beautifull car. Finally we do wax polish(Totally customer option). Dont search for water wash just login and register your convinient time . We will take care of all other stuffs. Pay after the completion of work.Refer 2 cars and get upto 30% offer on your annual bill..! Hurry up limited period offer.",
      routerLink: "/yearly-subscription",
      buttonName: "Book your Slot",
      buttonContent: "Yearly Subscription",
      originalPrice: 18000,
      offerPrice: 16000,
      imageUrl: this.images[2]
    }]
  }
}
