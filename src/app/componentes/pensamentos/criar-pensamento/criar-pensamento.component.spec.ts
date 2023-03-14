import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamnetoComponent } from './criar-pensamento.component';

describe('CriarPensamnetoComponent', () => {
  let component: CriarPensamnetoComponent;
  let fixture: ComponentFixture<CriarPensamnetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensamnetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamnetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
