import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  @Output() signedIn: boolean = false;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSignIn(e: any){
    e.preventDefault();
    if (this.email === "rodneym@afrosoft.co.zw" && this.password === "password"){
      this.signedIn =true;
      this.signedIn ? console.log('passed') : "";
      this.router.navigate(["/students"]);
    }else{
      console.log("wrong password");
      alert("wrong password or username, try again ")
    }
  }

}
