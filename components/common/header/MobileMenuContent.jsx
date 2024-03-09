'use client'

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const home = [
    
  { id: 1, name: "About Us", routerPath: "/about-us" },
];

const listing = [
  {
    id: 1,
    title: "Classifieds",
    items: [
      {
        name: "All",
        routerPath: "/listing-grid-v2",
      },
    ],
  },
];

const classified = [
  {
    id: 1,
    title: "Admin",
    items: [
      {
        name: "Dashboard",
        routerPath: "/my-dashboard",
      },
      {
        name: "My Classifieds",
        routerPath: "/my-properties",
      },
      {
        name: "My Profile",
        routerPath: "/my-profile",
      },
      {
        name: "Add Classified",
        routerPath: "/create-listing",
      },
    ],
  },

];

const pages = [
  { id: 1, name: "Membership", routerPath: "/membership" },
  { id: 2, name: "Register", routerPath: "/register" },
  { id: 3, name: "Terms & Conditions", routerPath: "/terms" },
];

const MobileMenuContent = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
<>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={40}
              height={45}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/logo/cn-logo-250.png"
              alt="cn-logo-250.png"
            />
            <span className="brand-text">Contact Needed</span>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
    {/* <Sidebar> */}
    <div style={{maxHeight:'calc(100vh - 100px)', overflowY:'auto'}}>
        <Menu>
          <SubMenu
            label="Home"
           
            className={
              home.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <div
                 
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    val.routerPath?.split('/')[1] === pathname.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Home Home */}

          <SubMenu
            label="Listing"
            className={
              listing.some((parent) => {
                return parent.items.some(
                  (page) => page.routerPath?.split('/')[1] === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {listing.map((item) => (
              <SubMenu
              label={item.title}
                className={
                  item.items.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                     onClick={()=>router.push(val.routerPath)}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Listing */}

          <SubMenu
            label="Classifieds"
            className={
              classified.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                    page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {classified.map((item) => (
              <SubMenu
              label={item.title}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                      page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                  )
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                      onClick={()=>router.push(val.routerPath)}
                      className={
                        pathname.split('/')[1] === val.routerPath?.split('/')[1]
                        // val.routerPath === pathname.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Property */}

          <SubMenu
            label="Membership"
            className={
              pages.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Pages */}

          <MenuItem>
            <div
            onClick={()=>router.push("/contact")}
             
              className={
                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Contact
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/login")}
    
              className={pathname === "/login" ? "ui-active" : 'inactive-mobile-menu'}
            >
              <span className="flaticon-user"></span> Login
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/register")}
        
              className={
                pathname === "/register" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              <span className="flaticon-edit"></span> Register
            </div>
          </MenuItem>
        </Menu>
        </div>
      {/* </Sidebar> */}

      
        <Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
          style={{width:'90%',margin:'0px auto'}}
        >
          <span className="flaticon-plus"></span> Create Listing
        </Link></>
     
   
  );
};

export default MobileMenuContent;
