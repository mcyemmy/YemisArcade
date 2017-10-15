import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import {  DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'; // allow <bento-toolbar> or any property

import { WjGridModule } from 'wijmo/wijmo.angular2.grid'; // allow property binding for [cellType]="'Cell'"
import { TranslateModule } from 'ng2-translate'; // Resolves Error: The pipe 'translate' could not be found

import { FruitListComponent } from './fruit-list.component';
import { FruitService } from '../shared/fruit.service';
import { FruitServiceStub } from '../shared/testing/fruit-service-stub';


describe('FruitListComponent', () => {
    let component: FruitListComponent;
    let fixture: ComponentFixture<FruitListComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let fruitService: FruitService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                WjGridModule,
                RouterTestingModule,
                TranslateModule.forRoot()
            ],
            schemas: [  NO_ERRORS_SCHEMA ],
            declarations: [ FruitListComponent ]
        });
        TestBed.overrideComponent(FruitListComponent, {
            set: {
                providers: [
                { provide: FruitService, useClass: FruitServiceStub }
              ]
            }
        })
        .compileComponents().then(() => {
            fixture = TestBed.createComponent(FruitListComponent);
            component = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('h2'));
            el = de.nativeElement;
            fruitService = fixture.debugElement.injector.get(FruitService);
            fixture.detectChanges();
        });
    }));

    it('should be initialized', () => {
        expect(component).toBeDefined();
    });

    it('should show that fruitList object contains 11 fruits items in collection view', () => {
        expect(component.fruitList._src.length).toEqual(11); // "data/in-memory-data-service.ts" contains 11 fruit items if numbered correctly
    });
    // _src is a property of the Component's collection view

    it('should get region info for first fruit Item', () => {
        expect(component.fruitList._src[0].region).toBe('Mediteranian');
    });

    it('should get page title from FruitList DOM', () => {
        expect(el.textContent).toBe('Fruit.List.Title');
    });

});