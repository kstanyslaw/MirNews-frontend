import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistRequestPageComponent } from './newslist-request-page.component';

describe('NewslistRequestPageComponent', () => {
  let component: NewslistRequestPageComponent;
  let fixture: ComponentFixture<NewslistRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
