import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMAILComponent } from './email.component';

describe('EMAILComponent', () => {
  let component: EMAILComponent;
  let fixture: ComponentFixture<EMAILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMAILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMAILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
