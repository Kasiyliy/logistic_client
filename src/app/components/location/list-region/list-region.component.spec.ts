import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegionComponent } from './list-region.component';

describe('ListRegionComponent', () => {
  let component: ListRegionComponent;
  let fixture: ComponentFixture<ListRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
