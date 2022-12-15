import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInputComponent } from './tournament-input.component';

describe('TournamentInputComponent', () => {
  let component: TournamentInputComponent;
  let fixture: ComponentFixture<TournamentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
