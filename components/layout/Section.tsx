"use client"
import React from 'react'

export function Section({
	children,
	reverse = false,
}: {
	children: React.ReactNode
	reverse?: boolean
}) {
	return (
		<section className={`flex items-center justify-center w-full min-h-[92vh] bg-gradient-to-br from-muted via-background to-muted m-0 p-8 md:p-12`}>
			<div className={`flex ${reverse ? 'flex-col md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} items-start justify-between w-full max-w-6xl`}>
				{children}
			</div>
		</section>
	)
}

export default Section