
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function TabsPosyandu() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Wilayah Kerja Puskesmas', href: '/dashboard/manajemen-posyandu/wilayah-kerja' },
    { name: 'Manajemen Posyandu', href: '/dashboard/manajemen-posyandu/data-posyandu' },
    { name: 'GIS Sebaran Posyandu', href: '/dashboard/manajemen-posyandu/gis' },
    { name: 'Grafik Statistik Posyandu', href: '/dashboard/manajemen-posyandu/statistik-posyandu' },
  ];

  return (
    <div className="flex space-x-4 border-b border-gray-200 mb-2">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={clsx(
              'px-4 py-2 rounded-t-md font-medium text-sm transition',
              isActive
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-white text-violet-600 hover:bg-violet-100'
            )}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
