"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

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
        onClick={() => {
          setOpen(false);
          if (home) window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="logo-mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 21 L12 4 L21 21 Z" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M8 21 L12 13 L16 21" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="logo-word">
          AISLAMIENTOS
          <br />
          CHAIRI
          <small>PLADUR · CEUTA · REFORMAS</small>
        </div>
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
