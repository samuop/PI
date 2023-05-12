import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoar',
  templateUrl: './logoar.component.html',
  styleUrls: ['./logoar.component.css']
})
export class LOGOArComponent {
    constructor(private router:Router){}
    login(){
      this.router.navigate(['/login'])
    }
}
