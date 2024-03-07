import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <BreadCrumb2 />
            </div> */}
            {/* End .col */}

            {/* <div className="col-lg-6 position-relative mobile-filter-menu">
              <div className="dn db-991 mt30 mb0">
                <ShowFilter />
              </div>
            </div> */}
            {/* End .col filter grid list */}
          </div>
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-md-12 col-lg-12">
              {/* <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar />
                </div>
              </div> */}
              {/* End .row */}

              <div className="row">
                <FeaturedItem />
              {/* End .row */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>
                {/* End paginaion .col */}
              </div>
              {/* End .row */}
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
