"use client";
import { useRef } from "react";
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
  const ref = useRef();

  return (
    <>
      <div className=" flex bg-background w-full fixed top-0 z-10 ">
        <div className="   justify-center  flex z-20  w-full items-center    ">
          <div className="md:flex hidden ">
            <NavigationMenu className="m-3">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div id="aboutus">About us</div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/callforpapers" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
                  <NavigationMenuTrigger>
                    <Link href="/commitee">Commitees</Link>
                  </NavigationMenuTrigger>
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
                  <Link href="/contactUs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="aboutUs">About us</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>Call for papers</DropdownMenuItem>
                <DropdownMenuItem>Dates</DropdownMenuItem>
                <DropdownMenuItem>Registrations</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/commitee">Commitees</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Speakers</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="contactUs">Contact us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
