'use client'
import React from "react";
import Image from "next/image";
import logo from "@/public/images/FALCONConstruction.png";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";

export const FalconConstructionLogo = () => {
    return (
        <Image
            src={logo}
            alt="Falcon Construction Logo"
            className="mr-2"
        />
    );
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <Navbar onMenuOpenChange={setIsMenuOpen} className="px-6 py-3">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <FalconConstructionLogo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8 pl-8 ml-auto" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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

