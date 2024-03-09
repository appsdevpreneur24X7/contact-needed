import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import SimpleFilter from "../common/SimpleFilter";
import WhyChoose from "./WhyChoose";
import FeaturedClassifieds from "./FeaturedClassifieds";
// import FindClassifieds from "./FeaturedClassifieds";
import HotProperties from "./HotClassifieds";
import Testimonial from "./Testimonial";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Featured Classifieds</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FeaturedClassifieds />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Classifieds in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <FindClassifieds />
          </div> */}
        </div>
      </section>

      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax">
        <div className="container">
          <div className="row mt40">
            <div className="col-md-6 col-lg-4">
              <div className="our_hotoffer">
                <h2>Hot This Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn ht_offer">View All</button>
              </div>
            </div>
            {/* End .col */}
            <HotProperties />
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Testimonials</h2>
                <p>Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners home7 pt50 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="start_partner tac-smd">
                <h2>Become a Classified User</h2>
                <p>We work with the best people around</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4">
              <div className="parner_reg_btn home7 text-right tac-smd">
                <a className="btn" href="#">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
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
