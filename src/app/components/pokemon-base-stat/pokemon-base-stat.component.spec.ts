import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBaseStatComponent } from './pokemon-base-stat.component';

describe('PokemonBaseStatComponent', () => {
  let component: PokemonBaseStatComponent;
  let fixture: ComponentFixture<PokemonBaseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonBaseStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBaseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
