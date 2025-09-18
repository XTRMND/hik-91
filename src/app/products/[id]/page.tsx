"use client";
import { useEffect, use as usePromise } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProductDetailClient from "@/components/ProductsPage/ProductDetailClient";
import { useTranslation } from "@/components/context/i18n-context";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: PageProps) {
  const { id } = usePromise(params);
  const numericId = Number(id);
  const { t } = useTranslation();
  const router = useRouter();


  interface Product {
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
  
  const products: Product[] = [
    {
      id: 1,
      name: t('product1_name'),
      description: t('product1_description'),
      image: "/cta1.png",
      images: ["/cta1.png", "/cta2.png", "/cta3.png"],
      category: t('product1_category'),
      features: [
        t('product1_feature1'),
        t('product1_feature2'),
        t('product1_feature3'),
        t('product1_feature4'),
        t('product1_feature5')
      ],
      applications: [
        t('product1_application1'),
        t('product1_application2'),
        t('product1_application3'),
        t('product1_application4')
      ],
      longDescription: t('product1_longDescription'),
      specs: [
        { label: t('product1_specs_label'), value: t('product1_specs_value1') },
        { label: t('product1_specs_labe2'), value: t('product1_specs_value2') },
        { label: t('product1_specs_labe3'), value: t('product1_specs_value3') },
        { label: t('product1_specs_labe4'), value: t('product1_specs_value4') },
        { label: t('product1_specs_labe5'), value: t('product1_specs_value5') }
      ],
      contentHtml: `
        <h3>${t('product1_name')}</h3>
        <p>${t('product1_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product1_feature1')}</li>
          <li>${t('product1_feature2')}</li>
          <li>${t('product1_feature3')}</li>
          <li>${t('product1_feature4')}</li>
          <li>${t('product1_feature5')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product1_application1')}</li>
          <li>${t('product1_application2')}</li>
          <li>${t('product1_application3')}</li>
          <li>${t('product1_application4')}</li>
        </ul>
      `,
    },
    {
      id: 2,
      name: t('product2_name'),
      description: t('product2_description'),
      image: "/cta2.png",
      images: ["/cta2.png", "/cta1.png", "/cta4.png"],
      category: t('product2_category'),
      features: [
        t('product2_feature1'),
        t('product2_feature2'),
        t('product2_feature3'),
        t('product2_feature4'),
        t('product2_feature5')
      ],
      applications: [
        t('product2_application1'),
        t('product2_application2'),
        t('product2_application3'),
        t('product2_application4'),
        t('product2_application5')
      ],
      longDescription: t('product2_longDescription'),
      specs: [
        { label: t('product2_specs_label1'), value: t('product2_specs_value1') },
        { label: t('product2_specs_label2'), value: t('product2_specs_value2') },
        { label: t('product2_specs_label3'), value: t('product2_specs_value3') },
        { label: t('product2_specs_label4'), value: t('product2_specs_value4') },
      ],
      contentHtml: `
        <h3>${t('product2_name')}</h3>
        <p>${t('product2_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product2_feature1')}</li>
          <li>${t('product2_feature2')}</li>
          <li>${t('product2_feature3')}</li>
          <li>${t('product2_feature4')}</li>
          <li>${t('product2_feature5')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product2_application1')}</li>
          <li>${t('product2_application2')}</li>
          <li>${t('product2_application3')}</li>
          <li>${t('product2_application4')}</li>
          <li>${t('product2_application5')}</li>
        </ul>
      `,
    },
    {
      id: 3,
      name: t('product3_name'),
      description: t('product3_description'),
      image: "/cta3.png",
      images: ["/cta3.png", "/cta2.png"],
      category: t('product3_category'),
      features: [
        t('product3_feature1'),
        t('product3_feature2'),
        t('product3_feature3'),
        t('product3_feature4'),
        t('product3_feature5')
      ],
      applications: [
        t('product3_application1'),
        t('product3_application2'),
        t('product3_application3'),
        t('product3_application4'),
        t('product3_application5')
      ],
      longDescription: t('product3_longDescription'),
      specs: [
        { label: t('product3_specs_label1'), value: t('product3_specs_value1') },
        { label: t('product3_specs_label2'), value: t('product3_specs_value2') },
        { label: t('product3_specs_label3'), value: t('product3_specs_value3') },
        { label: t('product3_specs_label4'), value: t('product3_specs_value4') }
      ],
      contentHtml: `
        <h3>${t('product3_name')}</h3>
        <p>${t('product3_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product3_feature1')}</li>
          <li>${t('product3_feature2')}</li>
          <li>${t('product3_feature3')}</li>
          <li>${t('product3_feature4')}</li>
          <li>${t('product3_feature5')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product3_application1')}</li>
          <li>${t('product3_application2')}</li>
          <li>${t('product3_application3')}</li>
          <li>${t('product3_application4')}</li>
          <li>${t('product3_application5')}</li>
        </ul>
      `,
    },
    {
      id: 4,
      name: t('product4_name'),
      description: t('product4_description'),
      image: "/cta4.png",
      images: ["/cta4.png", "/cta1.png"],
      category: t('product4_category'),
      features: [
        t('product4_feature1'),
        t('product4_feature2'),
        t('product4_feature3'),
        t('product4_feature4'),
        t('product4_feature5')
      ],
      applications: [
        t('product4_application1'),
        t('product4_application2'),
        t('product4_application3'),
        t('product4_application4'),
        t('product4_application5')
      ],
      longDescription: t('product4_longDescription'),
      specs: [
        { label: t('product4_specs_label1'), value: t('product4_specs_value1') },
        { label: t('product4_specs_label2'), value: t('product4_specs_value2') },
        { label: t('product4_specs_label3'), value: t('product4_specs_value3') },
        { label: t('product4_specs_label4'), value: t('product4_specs_value4') },
        { label: t('product4_specs_label5'), value: t('product4_specs_value5') },
      ],
      contentHtml: `
        <h3>${t('product4_name')}</h3>
        <p>${t('product4_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product4_feature1')}</li>
          <li>${t('product4_feature2')}</li>
          <li>${t('product4_feature3')}</li>
          <li>${t('product4_feature4')}</li>
          <li>${t('product4_feature5')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product4_application1')}</li>
          <li>${t('product4_application2')}</li>
          <li>${t('product4_application3')}</li>
          <li>${t('product4_application4')}</li>
          <li>${t('product4_application5')}</li>
        </ul>
      `,
    },
    {
      id: 5,
      name: t('product5_name'),
      description: t('product5_description'),
      image: "/cta1.png",
      images: ["/cta1.png", "/cta2.png"],
      category: t('product5_category'),
      features: [
        t('product5_feature1'),
        t('product5_feature2'),
        t('product5_feature3'),
        t('product5_feature4'),
        t('product5_feature5')
      ],
      applications: [
        t('product5_application1'),
        t('product5_application2'),
        t('product5_application3'),
        t('product5_application4')
      ],
      longDescription: t('product5_longDescription'),
      specs: [
        { label: t('product5_specs_label1'), value: t('product5_specs_value1') },
        { label: t('product5_specs_label2'), value: t('product5_specs_value2') },
        { label: t('product5_specs_label3'), value: t('product5_specs_value3') },
      ],
      contentHtml: `
        <h3>${t('product5_name')}</h3>
        <p>${t('product5_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product5_feature1')}</li>
          <li>${t('product5_feature2')}</li>
          <li>${t('product5_feature3')}</li>
          <li>${t('product5_feature4')}</li>
          <li>${t('product5_feature5')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product5_application1')}</li>
          <li>${t('product5_application2')}</li>
          <li>${t('product5_application3')}</li>
          <li>${t('product5_application4')}</li>
        </ul>
      `,
    },
    {
      id: 6,
      name: t('product6_name'),
      description: t('product6_description'),
      image: "/cta2.png",
      images: ["/cta2.png", "/cta3.png"],
      category: t('product6_category'),
      features: [
        t('product6_feature1'),
        t('product6_feature2'),
        t('product6_feature3'),
        t('product6_feature4')
      ],
      applications: [
        t('product6_application1'),
        t('product6_application2'),
        t('product6_application3')
      ],
      longDescription: t('product6_longDescription'),
      specs: [
        { label: t('product6_specs_label1'), value: t('product6_specs_value1') },
        { label: t('product6_specs_label2'), value: t('product6_specs_value2') },
        { label: t('product6_specs_label3'), value: t('product6_specs_value3') },
      ],
      contentHtml: `
        <h3>${t('product6_name')}</h3>
        <p>${t('product6_description')}</p>
        <h4>${t('characteristics')}</h4>
        <ul>
          <li>${t('product6_feature1')}</li>
          <li>${t('product6_feature2')}</li>
          <li>${t('product6_feature3')}</li>
          <li>${t('product6_feature4')}</li>
        </ul>
        <h4>${t('applications')}</h4>
        <ul>
          <li>${t('product6_application1')}</li>
          <li>${t('product6_application2')}</li>
          <li>${t('product6_application3')}</li>
        </ul>
      `,
    },
  ];
  const product: Product | undefined = products.find((p) => p.id === numericId);

  useEffect(() => {
    if (!product) router.replace("/products");
  }, [product, router]);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <Reveal as="section" delayMs={40}>
        {product ? <ProductDetailClient product={product} /> : null}
      </Reveal>

      <Reveal as="section" delayMs={80}>
        <Footer />
      </Reveal>
    </main>
  );
}