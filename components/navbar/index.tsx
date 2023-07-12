'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Link, Button, NavbarMenuItem } from "@nextui-org/react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">SEKTEKOMIK</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">SEKTEKOMIK</p>
        </NavbarBrand>
        <NavbarItem as={Link} color="foreground" href="#">
          Home
        </NavbarItem>
        <NavbarItem isActive as={Link} color="warning" href="#">
          Daftar Komik
        </NavbarItem>
        <NavbarItem as={Link} color="foreground" href="#">
          Populer
        </NavbarItem>
        <NavbarItem as={Link} color="foreground" href="#">
          Projects
        </NavbarItem>
        <NavbarItem as={Link} color="foreground" href="#">
          Bookmarks
        </NavbarItem>
        <NavbarItem as={Link} color="foreground" href="#">
          History
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem as={Link} className="hidden md:flex" href="#">
          Login
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
