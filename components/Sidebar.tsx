"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "@/app/constants";
import { usePathname } from "next/navigation";
import { avatarPlaceholderUrl } from "@/app/constants";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          height={50}
          width={160}
          className="hidden lg:block h-auto"
          alt=""
        />
        <Image
          src="/assets/icons/logo-brand.svg"
          height={52}
          width={52}
          className="lg:hidden  h-auto"
          alt=""
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-col flex-1 gap-6">
          {navItems.map(({ url, icon, name }) => {
            const active = pathName === url;
            return (
              <Link key={name} href={url} className="">
                <li
                  className={`sidebar-nav-item ${active ? "shad-active" : ""}`}
                >
                  <Image
                    src={icon}
                    height={24}
                    width={24}
                    alt=""
                    className={`nav-icon ${active ? "nav-icon-active" : ""}`}
                  />
                  <p className="hidden lg:block">{name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Image
        src="/assets/images/files-2.png"
        alt=""
        width={506}
        height={408}
        className="w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatarPlaceholderUrl}
          alt=""
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize ">{"fullName"}</p>
          <p className="caption ">{"email"}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
