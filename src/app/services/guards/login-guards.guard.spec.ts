import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuardsGuard } from './login-guards.guard';

describe('LoginGuardsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardsGuard]
    });
  });

  it('should ...', inject([LoginGuardsGuard], (guard: LoginGuardsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
