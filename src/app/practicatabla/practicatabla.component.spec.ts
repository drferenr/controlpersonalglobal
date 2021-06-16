import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticatablaComponent } from './practicatabla.component';

describe('PracticatablaComponent', () => {
  let component: PracticatablaComponent;
  let fixture: ComponentFixture<PracticatablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticatablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticatablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
