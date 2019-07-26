import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongToPianoComponent } from './song-to-piano.component';

describe('SongToPianoComponent', () => {
  let component: SongToPianoComponent;
  let fixture: ComponentFixture<SongToPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongToPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongToPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
