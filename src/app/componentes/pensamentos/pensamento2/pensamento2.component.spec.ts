import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamento2Component } from './pensamento2.component';

describe('Pensamento2Component', () => {
  let component: Pensamento2Component;
  let fixture: ComponentFixture<Pensamento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamento2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
