import { TestBed } from '@angular/core/testing';

import { GetApiService } from './get-api.service';

describe('GetApiService', () => {
  let service: GetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [GetApiService]});
    service = TestBed.inject(GetApiService);
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(GetApiService);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
