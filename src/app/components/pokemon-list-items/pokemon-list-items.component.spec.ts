import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListItemsComponent } from './pokemon-list-items.component';

describe('PokemonListItemsComponent', () => {
  let component: PokemonListItemsComponent;
  let fixture: ComponentFixture<PokemonListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
