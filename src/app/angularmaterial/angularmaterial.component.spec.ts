import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmaterialComponent } from './angularmaterial.component';

describe('AngularmaterialComponent', () => {
  let component: AngularmaterialComponent;
  let fixture: ComponentFixture<AngularmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
