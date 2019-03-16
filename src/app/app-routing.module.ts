import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { SellersProductsComponent } from './components/prodcuts/sellers-products/sellers-products.component';
import { AddProductComponent } from './components/prodcuts/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/admin/dashboard.component';
import { ProductDetailsComponent } from './components/prodcuts/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { AffiliantComponent } from './components/affiliant/affiliant.component';
import { FaqComponent } from './components/faq/faq.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { PolicyComponent } from './components/policy/policy.component';
import { OfferComponent } from './components/prodcuts/offer/offer.component';
import { InvoiceComponent } from './components/prodcuts/invoice/invoice.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { ListProductsComponent } from './components/prodcuts/list-products/list-products.component';
import { AddVendorComponent } from './components/vendor/add-vendor/add-vendor.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { GoogleLoginComponent } from './components/login/google-login/google-login.component';
import { ManageSliderComponent } from './components/slider/manage-slider/manage-slider.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SellerDashboardComponent } from './components/dashboard/seller-dashboard/seller-dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthRoleGuardService } from './auth/auth-guard.service';



const routes: Routes = [
  { path: 'user-list', component: UserListComponent},
  //if has not logged in, requesting logout will redirect to log in page
   { path: 'logout', component: LogoutComponent,canActivate:[AuthRoleGuardService]},
   //if does not has role admin, requesting admin-dashboard will redirect to log in page
   { path: 'admin-dashboard', component: DashboardComponent,canActivate:[AuthRoleGuardService],data:{requiredRole:['admin']}},
   { path: 'seller-dashboard', component: SellerDashboardComponent,canActivate:[AuthRoleGuardService],data:{requiredRole:['vendor']}},
   { path: 'user-dashboard', component: UserDashboardComponent,canActivate:[AuthRoleGuardService],data:{requiredRole:['user']}},
  { path: 'auth-user', component: LoginComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'product-list', component: ListProductsComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'upload-product', component: AddProductComponent,canActivate:[AuthRoleGuardService],data:{requiredRole:['vendor','admin']}},
  { path: 'sellers-products', component: SellersProductsComponent},
  { path: 'checkout', component: CheckoutComponent},
   { path: 'shopping-cart', component: CartComponent},
   
  { path: 'shopping-cart/:cartId', component: CartComponent},
   { path: 'blog', component: BlogComponent},
   { path: 'blog-details/:bid', component: BlogDetailsComponent},
   { path: 'signup', component: SignupComponent },
   { path: 'seller-dashboard', component: DashboardComponent},
   { path: 'offers', component: OfferComponent},
   { path: 'invoice', component: InvoiceComponent},
   { path: 'add-vendor', component: AddVendorComponent},
   { path: 'vendor-alist', component: VendorListComponent},
     { path: 'vendor-list', component: VendorComponent},
   { path: 'partners', component: PartnersComponent},
   { path: 'page-not-found', component: PageNotFoundComponent},
   { path: 'search', component: SearchComponent},
   { path: 'become-affiliats', component: AffiliantComponent},
   { path: 'faq', component: FaqComponent},
   { path: 'track-orders', component: TrackOrderComponent},
   { path: 'privacy-policy', component: PolicyComponent},
   { path: 'about', component: AboutComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'googleLogin', component: GoogleLoginComponent},
   { path: 'manage-slider', component: ManageSliderComponent},
   { path: 'wish-list', component: WishlistComponent},
   { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
