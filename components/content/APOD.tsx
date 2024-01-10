"use client"
import { getImage } from '@/lib/utils';
import { format } from "date-fns";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Section from '../layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { DatePicker } from '../ui/date-picker';


export default function APOD() {
	const [image, setImage] = useState({} as any);
	const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

	useEffect(() => {
		getImage(date.toString()).then((image) => {
			setImage(image);
		})
	}, [date])

	if (!image) return (
		<div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted md:bg-gradient-to-r">
			<h2 className="font-extrabold text-3xl bg-gradient-to-r from-foreground to-muted-foreground inline-block text-transparent bg-clip-text sm:text-4xl md:text-5xl lg:text-6xl">Image Not Found</h2>
		</div>
	)

	return (
		<>
			<span className="w-full min-h-fit px-8 flex flex-col items-center justify-center bg-gradient-to-b from-card to-background ">
				<h2 className="font-extrabold text-3xl p-2 m-2 bg-gradient-to-t from-card-foreground to-shade inline-block text-transparent bg-clip-text sm:text-4xl md:text-5xl lg:text-6xl dark:bg-gradient-to-b">Astronomy Picture of the Day
				</h2>

				<DatePicker onDateChange={(date: string) => {
					setDate(date);
					console.log(date);
				}}
				/>
			</span>
			<Section rx>
				<div className="w-full h-auto p-4 flex flex-col items-center justify-start md:w-[50%] md:max-w-2xl">
					{image.media_type === 'video' && (
						<iframe
							width={560}
							height={315}
							src={image.url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="w-full max-w-xl mb-2 rounded-lg"></iframe>
					)}
					{image.media_type === 'image' && (
						<Image
							src={image.hdurl ? image.hdurl : image.url}
							alt="Astronomy picture of the day"
							width={800}
							height={450}
							priority
							className="w-full max-w-xl h-auto mb-2 rounded-full md:rounded-3xl"
						/>
					)}
					{image.copyright && (
						<caption className="p-2 font-extralight text-sm">
							&copy; {image.copyright}
						</caption>
					)}
				</div>

				<div className="w-full h-auto p-4 flex flex-col items-center justify-start md:w-[50%] md:max-w-2xl">
					<Card className="border-none rounded-3xl p-4">
						<CardHeader>
							<CardTitle className={`self-center sm:text-3xl md:self-start md:text-4xl lg:text-5xl`}>{image.title}</CardTitle>
							<CardDescription className="self-center md:self-start">{image.date}</CardDescription>
						</CardHeader>
						<CardContent>{image.explanation}</CardContent>
					</Card>

				</div>
			</Section>
		</>
	)
}
