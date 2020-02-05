import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksDataGridComponent } from './clocks-data-grid.component';

describe('ClocksDataGridComponent', () => {
  let component: ClocksDataGridComponent;
  let fixture: ComponentFixture<ClocksDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
