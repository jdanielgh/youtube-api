import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVideoListComponent } from './result-video-list.component';

describe('ResultVideoListComponent', () => {
  let component: ResultVideoListComponent;
  let fixture: ComponentFixture<ResultVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
