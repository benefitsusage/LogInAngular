import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupKingRedComponent } from './model-popup-king-red.component';

describe('ModelPopupKingRedComponent', () => {
  let component: ModelPopupKingRedComponent;
  let fixture: ComponentFixture<ModelPopupKingRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupKingRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupKingRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
