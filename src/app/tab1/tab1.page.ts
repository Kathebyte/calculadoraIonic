import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab1Page implements OnInit {
 
  user: String = "";
  password: String = "";
  

  
  obj = {
   user : "kathe",
   password : "kathe123",
   
  }

  constructor(private router: Router) {}

  ngOnInit(){}

  start() {
    
    console.log("user " + this.user)
    console.log("password " + this.password)
    const {user,password} = this.obj;

    if(this.user === user && this.password === password){
      this.router.navigate(['/tab2']);
    } else{
      alert ("Error Login")
    }
    console.log("obj user " + this.obj.user)
    console.log("obj password " + this.obj.password)
  }
}
