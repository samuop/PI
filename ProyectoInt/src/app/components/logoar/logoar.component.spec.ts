import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGOArComponent } from './logoar.component';

describe('LOGOArComponent', () => {
  let component: LOGOArComponent;
  let fixture: ComponentFixture<LOGOArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGOArComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOGOArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
