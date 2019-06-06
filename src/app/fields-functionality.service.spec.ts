import { TestBed } from '@angular/core/testing';

import { FieldsFunctionalityService } from './fields-functionality.service';

describe('FieldsFunctionalityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldsFunctionalityService = TestBed.get(FieldsFunctionalityService);
    expect(service).toBeTruthy();
  });
});
