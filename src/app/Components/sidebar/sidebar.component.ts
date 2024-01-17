import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  collapsed: boolean = true;
  hello() {
    this.collapsed = !this.collapsed;
  }
  constructor(private shared: SharedService) { }
  ngOnInit(): void {
    this.shared.sidebarStatus.subscribe(result => {
      this.collapsed = result;
    })

  }

}
