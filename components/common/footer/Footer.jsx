import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Site</h4>
          <p style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}>
          The biggest part of our digital transformation is changing the way we think.
          </p>
          <p style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
             novellogiks.com
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }} >About Us</Link>
            </li>
            <li>
              <Link href="/" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }} >Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:hello@contactneeded.com" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}> hello@contactneeded.com</a>
            </li>
            <li>
              <a href="#" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }} >Opp ISB School</a>
            </li>
            <li>
              <a href="#" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}>Gachibowli, Hyderabad.</a>
            </li>
            <li>
              <a href="tel:+91.7032405627" style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}>+91.7032405627</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
      {/* fontWeight: '600', color: '#fff', fontSize: '15px' */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
