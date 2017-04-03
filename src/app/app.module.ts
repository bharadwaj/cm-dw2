import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent}  from './app.component';
import {SplitStringIndexPipe} from './split-string.pipe';


@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [AppComponent,
        SplitStringIndexPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
