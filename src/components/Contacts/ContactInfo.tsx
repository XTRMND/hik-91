"use client";

import { Mail, MapPin } from "lucide-react";
import { useTranslation } from '@/components/context/i18n-context';


export default function ContactForm() {
    const {t}= useTranslation();

return (
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">
                            {t('ourOffices')}
                        </h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-[#27a0e3] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t('address')}</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                            {t('office1')}{" "}
                                        <a 
                                            href="tel:+35932/ 63 23 69" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +35932/ 63 23 69
                                        </a>{" "}
                                        <br />
                                        {t('tel')}{" "}
                                        <a 
                                            href="tel:+359 3118/ 25 60" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +359 3118/ 25 60
                                        </a>{" "}
                                    </p>
                                    <br />
                                    <p className="text-gray-300 leading-relaxed">
                                    {t('office2')} <br />
                                    {t('office2Line2')}{" "}
                                    <a 
                                            href="tel:+359 887 59 14 91" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +359 887 59 14 91
                                        </a>{" "}	
                                    </p>
                                    <br />
                                    <p className="text-gray-300 leading-relaxed">
                                    {t('office3')}{" "}
                                    <a 
                                            href="tel:+359 896 66 74 26" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +359 896 66 74 26
                                        </a>{" "}	
                                    </p>
                                    <br />
                                    <p className="text-gray-300 leading-relaxed">
                                    {t('office4')} <br />
                                    {t('office4Line2')}{" "}
                                    <a 
                                            href="tel:+359 888 21 20 12" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +359 888 21 20 12
                                        </a>{" "}	
                                    </p>
                                    <br />
                                    <p className="text-gray-300 leading-relaxed">
                                    {t('office5')}{" "}
                                    <a
                                            href="tel:+359 896 66 74 17" 
                                            className="inline text-gray-300 hover:text-[#27a0e3] transition-colors"
                                        >
                                            +359 896 66 74 17
                                        </a>{" "}	
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[#27a0e3] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t('email')}</h3>
                                    <a 
                                        href="mailto:office@hik91.bg" 
                                        className="text-gray-300 hover:text-[#27a0e3] transition-colors"
                                    >
                                        office@hik91.bg
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}