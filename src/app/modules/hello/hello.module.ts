import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HelloComponent,
  ],
  imports: [BrowserModule, , NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class HelloModule {}
