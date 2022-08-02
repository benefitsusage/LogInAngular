import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupQueenRedComponent } from './model-popup-queen-red.component';

describe('ModelPopupQueenRedComponent', () => {
  let component: ModelPopupQueenRedComponent;
  let fixture: ComponentFixture<ModelPopupQueenRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupQueenRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupQueenRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
