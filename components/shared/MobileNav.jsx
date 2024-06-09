"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <FaBars className="w-[20px] h-5" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
