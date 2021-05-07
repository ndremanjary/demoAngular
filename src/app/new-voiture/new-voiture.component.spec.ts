import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVoitureComponent } from './new-voiture.component';

describe('NewVoitureComponent', () => {
  let component: NewVoitureComponent;
  let fixture: ComponentFixture<NewVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
