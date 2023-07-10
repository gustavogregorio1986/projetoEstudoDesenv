import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstategiaComponent } from './estategia.component';

describe('EstategiaComponent', () => {
  let component: EstategiaComponent;
  let fixture: ComponentFixture<EstategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstategiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
