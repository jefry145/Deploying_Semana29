import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdsComponent } from './postds.component';

describe('PostdsComponent', () => {
  let component: PostdsComponent;
  let fixture: ComponentFixture<PostdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
