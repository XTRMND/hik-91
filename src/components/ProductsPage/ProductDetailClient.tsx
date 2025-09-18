"use client";

import React, { useState } from "react";
import ProductDetail from "@/components/ProductsPage/ProductDetail";
import InquiryModal from "@/components/ProductsPage/InquiryModal";
import type { Product } from "@/config/content";
import { useTranslation } from "../context/i18n-context";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
    setMessage(
      `${t('inquiry_prefill')}`
    );
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


