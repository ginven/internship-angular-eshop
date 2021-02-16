import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EditItemFormComponent } from './edit-item-form.component';
import { StoreModule } from '@ngrx/store';

describe('EditItemFormComponent', () => {
  let component: EditItemFormComponent;
  let fixture: ComponentFixture<EditItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, StoreModule.forRoot({})],
      declarations: [ EditItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
