import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAddEmergencyComponent } from './hospital-add-emergency.component';

describe('HospitalAddEmergencyComponent', () => {
  let component: HospitalAddEmergencyComponent;
  let fixture: ComponentFixture<HospitalAddEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAddEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAddEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
