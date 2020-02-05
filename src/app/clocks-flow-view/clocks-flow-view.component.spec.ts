import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksFlowViewComponent } from './clocks-flow-view.component';

describe('ClocksFlowViewComponent', () => {
  let component: ClocksFlowViewComponent;
  let fixture: ComponentFixture<ClocksFlowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksFlowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksFlowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
