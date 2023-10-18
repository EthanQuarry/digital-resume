import { studioConfig } from "@/config";

export const metadata = {
	title: studioConfig.title,
	description: studioConfig.description,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}