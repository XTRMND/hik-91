"use client";

import { JSX, useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
	delayMs?: number;
}

export default function Reveal({ children, className = "", as = "div", delayMs = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
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

	const Tag = as as ElementType;
	return (
		<div
			ref={ref}
			className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
			style={{ animationDelay: visible ? `${delayMs}ms` : undefined }}
		>
			<Tag>{children}</Tag>
		</div>
	);
}

