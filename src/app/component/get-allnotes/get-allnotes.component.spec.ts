import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetALLNotesComponent } from './get-allnotes.component';

describe('GetALLNotesComponent', () => {
  let component: GetALLNotesComponent;
  let fixture: ComponentFixture<GetALLNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetALLNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetALLNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
