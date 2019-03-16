export class AppConfig{
    public static BASE_ENDPOINT_NO_VER='http://localhost:4000';
    public static BASE_ENDPOINT = 'http://localhost:4000/v3';
    public static LOGIN_ENDPOINT = AppConfig.BASE_ENDPOINT_NO_VER + '/login';
    public static PRODUCT_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/products';
    public static VENDOR_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/vendors';
    public static ADVERTISEMENT_ENDPOINT = AppConfig.BASE_ENDPOINT +"/admin/advertisement";
    public static SLIDER_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/slider';
    public static GOOGLE_TOKEN_ENDPOINT = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='//'XYZ123'
    public static GOOGLELOGIN_ENDPOINT = "http://localhost:4000/" + 'googlelogin';
    //public static IMAGE_ENDPOINT = AppConfig.PROFILES_ENDPOINT + '/images';
    public static SAVELATER_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/savelater';
    public static WISHLIST_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/wishlist';
    public static PRODUCTBYIDS_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/productsbyids';
    public static REVIEW_ENDPOINT = AppConfig.PRODUCT_ENDPOINT + '/review';

    public static FEATURED_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/featured';
    public static BESTSELLER_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/bestseller';
    public static LADIES_CLOTH_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/ladiescloths';
    public static OFFERADD_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/offeradd';
    public static CHECKOUT_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/checkout';
    public static SEARCH_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/search';
    public static TOP_VENDORS_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/top-vendor';
    public static ALLREVIEWS_ENDPOINT = AppConfig.BASE_ENDPOINT + '/review';

    public static USERS_ENDPOINT = "http://localhost:4000/" + 'users';
    public static ALL_USERS_ENDPOINT = "http://localhost:4000/" + 'allUsers';
    public static BLOCK_USER_ENDPOINT = "http://localhost:4000/" + 'blockUser';
    public static UNBLOCK_USER_ENDPOINT = "http://localhost:4000/" + 'unblockUser';
    public static EDIT_USER_ENDPOINT = "http://localhost:4000/" + 'editUser';
    public static DELETE_USER_ENDPOINT = "http://localhost:4000/" + 'deleteUser';

    public static BLOG_ENDPOINT=AppConfig.BASE_ENDPOINT+"/admin/blogs";

}