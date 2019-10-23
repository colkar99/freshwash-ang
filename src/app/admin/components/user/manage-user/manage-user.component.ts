import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
viewMode: boolean;

  constructor(private routerAct: ActivatedRoute) {
    let mode = routerAct.snapshot.queryParamMap.get('view');
    debugger
    if(mode === 'true') this.viewMode = true;
    else this.viewMode = false;
    
  }

  ngOnInit() {
  }
  changeMode(){
    this.viewMode = !this.viewMode;
  }

}
