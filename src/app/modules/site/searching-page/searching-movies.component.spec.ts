import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingMoviesComponent } from './searching-movies.component';

describe('SearchingMoviesComponent', () => {
  let component: SearchingMoviesComponent;
  let fixture: ComponentFixture<SearchingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
