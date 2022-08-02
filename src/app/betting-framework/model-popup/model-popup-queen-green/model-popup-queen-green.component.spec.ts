import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupQueenGreenComponent } from './model-popup-queen-green.component';

describe('ModelPopupQueenGreenComponent', () => {
  let component: ModelPopupQueenGreenComponent;
  let fixture: ComponentFixture<ModelPopupQueenGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupQueenGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupQueenGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
