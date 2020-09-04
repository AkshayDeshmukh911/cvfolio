import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WExperianceComponent } from './w-experiance.component';

describe('WExperianceComponent', () => {
  let component: WExperianceComponent;
  let fixture: ComponentFixture<WExperianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WExperianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
