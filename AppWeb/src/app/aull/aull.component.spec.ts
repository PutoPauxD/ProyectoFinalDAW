import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AullComponent } from './aull.component';

describe('AullComponent', () => {
  let component: AullComponent;
  let fixture: ComponentFixture<AullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
