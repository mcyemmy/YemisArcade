import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response,
        RequestMethod, BaseRequestOptions,
        RequestOptions, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FruitService } from './fruit.service';
import { FruitItem } from './fruit.model';

describe('FruitService', () => {
  
    let fruitService: FruitService;
    let mockBackend: MockBackend;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => new Http(mockBackend, defaultOptions),
            deps: [MockBackend, BaseRequestOptions]
          },
          FruitService
        ]
      }),
      fruitService = TestBed.get(FruitService);
      mockBackend = TestBed.get(MockBackend);
    });

    // Mock response
    const expectedFruit = [{
      id: 1,
      common_name: 'Strawberry Tree',
      species: 'Arbutus unedo',
      region: 'Mediteranian',
      URL: 'https://en.wikipedia.org/wiki/Arbutus_unedo',
      ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bowl_of_Strawberry_Tree_berries.jpg/220px-Bowl_of_Strawberry_Tree_berries.jpg'
    }];
    const res = new Response(new ResponseOptions({ body: expectedFruit }));
    //console.log(res.json());
  
    it('should list the fruit', async(() => {
      
      // return the response if we have a connection to the MockBackend
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toBe('app/fruit');
        expect(connection.request.method).toBe(RequestMethod.Get);
        connection.mockRespond(res);
      });
  
      fruitService.getFruitList_Promise()
      .then((response) => {        
        expect(response.length).toEqual(1);
      });
    }));

    it('should show a fruit Item', async(() => {
      
      // return the response if we have a connection to the MockBackend
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toBe('app/fruit/1');
        expect(connection.request.method).toBe(RequestMethod.Get);
        connection.mockRespond(res);
      });
  
      fruitService.getFruitItem(1)
      .then((response) => {        
        expect(response[0].region).toBe('Mediteranian');
      });
    }));
  });
