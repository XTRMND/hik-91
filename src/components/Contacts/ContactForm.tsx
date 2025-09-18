"use client";

import { useState } from "react";
import {  Send } from "lucide-react";
import { useTranslation } from '@/components/context/i18n-context';

export default function ContactForm() {

    const {t} = useTranslation();

    const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Вашето съобщение е изпратено успешно! Ще се свържем с вас скоро.");
		setFormData({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: ""
		});
	};

return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-8">
                {t('sendUsMessage')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('name')}*
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3]"
                            placeholder={t('yourName')}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('email')}*
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3]"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('phone')}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3]"
                            placeholder="+359 888 123 456"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('theme')}*
                        </label>
                        <select
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3]"
                        >
                            <option value="">{t('chooseTheme')}</option>
                            <option value="general">{t('theme1')}</option>
                            <option value="products">{t('theme2')}</option>
                            <option value="pricing">{t('theme3')}</option>
                            <option value="delivery">{t('theme4')}</option>
                            <option value="partnership">{t('theme5')}</option>
                            <option value="other">{t('theme6')}</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('message')}*
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#27a0e3] resize-none"
                        placeholder={t('yourMessage')}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#27a0e3] hover:bg-[#27a0e3] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                    <Send className="w-5 h-5 mr-2" />
                    {t('sendMessage')}
                </button>
            </form>
        </div>
    )
}