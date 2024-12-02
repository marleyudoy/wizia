import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import webLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const menuItems = ["About Us", "Pricing", "Customers", "Solution"];
  return (
    <Nav
      disableAnimation={false}
      isBordered
      className="bg-primaryColor1 text-white "
    >
      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={webLogo} alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex items-center justify-center gap-4"
        justify="center"
      >
        <NavbarBrand>
          <img src={webLogo} alt="" />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={`/${item.toLocaleLowerCase()}`}
              style={{ color: "white" }}
              className="w-full"
              color={"foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center" className="hidden md:block mt-5">
        <NavbarItem className="flex gap-4 items-center justify-center">
          <button className="btn bg-secondaryColor1 text-black">
            Book a Demo
          </button>
          <button className="btn border border-gray-300 hover:border hover:border-secondaryColor1">
            Contact Us
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-primaryColor1">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={`/${item.toLocaleLowerCase()}`}
              style={{ color: "white" }}
              className="w-full"
              color={"foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarItem className="flex  flex-col gap-4 mt-5">
          <button className="btn bg-secondaryColor1 text-black">
            Book a Demo
          </button>
          <button className="btn border border-gray-300 hover:border text-white hover:border-secondaryColor1">
            Contact us
          </button>
        </NavbarItem>
      </NavbarMenu>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
    </Nav>
  );
}

export default Navbar;
