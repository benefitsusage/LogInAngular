import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackTabComponent } from './jack-tab.component';

describe('JackTabComponent', () => {
  let component: JackTabComponent;
  let fixture: ComponentFixture<JackTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
