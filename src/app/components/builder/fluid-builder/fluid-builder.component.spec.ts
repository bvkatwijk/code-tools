import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidBuilderComponent } from './fluid-builder.component';

describe('FluidBuilderComponent', () => {
  let component: FluidBuilderComponent;
  let fixture: ComponentFixture<FluidBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FluidBuilderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
