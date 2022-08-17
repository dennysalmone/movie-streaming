import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTvComponent } from './detailed-tv.component';

describe('DetailedTvComponent', () => {
  let component: DetailedTvComponent;
  let fixture: ComponentFixture<DetailedTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
