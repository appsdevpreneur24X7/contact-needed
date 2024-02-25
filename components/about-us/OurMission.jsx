import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "74 Billion",
      meta: "In Classifieds/ Advertisement Savings",
    },
   
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
            <h2>Unlocking the Hidden Gems: Finding Incredible Classifieds Online</h2>
          </p>
          <p>
          The lure of online classifieds lies not just in the convenience they offer but in the potential for incredible finds. 
          These platforms serve as modern-day treasure hunts where the ordinary can sometimes turn out to be extraordinary. 
          Here, we delve into some of the most remarkable stories that have emerged from the realm of online advertisements, 
          showcasing the unexpected surprises that await those who browse these digital marketplaces.
          </p>
          <p>
          While the stories shared inspire dreams of incredible finds, success in navigating online classifieds often requires a blend of diligence, 
          research, and sometimes, sheer luck. Here are some strategies to optimize your online treasure hunt:

          Frequent Visits: Regularly browse listings to catch new postings before they're snapped up by others.

          Keyword Magic: Use specific and varied keywords related to what you're searching for. This approach can unveil hidden gems that others might overlook.

          Patience Pays: Great finds don't come overnight. Patience and persistence in your search can eventually lead to rewarding discoveries.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
