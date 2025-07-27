import {
  UsersIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import CakupanImunisasiChart from '@/app/ui/dashboard/cakupan-imunisasi-chart';
import SummaryCard from '@/app/ui/dashboard/summary-card';
import { getDataImunisasi } from '@/lib/data-imunisasi';
import { getTotalPosyandu } from '@/lib/data-posyandu';
import { getTotalKader } from '@/lib/data-kader';


export default async function Page() {
  const data = await getDataImunisasi();
  const totalPosyandu = await getTotalPosyandu();
  const totalKader = await getTotalKader();

  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        Dashboard <span className="text-emerald-500">Admin E‑Posyandu Care</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang, berikut ringkasan informasi data E-Posyandu..
      </p>

      {/* Ringkasan Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Jumlah Data Posyandu"
          count={(totalPosyandu ?? 0).toString()}
          icon={<UsersIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Data Kader"
          count={(totalKader ?? 0).toString()}
          icon={<ClipboardDocumentListIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jadwal Posyandu"
          count="null"
          icon={<CalendarDaysIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Laporan Pemeriksaan"
          count="null"
          icon={<DocumentTextIcon className="w-7 h-7 text-emerald-600" />}
        />
      </div>

      {/* Grafik Imunisasi */}
      <CakupanImunisasiChart data={data} />
    </div>
  );
}
