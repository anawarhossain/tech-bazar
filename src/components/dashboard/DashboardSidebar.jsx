import { auth } from "@/lib/auth";
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
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  const userRole = user?.role;

  const buyerNavItems = [
    { icon: House, href: "/dashboard/buyer", label: "Home" },
    { icon: Magnifier, href: "/dashboard/buyer/products", label: "products" },
    { icon: Bell, href: "/dashboard/buyer/notifications", label: "Notifications" },
    { icon: Envelope, href: "#", label: "Messages" },
    { icon: Person, href: "#", label: "Profile" },
    { icon: Gear, href: "#", label: "Settings" },
  ];

  const sellerNavItems = [
    { icon: House, href: "/dashboard/seller", label: "Dashboard" },
    { icon: Magnifier, href: "/dashboard/seller/products", label: "Products" },
    { icon: Bell, href: "/dashboard/seller/transactions", label: "Transactions" },
    { icon: Envelope, href: "#", label: "Messages" },
    { icon: Person, href: "#", label: "Profile" },
    { icon: Gear, href: "#", label: "Settings" },
  ];

  const dashboardNavItems= userRole === "buyer" ? buyerNavItems : sellerNavItems



  const navItemsWithLinks = dashboardNavItems.map((item) => (
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
    <>
      <aside className="hidden lg:block">
        <div>
          <Link
            href="/"
            className="flex flex-col items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors"
          >
            <Image src="/logo-xl.png" alt="Logo" width={180} height={50} />
          </Link>
        </div>
        <nav className="flex flex-col gap-1">{navItemsWithLinks}</nav>
      </aside>

      <Drawer>
        <Button variant="secondary" className={"lg:hidden"}>
          <Bars />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <div>
                  <Link
                    href="/"
                    className="flex flex-col items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors"
                  >
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
    </>
  );
};

export default DashboardSidebar;
