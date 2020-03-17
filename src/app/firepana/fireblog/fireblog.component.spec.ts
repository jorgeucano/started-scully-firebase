import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireblogComponent } from './fireblog.component';

describe('FireblogComponent', () => {
  let component: FireblogComponent;
  let fixture: ComponentFixture<FireblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
