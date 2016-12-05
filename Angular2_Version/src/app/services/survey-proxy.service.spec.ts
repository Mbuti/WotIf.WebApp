/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurveyProxyService } from './survey-proxy.service';

describe('SurveyProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyProxyService]
    });
  });

  it('should ...', inject([SurveyProxyService], (service: SurveyProxyService) => {
    expect(service).toBeTruthy();
  }));
});
