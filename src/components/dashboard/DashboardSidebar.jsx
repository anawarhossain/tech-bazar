import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { HouseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
  const navItems = [
    { icon: House, href: "/", label: "Home" },
    { icon: Magnifier, href: "/search", label: "Search" },
    { icon: Bell, href: "/notifications", label: "Notifications" },
    { icon: Envelope, href: "/messages", label: "Messages" },
    { icon: Person, href: "/profile", label: "Profile" },
    { icon: Gear, href: "/settings", label: "Settings" },
  ];

  const navItemsWithLinks = navItems.map((item) => (
    <Link
      href={item.href}
      key={item.label}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
      type="button"
    >
      <item.icon className="size-5 text-muted" />
      {item.label}
    </Link>
  ));

  return (
    <Drawer>
      <Button variant="secondary">
        <Bars />
        Menu
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <div>
                <Link href="/" className="flex flex-col items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors">
                  <Image
                    src="/logo-xl.png"
                    alt="Logo"
                    width={180}
                    height={50}
                  />
                </Link>
              </div>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">{navItemsWithLinks}</nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};

export default DashboardSidebar;
