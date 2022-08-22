import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingTvComponent } from './searching-tv.component';

describe('SearchingTvComponent', () => {
  let component: SearchingTvComponent;
  let fixture: ComponentFixture<SearchingTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
