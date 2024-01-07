// components/Header.tsx
import { CiLocationOn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import { useNavigate } from "react-router-dom";

// interface HeaderProps {
//   // Add any additional props as needed
// }
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-red-600 transition-colors"
        >
          Mattresses
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-red-600 transition-colors"
        >
          Bases
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-red-600 transition-colors"
        >
          Bedding
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full rounded-none px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="h-15 flex items-center justify-center lg:justify-between order-2 lg:order-1">
          <a
            className="order-2 mx-10 lg:w-[90px] lg:ml-0 lg:order-1 text-xl font-bold"
            href="/"
          >
            Pros Mart
          </a>
        </div>
        <nav className="order-3 flex relative z-20" role="navigation">
          <ul className="flex list-none">
            <li
              className="px-6 md:block group relative lg:block hidden"
              aria-hidden="false"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Mattresses"
              tabIndex={0}
            >
              <div className="flex hover:text-red-600">
                <CiLocationOn className="" size="25px" />
                <a className="" href="#">
                  Stores
                </a>
              </div>
            </li>
            <li
              className="block px-6  group relative"
              aria-hidden="false"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Bases"
              tabIndex={0}
            >
              <a href="#">
                <RiAccountCircleLine
                  className="hover:text-red-600"
                  size="25px"
                />
              </a>
            </li>
            <li
              className="block px-6   group relative"
              aria-hidden="false"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Bedding"
              tabIndex={0}
            >
              <a href="#">
                <IoCartOutline className="hover:text-red-600" size="25px" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block lg:order-2">
          <NavList />
        </div>
        <div className="order-1">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden order-1"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
// const Header: React.FC<HeaderProps> = () => {
//   // const navigate = useNavigate();
//   return (
//     <header className="w-screen font-medium px-4 lg:px-20 bg-white flex justify-between items-center">
//       {/* Logo on the left */}
//       <div className="h-15 flex items-center justify-center lg:justify-between">
//         <a
//           className="order-2 mx-10 lg:w-[90px] lg:ml-0 lg:order-1 text-xl font-bold"
//           href="/"
//         >
//           Pros Mart
//         </a>

//         {/* buttons in the middle */}
//         <nav
//           className="order-none lg:order-2 relative z-20 hidden lg:block"
//           role="navigation"
//         >
//           <ul className="flex list-none">
//             <li
//               className="block px-6 pt-5 pb-3 group relative"
//               aria-hidden="false"
//               aria-haspopup="true"
//               aria-expanded="false"
//               aria-label="Mattresses"
//               tabIndex={0}
//             >
//               mattresses
//             </li>
//             <li
//               className="block px-6 pt-5 pb-3 group relative"
//               aria-hidden="false"
//               aria-haspopup="true"
//               aria-expanded="false"
//               aria-label="Bases"
//               tabIndex={0}
//             >
//               Bases
//             </li>
//             <li
//               className="block px-6 pt-5 pb-3 group relative"
//               aria-hidden="false"
//               aria-haspopup="true"
//               aria-expanded="false"
//               aria-label="Bedding"
//               tabIndex={0}
//             >
//               Bedding
//             </li>
//           </ul>
//         </nav>

//         {/* <nav
//           className="ml-auto sm:ml-0 w-1/3"
//           aria-label="Mobile Navigation"
//           role="navigation"
//         >
//           <div className="flex justify-center max-w-[24px] cursor-pointer"></div>
//           <div className="menu-slide-right border-t max-w-[360px] header-mobile-nav z-40"></div>
//           <div className="menu-backdrop bg-opacity-60 pointer-events-auto block bg-gray-600 absolute top-[60px] z-30 w-screen h-screen"></div>
//         </nav> */}

//         {/* Add to cart button, deliver to dropdown, and sign in button on the right */}

//         </div>
//     </header>
//   );
// };

export default NavbarSimple;
