import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { LogOutComponent } from './log-out.component';

describe('LogOutComponent', () => {
  let component: LogOutComponent;
  let fixture: ComponentFixture<LogOutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutComponent ],
      imports: [.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
