import Image from "next/image";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                  Will reach out to you to understand you more as to serve better.
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        {/* <div className="container-fluid p0 mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600" id="map-canvas">
                <div className="gmap_canvas pe-none">
                  <iframe
                    title="map"
                    className="gmap_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193309.02147838814!2d-74.53513266718751!3d40.79602810000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663993365939!5m2!1sen!2sbd"
                  ></iframe>

                  <Image
                    width={32}
                    height={50}
                    className="location-finder"
                    src="/assets/images/location.png"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
