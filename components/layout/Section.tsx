import React from 'react'

function Section({
	children,
	reverse = false,
}: {
	children: React.ReactNode
	reverse?: boolean
}) {
	return (
		<div className={`flex items-center justify-center w-full min-h-[90vh] bg-gradient-to-b from-background via-muted to-background m-0 p-8 md:p-12`}>
			<div className={`flex ${reverse ? 'flex-col md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} items-start justify-between w-full max-w-6xl`}>
				{children}
			</div>
		</div>
	)
}

export default Section