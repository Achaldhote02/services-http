import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpdetailsComponent } from './s-empdetails.component';

describe('SEmpdetailsComponent', () => {
  let component: SEmpdetailsComponent;
  let fixture: ComponentFixture<SEmpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
