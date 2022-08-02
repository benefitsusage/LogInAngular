import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupHeartRedComponent } from './model-popup-heart-red.component';

describe('ModelPopupHeartRedComponent', () => {
  let component: ModelPopupHeartRedComponent;
  let fixture: ComponentFixture<ModelPopupHeartRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupHeartRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupHeartRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
