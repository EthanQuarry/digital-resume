import { getIntro } from "@/sanity/queries";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export async function Intro() {
  const intro = await getIntro()

  return (
    <div className="flex w-full max-w-4xl flex-col items-center justify-center mb-6 p-6 shadow bg-card rounded-lg text-card-foreground">
      <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
        {intro?.name}
      </h1>
      <h3 className="mb-6 text-xl sm:text-2xl">{intro?.location}</h3>
      <PortableText value={intro?.summary} />
    </div>
  )
}