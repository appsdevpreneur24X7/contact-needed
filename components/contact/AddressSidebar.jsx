import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
      <p>
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          #224, ISB Road, Gachibowli, Hyderabad, <br />
          Telangana
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>7032405627</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>hello@Contact Needed.com</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>Contact Needed.com</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
