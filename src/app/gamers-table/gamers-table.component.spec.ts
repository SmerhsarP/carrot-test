import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersTableComponent } from './gamers-table.component';

describe('GamersTableComponent', () => {
  let component: GamersTableComponent;
  let fixture: ComponentFixture<GamersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
