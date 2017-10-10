// Specify which features of Angular we will require.
import { Injectable }               from '@angular/core';
import { Headers, Http, Response }  from '@angular/http';

// Specify any other vendor components we will require.
import { Observable }               from 'rxjs';
import 'rxjs/add/operator/toPromise';

// Specify which features of our application we will require.
import { FruitItem }        from '../shared/fruit.model';

// Ensure that all providers are decorated with @Injectable, and registered in their parent ngModel's and any consuming component's providers collection.
@Injectable()
// This angular service serves as the application's primary data service. It exposes both list and detail get methods.
// The service accesses data via http using a standard url, but does not use a faux json data file, as per other versions of this reference application.
// Instead, this service accesses data stored in an in-memory database. See the ./data/in-memory-data.service.ts file for details.
export class FruitService {
    private fruitListUrl: string = 'app/fruit';

    // Create an instance of the Http service.
    constructor( private http: Http) {}

    // The get detail method consumes an ID value and returns a promise containing the specified data object.
    public getFruitItem(fruitItemId: number): Promise<FruitItem> {
        // The in-memory dataservice allows for simple queries to be performed via url manipulation.
        // In this case specifying /[value] performs a search on the id property of all items and matches the supplied value.
        const url: string = this.fruitListUrl + '/' + fruitItemId;

        // Execute the query by the standard http.get method. By default, Angular2 returns an Observable, not a Promise.
        // In this example, the Observable is immediately cast to a Promise and the Http response is converted to the expected type
        // via's it's .json() method in the promise's then method.
        // Any errors are passed to the service's internal handleError method.
        return this.http.get(url)
            .toPromise() // Convert the returned observable to a Promise.
            .then((response) => response.json() as FruitItem)
            .catch(this.handleError);
    }

    // The get list method returns a promise containing an array of all items in the collection.
    public getFruitList_Promise(): Promise<FruitItem[]> {

        // Execute a get all contents of the in-memory database by simply specifying the handle. No additional parameters result in the entire dataset being returned as an array.
        // In this example, the Observable is immediately cast to a Promise and the Http response is converted to an array of the expected type
        // via's it's .json() method in the promise's then method.
        // Any errors are passed to the service's internal handleError method.
        return this.http.get(this.fruitListUrl)
            .toPromise() // Convert the returned observable to a Promise.
            .then((response) => response.json())
            .catch(this.handleError);
    }

    // Observable version of the list method. *** This method is currently not used. ***
    public getFruitList_Observable(): Observable<FruitItem[]> {
        return this.http
            .get(this.fruitListUrl)
            .map((r: Response) => r.json().data as FruitItem[]);
    }

    // Consume any errors produced by the Http.get call and output them to the log.
    private handleError( error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
