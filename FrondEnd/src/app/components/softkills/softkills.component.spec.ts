import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftkillsComponent } from './softkills.component';

describe('SoftkillsComponent', () => {
  let component: SoftkillsComponent;
  let fixture: ComponentFixture<SoftkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
