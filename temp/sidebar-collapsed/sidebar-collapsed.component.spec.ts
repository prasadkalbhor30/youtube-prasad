import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapsedComponent } from './sidebar-collapsed.component';

describe('SidebarCollapsedComponent', () => {
  let component: SidebarCollapsedComponent;
  let fixture: ComponentFixture<SidebarCollapsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCollapsedComponent]
    });
    fixture = TestBed.createComponent(SidebarCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
