"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavItem = ({ hash, label }: { hash: string; label: string }) => {
    if (home) {
      return (
        <a
          href={`#${hash}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(hash);
          }}
        >
          {label}
        </a>
      );
    }
    return (
      <Link href={`/#${hash}`} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="nav">
      <Link
        href="/"
        className="logo"
        aria-label="Aislamientos Chairi — inicio"
        onClick={() => {
          setOpen(false);
          if (home) window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Logo priority />
      </Link>

      <div className="nav-links">
        {NAV.map((item) => (
          <NavItem key={item.hash} hash={item.hash} label={item.label} />
        ))}
      </div>

      <button
        className={`nav-burger${open ? " on" : ""}`}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-drawer${open ? " show" : ""}`}>
        {NAV.map((item) => (
          <NavItem key={item.hash} hash={item.hash} label={item.label} />
        ))}
      </div>
    </nav>
  );
}
