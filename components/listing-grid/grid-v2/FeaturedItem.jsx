
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/classifieds";
import Image from "next/image";

const FeaturedItem = () => {
  const [usersList, setUsersList] = useState(() => []);
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector(
    (state) => state.filter
  );

  let usersContent = null;
  let listingGridView2 = null;
  if (usersList && usersList.length > 0) {
    console.log(" Users List :", usersList)
    const [users] = usersList
    console.log("users : ", users)
    usersContent = users.map((item) => (
      <div className="col-md-6 col-lg-6" key={item._id}>
        <div className="details">
          <h4>
            {item.userName}
          </h4>
          <h4>
            {item.role}
          </h4>
        </div>
      </div>
    ))
  
  {/* <!-- Listing Grid View --> */ }
  listingGridView2 = users.map((item) => (
    <section className="our-listing bgc-f7 pb30-991 md-mt0 " style={{paddingBottom : '0.5rem', paddingTop : '0.5rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
                <div
                  className={"col-12 feature-list"}
                  key={item.id}
                >
                  <div
                    className={"feat_property home7 style4 d-flex align-items-center"}
                  >
                    <div className="thumb">
                      <Image
                        width={342}
                        height={220}
                        className="img-whp w-100 h-100 cover"
                        src={"/assets/images/property/fp1.jpg"}
                        alt="fp1.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">Featured</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">{item.userName}</p>
                        <h4>
                          <Link href={`/listing-details-v1/${item._id}`}>
                            {item.email}
                          </Link>
                        </h4>
                        <p>
                          {item.contactNo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  ))
  }
  useEffect(() => {
  async function fetchUsers() {
    const res = await fetch('/api/users')
    const data = await res.json()
    const tempUsers = data['users']
    console.log("data : ", tempUsers);
    setUsersList((prev) => [...prev, tempUsers])
    console.log("Exec useEffect , usersList ", usersList)
  }
  fetchUsers()
}, []);

return <>{ listingGridView2}</>
};

export default FeaturedItem;
