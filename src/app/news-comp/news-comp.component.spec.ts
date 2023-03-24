import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompComponent } from './news-comp.component';

describe('NewsCompComponent', () => {
  let component: NewsCompComponent;
  let fixture: ComponentFixture<NewsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
