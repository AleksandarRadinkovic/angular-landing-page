import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnagizationComponent } from './ornagization.component';

describe('OrnagizationComponent', () => {
  let component: OrnagizationComponent;
  let fixture: ComponentFixture<OrnagizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnagizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnagizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
