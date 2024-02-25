const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "99",
      title: "Standard Plan",
      features: [
        "90 Days Availability",
        "1 Featured Ads",
        "Limited Support",
      ],
    },
    {
      id: 2,
      price: "199",
      title: "Extended Plan",
      features: [
        "180 Days Availability",
        "3 Featured Ads",
        "Limited Support",
      ],
    },
    {
      id: 3,
      price: "399",
      title: "Premium Plan",
      features: [
        "360 Days Availability",
        "5 Featured Ads",
        "Limited Support",
      ],
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="pricing_table">
            <div className="pricing_header">
              <div className="price">{item.price} Rs</div>
              <h4>{item.title}</h4>
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                {item.features.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="pricing_footer">
              <a className="btn pricing_btn btn-block" href="#">
                Select Package
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
