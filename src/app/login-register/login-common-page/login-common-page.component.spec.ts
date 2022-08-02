import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCommonPageComponent } from './login-common-page.component';

describe('LoginCommonPageComponent', () => {
  let component: LoginCommonPageComponent;
  let fixture: ComponentFixture<LoginCommonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCommonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
