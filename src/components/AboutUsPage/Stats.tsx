import React from "react";
import { Award, Users, Factory } from "lucide-react";
import { useTranslation } from '@/components/context/i18n-context';

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="text-center">
    <div className="bg-[#27a0e3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
    <p className="text-gray-300">{label}</p>
  </div>
);

export default function Stats() {
  const {t} = useTranslation();
  return (
    <section className="py-20 bg-[#101828]">
      <div className="absolute inset-x-0 top-0 h-32 md:h-15 z-10 bg-gradient-to-t from-transparent via-black/70 to-black" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard
            icon={<Factory className="w-8 h-8 text-white" />}
            value="30+"
            label={t('statCardLabel1')}
          />
          <StatCard
            icon={<Users className="w-8 h-8 text-white" />}
            value="1000+"
            label={t('statCardLabel2')}
          />
          <StatCard
            icon={<Award className="w-8 h-8 text-white" />}
            value="3"
            label={t('statCardLabel3')}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-20 z-10 bg-gradient-to-b from-transparent via-black/70 to-black" />
    </section>
  );
}
