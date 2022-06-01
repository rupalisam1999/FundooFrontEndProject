import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TakeNoteComponent } from './take-note.component';

describe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeNoteComponent ],
      imports:[HttpClientModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Show method', () => {
    expect(component.show).toBeTruthy();
  });
  it('close method', () => {
    expect(component.close).toBeTruthy();
  });
  it('Show method', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
