"use client";

import * as React from "react";
import Link from "next/link";
import { Sun, Moon, Equal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="   justify-center  flex bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 z-30 top-0 w-full items-center  ">
        <div className="md:flex hidden ">
          <NavigationMenu className="m-5">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/aboutus" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/callforpapers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Call for papers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[900px]  ">
                    <ListItem>Important Dates</ListItem>
                    <ListItem>Schedule</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Registrations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[900px] ">
                    <ListItem>Registration Details</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Commitees</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[900px]  ">
                    <ListItem>Advisory Commitee</ListItem>
                    <ListItem>Technical Program Commitee</ListItem>
                    <ListItem>Organizing Commitee</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Speakers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[900px]  ">
                    <ListItem>Keynote Speakers</ListItem>
                    <ListItem>Plenary</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <span className=" justify-end m-5">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=" rounded-2xl"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </span>
        <div className=" md:hidden flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Equal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              
              
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About us</DropdownMenuItem>
              <DropdownMenuItem>Call for papers</DropdownMenuItem>
              <DropdownMenuItem>Dates</DropdownMenuItem>
              <DropdownMenuItem>Registrations</DropdownMenuItem>
              <DropdownMenuItem>Commitees</DropdownMenuItem>
              <DropdownMenuItem>Speakers</DropdownMenuItem>
              <DropdownMenuItem>Contact us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default Navbar;
