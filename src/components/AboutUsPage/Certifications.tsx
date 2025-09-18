import React from "react";
import { useTranslation } from '@/components/context/i18n-context';

const CertCard = ({
  title,
  subtitle,
  note,
}: {
  title: string;
  subtitle: string;
  note: string;
}) => (
  <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-[#27a0e3] mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{subtitle}</p>
      <p className="text-sm text-gray-400">{note}</p>
    </div>
  </div>
);

export default function Certifications() {
  const {t} = useTranslation();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('ourCertificates')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('certificateSubHeader')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CertCard
            title="ISO 9001:2008"
            subtitle={t('certificate1Subtitle')}
            note={t('certificate1Note')}
          />
          <CertCard
            title="ISO 22000:2005"
            subtitle={t('certificate2Subtitle')}
            note={t('certificate2Note')}
          />
          <CertCard
            title="ISO 14001:2004"
            subtitle={t('certificate3Subtitle')}
            note={t('certificate3Note')}
          />
        </div>
      </div>
    </section>
  );
}
