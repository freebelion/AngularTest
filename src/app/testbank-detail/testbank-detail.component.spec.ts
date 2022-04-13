import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbankDetailComponent } from './testbank-detail.component';

describe('TestbankDetailComponent', () => {
  let component: TestbankDetailComponent;
  let fixture: ComponentFixture<TestbankDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbankDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
