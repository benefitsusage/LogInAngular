import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingTabComponent } from './king-tab.component';

describe('KingTabComponent', () => {
  let component: KingTabComponent;
  let fixture: ComponentFixture<KingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
