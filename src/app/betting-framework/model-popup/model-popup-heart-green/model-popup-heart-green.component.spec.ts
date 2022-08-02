import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupHeartGreenComponent } from './model-popup-heart-green.component';

describe('ModelPopupHeartGreenComponent', () => {
  let component: ModelPopupHeartGreenComponent;
  let fixture: ComponentFixture<ModelPopupHeartGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupHeartGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupHeartGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
