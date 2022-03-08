import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocoinListComponent } from './cryptocoin-list.component';

describe('CryptocoinListComponent', () => {
  let component: CryptocoinListComponent;
  let fixture: ComponentFixture<CryptocoinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocoinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
