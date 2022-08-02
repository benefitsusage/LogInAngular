import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupKingGreenComponent } from './model-popup-king-green.component';

describe('ModelPopupKingGreenComponent', () => {
  let component: ModelPopupKingGreenComponent;
  let fixture: ComponentFixture<ModelPopupKingGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupKingGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupKingGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
