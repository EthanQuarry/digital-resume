import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getImage(date?: string) {
	// Server request to NASA API
	const baseUrl = new URL(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`);

	try {
		const image = await fetch(`${baseUrl}&date=${date}`, {
			method: 'GET',
			next: { revalidate: 600 }
		}).then((res) => res.json());

		console.log(image)
		return image;
	} catch (error) {
		console.log(error)
	}
}
