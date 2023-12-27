import Link from 'next/link'
import React from 'react'
import { NavMenu } from './NavMenu'
import { Button } from '../ui/button'
import { ModeToggle } from '../providers/mode-toggle'
import navLinks from './menuItems'
import Image from 'next/image'

async function Header() {

	return (
		<header className='w-full h-[8vh] max-h-16 px-4 bg-background shadow text-foreground flex items-center justify-center'>
			<div className="w-full max-w-7xl mx-2 flex justify-between items-center">
				<div className="flex mr-2 justify-around items-center">
					<div className="ml-2">
						<Link href={"/"}>
							<Image src={"/logo.png"} alt="logo" width={96} height={96} className='h-auto min-w-10 w-10' />
						</Link>
					</div>
				</div>

				<div className="flex w-full mx-4 justify-end items-center">
					<ul className="mx-2 hidden md:flex md:justify-evenly md:items-center">

						{navLinks.map((link: any) => (
							<li key={link.order} className="text-foreground hover:text-accent px-2 mx-1">
								<Link href={link.link}>{link.name}</Link>
							</li>))}

					</ul>
					<div className="mx-2 flex items-center md:hidden">
						<NavMenu />
					</div>
				</div>

				<div className="flex ml-2 justify-around items-center">
					<ModeToggle />
					<Link href={"/contact"}>
						<Button className="bg-primary max-h-12 mx-2 px-4 py-2 rounded-md">Contact</Button>
					</Link>
				</div>

			</div>
		</header>
	)
}

export default Header