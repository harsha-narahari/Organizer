import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFolderComponent } from './gallery-folder.component';

describe('GalleryFolderComponent', () => {
  let component: GalleryFolderComponent;
  let fixture: ComponentFixture<GalleryFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
