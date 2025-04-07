import { EllipsisVertical, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";
import LanguageSwitcher from "./language-switcher";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="mr-1" />
            Cart
          </Link>
        </Button>
        <LanguageSwitcher />
        <UserButton />
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start space-y-2">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart className="mr-1" />
                Cart
              </Link>
            </Button>
            <LanguageSwitcher />
            <UserButton />
            <SheetDescription />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
