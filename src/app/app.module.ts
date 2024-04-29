import { NgModule, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgxSliderModule } from "@angular-slider/ngx-slider";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxSliderModule],
    providers: [],
    bootstrap: [AppComponent],
})


export class AppModule {}