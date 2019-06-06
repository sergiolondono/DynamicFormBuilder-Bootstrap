import { TestBed } from '@angular/core/testing';

import { DocumentFieldsService } from './document-fields.service';

describe('DocumentFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentFieldsService = TestBed.get(DocumentFieldsService);
    expect(service).toBeTruthy();
  });
});
