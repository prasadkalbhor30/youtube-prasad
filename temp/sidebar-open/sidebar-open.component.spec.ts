import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOpenComponent } from './sidebar-open.component';

describe('SidebarOpenComponent', () => {
  let component: SidebarOpenComponent;
  let fixture: ComponentFixture<SidebarOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarOpenComponent]
    });
    fixture = TestBed.createComponent(SidebarOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
