import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartTabComponent } from './heart-tab.component';

describe('HeartTabComponent', () => {
  let component: HeartTabComponent;
  let fixture: ComponentFixture<HeartTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
