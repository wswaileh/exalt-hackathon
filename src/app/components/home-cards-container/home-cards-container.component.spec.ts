import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardsContainerComponent } from './home-cards-container.component';

describe('HomeCardsContainerComponent', () => {
  let component: HomeCardsContainerComponent;
  let fixture: ComponentFixture<HomeCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
