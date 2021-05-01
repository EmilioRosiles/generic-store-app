import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Favorites', component: FavoritesComponent },
  { path: 'User', component: UserComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
