'use client'

import TabsPane from '@/components/tab-pane-manajemen-posyandu';
import { MapPinIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

export default function Page() {
  const MapView = dynamic(() => import('@/components/map-view'), { ssr: false });

  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-3">
            <div>
                <h1 className="text-2xl font-bold">
                Manajemen Data <span className="">Posyandu & Kader</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                Informasi & manajemen data posyandu
                </p>
            </div>
        </div>
        <TabsPane />

        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4"><MapPinIcon /> Peta Sebaran Posyandu</h2>
            <MapView />
        </div>
    </div>
  );
}
