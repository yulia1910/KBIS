import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoEffects } from './store/effects/todo.effects';
import { TodoReducer } from  './store/reducers/todo.reducer';
import { ResolveGuard} from './guards/resolve.guard';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({todo: TodoReducer}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 30 }),
    AppRoutingModule

  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
