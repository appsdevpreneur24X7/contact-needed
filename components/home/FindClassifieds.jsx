import Link from "next/link";
import findClassifieds from "../../data/findClassifieds";
import Image from "next/image";

const FindClassifieds = () => {
  return (
    <>
      {findClassifieds.slice(0, 4).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link href="/listing-grid-v1" className="properti_city d-block">
            <div className="thumb">
              <Image
                width={752}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindClassifieds;
