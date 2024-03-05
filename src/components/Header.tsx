'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const headerTitle = [
  { link: '/', title: 'around me' },
  { link: '/jus-me', title: 'me' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-screen flex container space-x-8 border-b justify-center py-4">
      {headerTitle.map((headerItem, idx) => {
        return (
          <Link
            key={idx}
            href={headerItem.link}
            className={`${pathname === headerItem.link ? 'font-semibold' : ''}`}
            prefetch={true}
          >
            {headerItem.title}
          </Link>
        );
      })}
    </div>
  );
}
