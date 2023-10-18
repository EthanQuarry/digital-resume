import { siteConfig } from "@/config";
import { getIntro } from "@/sanity/queries";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const intro = await getIntro();

  return (
    <>
      <title>Home | {siteConfig.title}</title>

      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start p-6 shadow bg-card rounded-lg text-card-foreground">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            {intro?.name}
          </h1>
          <h4 className="mb-6 text-xl sm:text-2xl">{intro?.location}</h4>
          <PortableText value={intro?.summary} />
        </div>
      </main>
    </>
  )
}
