import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopupJackGreenComponent } from './model-popup-jack-green.component';

describe('ModelPopupJackGreenComponent', () => {
  let component: ModelPopupJackGreenComponent;
  let fixture: ComponentFixture<ModelPopupJackGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopupJackGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupJackGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
