import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GiaitriComponent} from './giaitri/giaitri.component';
import { KinhdoanhComponent} from './kinhdoanh/kinhdoanh.component';
import { LamdepComponent} from './lamdep/lamdep.component';
import { NavbarComponent} from './navbar/navbar.component';
import { TamsuComponent} from './tamsu/tamsu.component';
import { ThethaoComponent} from './thethao/thethao.component';
import { ThoisuComponent} from './thoisu/thoisu.component';
import { TrangchuComponent} from './trangchu/trangchu.component';
import { FooterComponent} from './footer/footer.component';
import { ProductComponent} from './product/product.component';
const routes: Routes = [
  {path: 'Trang Chu', component:TrangchuComponent},
  {path: 'Ho Tro', component:ThoisuComponent},
  {path: 'Khuyen Mai', component:GiaitriComponent},
  {path: 'In Hoa Don', component:KinhdoanhComponent},
  {path: 'Tra Cuu Bao Hanh', component:LamdepComponent},
  {path: 'DownLoad', component:TamsuComponent},
  {path: 'Dang Nhap', component:DangnhapComponent},
  {path: 'Footer', component:FooterComponent},
  {path: 'Gio Hang', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
