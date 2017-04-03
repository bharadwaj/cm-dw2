import {Component} from '@angular/core';
import {DataJson}        from './json';

//import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    json:DataJson;
    selectedJson:DataJson;
    states :Array<Object>;
    data_json:Array<DataJson>;

    jkl_1:string;
    jkl_2:string;
    jkl_3:string;
    jkl_4:string;
    jkl_5:string;
    to_update_jkl_str:string;

    constructor() {
        //Initialize data_json with HTTP GET request or the JSON Service method.
        this.data_json = [
            new DataJson(true, "", "M,NO,PQ,M,ST"),
            new DataJson(false, "", "U,VW,XY,Z,AB")
        ];
        this.states = [
            {num: 0, name: "AR"},
            {num: 1, name: "WI"},
            {num: 2, name: "MI"}
        ];
    }

    update(json:any):void {
        //Send this JSON to http server.
        this.selectedJson = json;

        //Capture jkl Individually and bind the values
        // NgModel is null if no change so assign the previous value.
        var partsOfStr = json.jkl.split(',');

        if (this.jkl_1 == null) {
            this.jkl_1 = partsOfStr [0];
        }
        if (this.jkl_2 == null) {
            this.jkl_2 = partsOfStr [1];
        }
        if (this.jkl_3 == null) {
            this.jkl_3 = partsOfStr [2];
        }
        if (this.jkl_4 == null) {
            this.jkl_4 = partsOfStr [3];
        }
        if (this.jkl_5 == null) {
            this.jkl_5 = partsOfStr [4];
        }
        var updatedString = String(this.jkl_1 + "," + this.jkl_2 + "," + this.jkl_3 + "," + this.jkl_4 + "," + this.jkl_5);

        //assign this string to the json we'd like to pass to the server.
        this.to_update_jkl_str = updatedString;

        console.log("Json: ");
        console.log(this.selectedJson);
        console.log("Updated String: " + updatedString);

    }

    newDataJson():void {
        this.data_json.push(new DataJson(0, false, "", ""));
    }
}
