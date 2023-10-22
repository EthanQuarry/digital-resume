import React from 'react'
import { getExperiences } from "@/sanity/queries";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import { PortableText } from '@portabletext/react';

export async function Experiences() {
	const experiences = await getExperiences();

	return (
		<div className="w-full px-4 flex flex-col items-center justify-start">
			<div className="w-full max-w-4xl flex flex-col items-center justify-evenly">
				{experiences.map((experience: any, index: number) => (
					<Card className="w-full mb-6 p-2" key={index}>
						<CardHeader>
							<h1 className='text-2xl text-bold md:text-3xl lg:text-4xl'>{experience.company}</h1>
							<h2 className='text-xl md:text-2xl lg:text-3xl '>{experience.title}</h2>
						</CardHeader>
						<CardContent>
							<div className="mb-2 flex w-full max-w-lg">
								<h3 className='text-md'><em>{experience.start}</em></h3>
								&nbsp;<p>to</p>&nbsp;
								<h3 className='text-md'><em>{experience.end}</em></h3>
							</div>
							<Separator className='my-2 w-full' />
							<PortableText value={experience.description} />
						</CardContent>
      <CardFooter>
        {experience.skills.map((skill: any, index: number) => (
								<Badge className='mr-2' key={index}>{skill.title}</Badge>))}
      </CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
