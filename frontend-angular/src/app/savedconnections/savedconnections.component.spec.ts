import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedconnectionsComponent } from './savedconnections.component';

describe('SavedconnectionsComponent', () => {
  let component: SavedconnectionsComponent;
  let fixture: ComponentFixture<SavedconnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedconnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedconnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
