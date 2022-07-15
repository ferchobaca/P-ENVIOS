import { TestBed } from '@angular/core/testing';

import { GetDataServService } from './get-data-serv.service';

describe('GetDataServService', () => {
  let service: GetDataServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
