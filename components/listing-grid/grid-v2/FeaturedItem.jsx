
'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/classifieds";
import Image from "next/image";

const FeaturedItem = () => {

  const fetchAllClassifieds = ()=>{
    console.log("Exec fetchAllClassifieds ")
  }

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

  const dispatch = useDispatch();

  // keyword filter
  // const keywordHandler = (item) =>
  //   item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  // const locationHandler = (item) => {
  //   return item.location.toLowerCase().includes(location.toLowerCase());
  // };

  // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());

  // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "all-status") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // featured handler
  // const featuredHandler = (item) => {
  //   if (featured !== "") {
  //     if (featured === "featured-all") {
  //       return item;
  //     }
  //     return item.featured === featured;
  //   }
  //   return true;
  // };

  // status handler
  let content = properties
    ?.slice(30, 36)
    // ?.filter(keywordHandler)
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.sort(statusTypeHandler)
    // ?.filter(featuredHandler)
    .map((item) => (
      <div className="col-md-6 col-lg-6" key={item.id}>
        <div className="properti_city home6">
          <div className="thumb">
            <Image
              width={364}
              height={370}
              className="img-whp w-100  cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item.saleTag.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">{val}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overlay">
            <div className="details">
              <Link
                href={`/listing-details-v1/${item.id}`}
                className="fp_price"
              >
                {/**item.price*/}
                
              </Link>
              <h4>
                <Link href={`/listing-details-v2/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);


  // useEffect(() => {
  //   dispatch(fetchAllClassifieds());
  // }, [dispatch]);
  return <>{content}</>;
};

export default FeaturedItem;
