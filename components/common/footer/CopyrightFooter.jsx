import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Home", routeLink: "/" },
    // { id: 2, name: "Listing", routeLink: "/listing-grid-v3" },
    // { id: 3, name: "Classifieds", routeLink: "/listing-grid-v4" },
    { id: 2, name: "About Us", routeLink: "/about-us" },
    { id: 3, name: "Contact", routeLink: "/contact" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
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
    </div>
  );
};

export default CopyrightFooter;
