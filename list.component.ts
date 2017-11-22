// Specify which features of Angular we will require.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Specify which features of Wijmo5 library we will require.
import * as wijmo from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

// Specify which features of our application we will require.
import { FruitItem } from '../shared/fruit.model';
import { FruitService } from '../shared/fruit.service';

import { TranslateService } from 'ng2-translate';

// The list component retrieves it's data via a custom service call made during initialization.
// The list of data items retrieved is then converted to a wijmo CollectionView,
// which is required to bind aynchronous objects to the WijMo5 Flexgrid.
// The Flexgrid's row selection changed event is bound to the loadDetail event handler, which
// navigates the user to the detail route, passing the id of the selected grid item as a route parameter.

@Component({
    selector: 'fruit-list',
    templateUrl: './fruit-list.component.html',
    providers: [FruitService]
})
// Implementing the OnInit interface allows the class to publish the ngOnInit function, which is executed during component initialization.
export class FruitListComponent implements OnInit {
    // Declare the variables used by the binding engine.
    // Note that, though we referenced the WjGridModule module in the wijmo.angular2.grid file, we actually reference the contents of that
    // module via the 'wijmo' namespace (not 'WjGridModule').
    public fruitList: wijmo.CollectionView;
    public loading: boolean;
    public toolbarConfigurationData: any[];
    public gridcols: wjcGrid.Column[];

    // Create instances off the data service and router service.
    constructor(private fruitService: FruitService, private router: Router, private translate: TranslateService) {
        const _router = this.router;

        // Instanciate and populate the dynamic columns array.
        // this.gridcols = new Array<wjcGrid.Column>();
        // this.gridcols.push(new wjcGrid.Column(({ header: 'Name', binding: 'common_name', width: 400 })));
        // this.gridcols.push(new wjcGrid.Column(({ header: 'Species', binding: 'species', width: 100 })));
        // this.gridcols.push(new wjcGrid.Column(({ header: 'Region', binding: 'region', width: 100 })));
        // this.gridcols.push(new wjcGrid.Column(({ header: 'Image', binding: 'ImageURL', width: 100 })));

        // Configure the Bento Toolbar with sample data.
        this.toolbarConfigurationData = [
            {
                label: 'Add',
                icon: 'bento-icon-add',
                action: () => {
                    console.log('add');
                }
            }, {
                label: 'Import',
                icon: 'bento-icon-enter',
                action: () => {
                    console.log('import');
                }
            }, {
                label: 'Export',
                icon: 'bento-icon-exit',
                action: () => {
                    console.log('export');
                }
            }, {
                label: 'Delete',
                icon: 'bento-icon-close-circle',
                action: () => {
                    console.log('delete');
                }
            },
            {
                // Vendor Button
                label: 'Vendors',
                icon: '',
                action: () => {_router.navigate(['fruit-vendor']);}
            }];

        translate.get('Common.Add').subscribe((res) => this.toolbarConfigurationData[0].label = res);
        translate.get('Common.Import').subscribe((res) => this.toolbarConfigurationData[1].label = res);
        translate.get('Common.Export').subscribe((res) => this.toolbarConfigurationData[2].label = res);
        translate.get('Common.Delete').subscribe((res) => this.toolbarConfigurationData[3].label = res);
        translate.get('Fruit.List.Vendors').subscribe((res) => this.toolbarConfigurationData[4].label = res);
    }

    // During component initialization, execute the data service call to retrieve the grid data.
    public ngOnInit(): void {
        this.getFruitList();
    }

    // Consume the grid's row selection event arguments and navigate to the detail route.
    public loadDetail(e: wjcGrid.CellRangeEventArgs): void {
        // Extract the ID of the data item represented by the selected row.
        const fruitItemID: number = (this.fruitList.currentItem as FruitItem).id as number;

        // Navigate to the detail route, passing the data item ID as a route parameter via the syntax: ['route name', 'parameter1 value'].
        // Note that the detail route declaration maps the incoming value via the 'fruit-detail/:id' route definition.
        // This will result in any value being passed into the parameter1 value will be accessable in the recieving Component or Route Resolver via ActivatedRoute.params['id'].
        this.router.navigate(['fruit-detail', fruitItemID]);
    }

    // Execute a data service call. Persist the resulting data in class level variable to allow the binding engine to access it.
    private getFruitList(): void {
        // Enable the loading flag.
        this.loading = true;

        // Execute the get list call on the data service.
        this.fruitService.getFruitList_Promise().then((fruitItems) => {

            // Convert the resulting array into a wijmo CollectionView.
            this.fruitList = new wijmo.CollectionView(fruitItems);

            // Disable the loading flag.
            this.loading = false;
        });
    }
}
