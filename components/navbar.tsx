'use client'
import React from "react";
import Image from "next/image";
import logo from "@/public/images/FALCON Construction_Logo_Black.png";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";

export default function AppNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="px-6 py-3 bg-white text-black border-b border-neutral-200"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="#home" aria-label="Falcon Construction Home" className="flex items-center gap-2">
                        <Image src={logo} alt="Falcon Construction logo" priority className="h-8 w-auto" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Menu */}
            <NavbarContent className="hidden sm:flex gap-8 ml-auto" justify="end">
                {menuItems.map((item, idx) => (
                    <NavbarItem key={idx}>
                        <Link href={item.href} className="text-black">
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item, idx) => (
                    <NavbarMenuItem key={idx}>
                        <Link href={item.href} className="w-full text-black" size="lg">
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
