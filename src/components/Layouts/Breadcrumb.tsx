"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";
interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb = ({ className }: BreadcrumbProps) => {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      className={clsx(
        "flex items-center text-sm text-black uppercase",
        className
      )}
    >
      <Link href="/">Anasayfa</Link>
      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        const displayName = decodeURIComponent(segment)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        return (
          <span key={path} className="flex items-center">
            <FaChevronRight className="mx-2" />
            {isLast ? (
              <span className="font-semibold">{displayName}</span>
            ) : (
              <Link href={path} className="hover:underline">
                {displayName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
