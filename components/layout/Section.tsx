import React from 'react'

import { cn } from "@/lib/utils"

export default function Section({
	className,
	children,
	rx = false,
	ry = false,
}: {
	className?: string
	children: React.ReactNode
	rx?: boolean
	ry?: boolean
}) {

	return (
		<section className={`flex items-center justify-center w-full min-h-[92vh] bg-gradient-to-b from-background to-muted m-0 p-6 md:p-8`}>
			<div className={cn(`flex ${rx ? 'md:flex-row-reverse' : 'md:flex-row'} ${ry ? 'flex-col-reverse' : 'flex-col'} items-start justify-between w-full max-w-6xl`, className)}>
				{children}
			</div>
		</section>
	)
}
