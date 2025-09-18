"use client";

import React, { useState } from "react";
import ProductDetail from "@/components/ProductsPage/ProductDetail";
import InquiryModal from "@/components/ProductsPage/InquiryModal";
import { useTranslation } from "@/components/context/i18n-context";



export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  features: string[];
  applications?: string[]; 
  longDescription?: string;
  specs?: { label: string; value: string }[];
  contentHtml?: string;
}



export default function ProductDetailClient({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const openModal = (p: Product) => {
    setIsModalOpen(true);
    setMessage(t('inquiry_prefill', p.name));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('inquiry_success'));
    closeModal();
  };

  return (
    <>
      <ProductDetail product={product} onInquiry={openModal} />
      <InquiryModal
        isOpen={isModalOpen}
        productName={product.name}
        email={email}
        message={message}
        onEmail={setEmail}
        onMessage={setMessage}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
}