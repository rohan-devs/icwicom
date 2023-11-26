"use client";
import { useRef } from "react";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { Sun, Moon, Equal, Ghost } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import Progressbar from "./Progressbar";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [hidden, sethidden] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prev = scrollYProgress.getPrevious();
    if (latest > prev) {
      sethidden(true);
    } else {
      sethidden(false);
    }
  });

  return (
    <>
      <motion.div
        className=" flex bg-background w-full fixed top-0 z-10 "
        variants={{
          visble: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visble"}
        transition={{ duration: 0.5 }}
      >
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
                      <Link href="/dates">
                        <ListItem>Important Dates</ListItem>
                      </Link>
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
          <span className="flex justify-end m-5">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" rounded-2xl"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </span>
          <div className=" md:hidden">
            <Sheet>
              <SheetTrigger>
                <Equal />
              </SheetTrigger>
              <SheetContent >
                <div className=" flex flex-col items-center justify-center my-[20px] ">
                  <Button variant="link"> 
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="link">
                    <Link href="/">About us</Link>
                  </Button>
                  <Button variant="link">
                    <Link href="/">Call for Papers</Link>
                  </Button>
                  <Button variant="link">
                    <Link href="/dates">Dates</Link>
                  </Button>
                  <Button variant="link">
                    <Link href="/commitee">Commitees</Link>
                  </Button> 
                  <Button variant="link">
                    <Link href="/">Speakers</Link>
                  </Button>
                  <Button variant="link">
                    <Link href="/contactUs">Contact us</Link>
                  </Button>
                </div>

               
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
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
