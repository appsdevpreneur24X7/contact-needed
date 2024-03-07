import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../home-7/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import TextAnimationContent from "./TextAnimationContent";
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

      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title text-center">
              <h1 style={{
                    fontSize : "3.75rem",
                    fontWeight : '700',
                    background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)`, 
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:`transparent`
                }}>Our Mission ...</h1>
                <h1 className="mt0" style={{
                    fontSize : "3.75rem",
                    background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)`, 
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:`transparent`
                }}>
                <TextAnimationContent/>
                </h1>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="main-title text-center">
              <h1 style={{
                    fontSize : "3.5rem",
                    // fontFamily : "montserrat",
                    fontWeight : '600',
                    background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)`, 
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:`transparent`
                }}>Our Mission ...</h1>
                <h1 className="mt0" style={{
                    fontSize : "2.5rem",
                    background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)`, 
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:`transparent`
                }}>
                <TextAnimationContent/>
                </h1>
              </div>
            </div> */}
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission />
          </div>
          {/* End .row */}

          <div className="row mt80">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Team --> */}
      <section className="our-team bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Team</h2>
                <p>We beleive in Team Efforts. Happy with the Core Pillars</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team />
              </div>
            </div>
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
