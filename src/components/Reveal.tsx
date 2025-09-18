"use client";

import { JSX, useEffect, useRef, useState } from "react";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
	delayMs?: number;
}

export default function Reveal({ children, className = "", as = "div", delayMs = 0 }: RevealProps) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const Tag: any = as;
	return (
		<Tag
			ref={ref as any}
			className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
			style={{ animationDelay: visible ? `${delayMs}ms` : undefined }}
		>
			{children}
		</Tag>
	);
}
