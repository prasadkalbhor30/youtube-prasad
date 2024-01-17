import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  collapsed: boolean = true;
  constructor(private shared: SharedService) { }
  ngOnInit(): void {
    this.shared.sidebarStatus.subscribe(result => {
      this.collapsed = result;
    })

  }



}
