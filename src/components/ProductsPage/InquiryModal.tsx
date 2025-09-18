"use client";

import React from "react";
import { useTranslation } from "../context/i18n-context";

type Props = {
  isOpen: boolean;
  productName: string | null;
  email: string;
  message: string;
  onEmail: (v: string) => void;
  onMessage: (v: string) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function InquiryModal({
  isOpen,
  productName,
  email,
  message,
  onEmail,
  onMessage,
  onClose,
  onSubmit,
}: Props) {
  if (!isOpen) return null;

  const {t} = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">{t('inquiry_for')}{productName}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{t('email')} *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{t('message')}</label>
            <textarea
              value={message}
              onChange={(e) => onMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3] resize-none"
              placeholder="Вашето съобщение..."
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-[#27a0e3] hover:bg-[#1e8bc3] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              {t('send_inquiry')}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-600 text-white hover:bg-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
