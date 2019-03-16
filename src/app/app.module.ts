import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,AuthService
  // FacebookLoginProvider,
} from "angular-6-social-login-v2";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShopReviewComponent } from './components/shop-review/shop-review.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewProductAreaComponent } from './components/landing-page/new-product-area/new-product-area.component';
import { SpeakersComponent } from './components/landing-page/speakers/speakers.component';
import { BestSellersAreaComponent } from './components/landing-page/best-sellers-area/best-sellers-area.component';
import { LadiesClothsComponent } from './components/landing-page/ladies-cloths/ladies-cloths.component';
import { BestSellersComponent } from './components/landing-page/best-sellers/best-sellers.component';
import { ProductDetailsComponent } from './components/prodcuts/product-details/product-details.component';
import { AddProductComponent } from './components/prodcuts/add-product/add-product.component';
import { ListProductsComponent } from './components/prodcuts/list-products/list-products.component';
import { StoriesComponent } from './components/stories/stories.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { SellersProductsComponent } from './components/prodcuts/sellers-products/sellers-products.component';
import { DashboardComponent } from './components/dashboard/admin/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { AffiliantComponent } from './components/affiliant/affiliant.component';
import { OfferComponent } from './components/prodcuts/offer/offer.component';
import { InvoiceComponent } from './components/prodcuts/invoice/invoice.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddVendorComponent } from './components/vendor/add-vendor/add-vendor.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './components/vendor/vendor-details/vendor-details.component';
import { ScartComponent } from './components/scart/scart.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CcurrencyPipe } from './pipes/ccurrency.pipe';
import { RatingComponent } from './components/rating/rating.component';
import { AdvertisementComponent } from './components/landing-page/new-product-area/advertisement/advertisement.component';
import { SecondAdvertisementComponent } from './components/landing-page/new-product-area/second-advertisement/second-advertisement.component';
import { ProductDetailsCellComponent } from './components/landing-page/new-product-area/product-details-cell/product-details-cell.component';
import { ShowHideDirective } from './directives/show-hide.directive';
import { OfferAddComponent } from './components/landing-page/offer-add/offer-add.component';
import { BestCustomerSellerComponent } from './components/landing-page/best-customer-seller/best-customer-seller.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './components/slider/modal-basic';
import { GoogleLoginComponent } from './components/login/google-login/google-login.component';
import { ManageSliderComponent } from './components/slider/manage-slider/manage-slider.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FeaturedComponent } from './components/landing-page/featured/featured.component';
import { OffersaddComponent } from './components/landing-page/offersadd/offersadd.component';
import { OrderConfirmationComponent } from './components/checkout/order-confirmation/order-confirmation.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { CookieModule } from 'ngx-cookie';
import { LogoutComponent } from './components/logout/logout.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { SellerDashboardComponent } from './components/dashboard/seller-dashboard/seller-dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SaveSliderFormComponent } from './components/slider/save-slider-form/save-slider-form.component';
import { ShareFormComponent } from './components/landing-page/new-product-area/share-form/share-form.component';

//for intercepter
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.intercepter';
import { TopAdsComponent } from './components/landing-page/top-ads/top-ads.component';
import { RecentlyAddedComponent } from './components/landing-page/recently-added/recently-added.component';
import { BlogSaveFormComponent } from './components/blog/blog-save-form/blog-save-form.component';
import { BlogUpdateFormComponent } from './components/blog/blog-update-form/blog-update-form.component';
@NgModule({
  declarations: [
    WishlistComponent,
    OrderConfirmationComponent,
    AdvertisementComponent,
    SecondAdvertisementComponent,
    ProductDetailsCellComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SignupComponent,
    CheckoutComponent,
    DashboardComponent,
    StorefrontComponent,
    LoginComponent,
    LogoutComponent,
	  UserDashboardComponent,
    SellerDashboardComponent,
	  UserListComponent,
    LandingPageComponent,
    ShopReviewComponent,
    SliderComponent,
    NewProductAreaComponent,
    SpeakersComponent,
    BestSellersAreaComponent,
    LadiesClothsComponent,
    BestSellersComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ListProductsComponent,
    StoriesComponent,
    BlogComponent,
    BlogDetailsComponent,
    SellersProductsComponent,
    CategoryComponent,
    SearchComponent,
    FaqComponent,
    ContactComponent,
    PolicyComponent,
    TrackOrderComponent,
    AffiliantComponent,
    OfferComponent,
    InvoiceComponent,
    VendorComponent,
    PartnersComponent,
    ErrorsComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddVendorComponent,
    VendorListComponent,
    VendorDetailsComponent,
    ScartComponent,
    ChangeColorDirective,
    CcurrencyPipe,
    ShowHideDirective,
    OfferAddComponent,
    BestCustomerSellerComponent,
    NgbdModalBasic,
    GoogleLoginComponent,
    ManageSliderComponent,
    RatingComponent,
    FeaturedComponent,
    OffersaddComponent,
    SaveSliderFormComponent,
    ShareFormComponent,
    TopAdsComponent,
    RecentlyAddedComponent,
    BlogSaveFormComponent,
    BlogUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SlideshowModule,
    NgxPaginationModule,
    CookieModule.forRoot()
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },AuthService,
  //for intercepter
  {provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
        //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1071341576975-ujfbf1r6oibn6v2c58falqgh1ic0fejl.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}