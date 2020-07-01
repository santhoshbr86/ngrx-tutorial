import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TutorialEffects } from './store/effects/tutorial.effects';
import { reducer } from './store/reducers/tutorial.reducer';

import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ObjectArrayPipe } from './pipes/object-array.pipe';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ObjectArrayPipe,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial:reducer
    }),
    EffectsModule.forRoot([TutorialEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
