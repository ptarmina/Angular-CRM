import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRowsComponent } from './contact-rows.component';

describe('ContactRowsComponent', () => {
  let component: ContactRowsComponent;
  let fixture: ComponentFixture<ContactRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
