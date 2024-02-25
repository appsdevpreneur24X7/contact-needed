import Image from "next/image";

const ClassifiedLocation = () => {
  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          <div className="gmap_canvas ">
            <iframe
              title="map"
              className="gmap_iframe"
              src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&hl=en&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
        <div className="overlay_icon">
          <a href="#">
            <Image
              width={40}
              height={45}
              className="map_img_icon"
              src="/assets/images/cn-logo.jpg"
              alt="cn-logo.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ClassifiedLocation;
