import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterisicsComponent } from './list-characterisics.component';

describe('ListCharacterisicsComponent', () => {
  let component: ListCharacterisicsComponent;
  let fixture: ComponentFixture<ListCharacterisicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCharacterisicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterisicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
