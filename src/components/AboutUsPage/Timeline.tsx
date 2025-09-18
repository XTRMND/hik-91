import React from "react";
import { useTranslation } from '@/components/context/i18n-context';

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <section className="tl-root bg-[#101828] pt-6 pb-6">
      <div className="absolute inset-x-0 top-0 h-32 md:h-20 z-10 bg-gradient-to-t from-transparent via-black/70 to-black" />

      <style>
        {`
          .tl-root * { box-sizing: border-box; }

          .tl-timeline { position: relative; max-width: 1200px; margin: 0 auto; }
          .tl-timeline::after { content: ''; position: absolute; width: 6px; background-color: #ffffff; top: 0; bottom: 0; left: 50%; margin-left: -3px; z-index: 0; }
          .tl-item { position: relative; width: 50%; padding: 0px 40px; }
          .tl-left  { left: 0; }
          .tl-right { left: 50%; }
          .tl-item::after { content: ''; position: absolute; top: 50%; transform: translateY(-50%); width: 25px; height: 25px; background-color: #ffffff; border: 4px solid #2598d7; border-radius: 50%; z-index: 2; }
          .tl-left::after { right: -17px; }
          .tl-right::after { left: -16px; }
          .tl-left::before, .tl-right::before { content: ""; position: absolute; top: 50%; transform: translateY(-50%); border: medium solid transparent; }
          .tl-left::before { right: 30px; border-width: 10px 0 10px 10px; border-left-color: #2598d7; }
          .tl-right::before { left: 30px; border-width: 10px 10px 10px 0; border-right-color: #2598d7; }
          .tl-card { background-color: #2598d7; color: #ffffff; padding: 20px 30px; border-radius: 10px; }
          .tl-card h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
          @media (min-width: 768px) { .tl-card h2 { font-size: 1.5rem; } }
          @media (max-width: 600px) {
            .tl-timeline::after { left: 31px; }
            .tl-item { width: 100%; left: 0; padding-left: 70px; padding-right: 25px; }
            .tl-item::after { left: 15px; right: auto; }
            .tl-left::before, .tl-right::before { left: 60px; right: auto; border-width: 10px 10px 10px 0; border-right-color: #2598d7; }
          }
        `}
      </style>

      <div className="tl-timeline">
        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>1991</h2>
            <p>{t('timeline1')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>1999</h2>
            <p>{t('timeline2')}</p>
          </div>
        </div>

        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>2001</h2>
            <p>{t('timeline3')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>2002</h2>
            <p>{t('timeline4')}</p>
          </div>
        </div>

        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>2003</h2>
            <p>{t('timeline5')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>2004</h2>
            <p>{t('timeline6')}</p>
          </div>
        </div>

        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>2007</h2>
            <p>{t('timeline7')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>2009</h2>
            <p>{t('timeline8')}</p>
          </div>
        </div>

        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>2013</h2>
            <p>{t('timeline9')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>2017</h2>
            <p>{t('timeline10')}</p>
          </div>
        </div>

        <div className="tl-item tl-left">
          <div className="tl-card">
            <h2>2019</h2>
            <p>{t('timeline11')}</p>
          </div>
        </div>

        <div className="tl-item tl-right">
          <div className="tl-card">
            <h2>2020</h2>
            <p>{t('timeline12')}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 md:h-20 z-10 bg-gradient-to-b from-transparent via-black/70 to-black" />
    </section>
  );
}

