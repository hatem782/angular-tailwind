import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptVerifyComponent } from './opt-verify.component';

describe('OptVerifyComponent', () => {
  let component: OptVerifyComponent;
  let fixture: ComponentFixture<OptVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptVerifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
