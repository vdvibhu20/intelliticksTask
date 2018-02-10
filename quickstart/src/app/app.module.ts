import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
// import { Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { indexComponent}  from './components/index.component';
import {UserService} from "./config/config.service";
import {KeysPipe} from "./pipes/pipe.keys";

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule],
  declarations: [ AppComponent , indexComponent, KeysPipe],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
