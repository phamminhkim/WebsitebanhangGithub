import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { FooterComponent } from './footer/footer.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { TamsuComponent } from './tamsu/tamsu.component';
import { ThethaoComponent } from './thethao/thethao.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrangchuComponent,
    ThoisuComponent,
    DangnhapComponent,
    GiaitriComponent,
    KinhdoanhComponent,
    LamdepComponent,
    TamsuComponent,
    FooterComponent,
    ThethaoComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    OwlModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
