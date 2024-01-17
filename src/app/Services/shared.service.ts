import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private sidebar = new BehaviorSubject<boolean>(true);
  sidebarStatus = this.sidebar.asObservable();

  changeSidebarStatus() {
    console.log("hello", this.sidebar.value)
    this.sidebar.next(!this.sidebar.value)
  }

}
