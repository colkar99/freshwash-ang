import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  loggedIn: boolean;                  // {1}
  constructor(private authService: AuthService,private router: Router) {
   }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res =>{
      console.log(res);
      this.loggedIn = res;
    })
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/']);

  }

}
