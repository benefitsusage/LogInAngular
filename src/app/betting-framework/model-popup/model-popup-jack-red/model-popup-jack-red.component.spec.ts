import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupJackRedComponent } from './model-popup-jack-red.component';

describe('ModelPopupJackRedComponent', () => {
  let component: ModelPopupJackRedComponent;
  let fixture: ComponentFixture<ModelPopupJackRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupJackRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupJackRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
