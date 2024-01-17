import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-open',
  templateUrl: './sidebar-open.component.html',
  styleUrls: ['./sidebar-open.component.scss']
})
export class SidebarOpenComponent {
  hide: boolean = true;
  changeDisplay() {
    this.hide = !this.hide;
  }
}
