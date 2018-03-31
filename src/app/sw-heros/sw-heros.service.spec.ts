/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { SwHerosService } from './sw-heros.service';

describe('Service: SwHeros', () => {
  let injector: TestBed;
  let service: SwHerosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwHerosService]
    });
    injector = getTestBed();
    service = injector.get(SwHerosService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getHeros', () => {
    it('should return observable of any[]', () => {
      const dummyHeros: any = {
        results: [{
          'name': 'Luke Skywalker'
        }]
      };
      service.getHeros().subscribe(heros => {
        expect(heros.length).toBe(1);
        expect(heros).toBe(dummyHeros.results);
      });

      const req = httpMock.expectOne(`https://swapi.co/api/people`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyHeros);
    });
  });
});

