import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveitemComponent } from './saveitem.component';

describe('SaveitemComponent', () => {
  let component: SaveitemComponent;
  let fixture: ComponentFixture<SaveitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
