import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenTabComponent } from './queen-tab.component';

describe('QueenTabComponent', () => {
  let component: QueenTabComponent;
  let fixture: ComponentFixture<QueenTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueenTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
