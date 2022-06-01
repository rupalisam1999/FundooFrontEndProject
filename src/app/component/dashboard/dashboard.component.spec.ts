import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create keyFunction', () => {
    expect(component.keyFunction).toBeTruthy();
  });
  it('should create Logout', () => {
    expect(component.logout).toBeTruthy();
  });
  it('should have ngOnDestroy', () => {
    expect(component.ngOnDestroy).toBeTruthy();
  });
  it('should create formatView', () => {
    expect(component.FormatView).toBeTruthy();
  });
  it('should create formatGridView', () => {
    expect(component.FormatGridView).toBeTruthy();
  });
  it('should create formatListView', () => {
    expect(component.FormatListView).toBeTruthy();
  });
});
