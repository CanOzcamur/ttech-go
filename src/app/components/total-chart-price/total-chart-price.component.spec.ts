import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChartPriceComponent } from './total-chart-price.component';

describe('TotalChartPriceComponent', () => {
  let component: TotalChartPriceComponent;
  let fixture: ComponentFixture<TotalChartPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalChartPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalChartPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
