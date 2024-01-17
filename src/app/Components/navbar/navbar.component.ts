import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(public sharedService:SharedService){}
}
