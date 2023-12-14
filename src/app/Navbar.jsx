"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const navItems = [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <nav className="w-full px-4 py-4 flex items-center justify-between">
      <div>Logo</div>
      <div className="flex gap-x-4">
        <ul className="text-sm font-medium flex items-center space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  currentPath === item.href
                    ? "text-white"
                    : "hover:text-white/100 text-white/70 "
                } transition-colors`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button title="Launch App" />
      </div>
    </nav>
  );
};

export default Navbar;
