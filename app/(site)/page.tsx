import { siteConfig } from "@/config";
import { getIntro, getPosts, getProjects, getExperiences } from "@/sanity/queries";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const intro = await getIntro();
  const featuredPosts = await getPosts();
  const featuredProjects = await getProjects();
  const featuredExperiences = await getExperiences();

  return (
    <>
      <title>Home | {siteConfig.title}</title>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Section>
          <div className="flex w-full max-w-3xl h-auto min-h-[40vh] md:min-h-[78vh] flex-col items-center text-center md:items-start md:text-start justify-evenly p-4 md:p-8 lg:p-12 text-card-foreground">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
              {siteConfig.title} of {intro?.name}
            </h1>
            <div className="w-full flex items-center justify-center md:justify-start">
              <Link href="/resume">
                <Button variant="outline" className=" max-h-12 mx-2 px-4 py-2 rounded-md">
                  View Resume
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-primary max-h-12 mx-2 px-4 py-2 rounded-md">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full max-w-3xl h-auto min-h-[28vh] md:min-h-[78vh] flex-col items-center justify-around p-4 md:p-8 lg:p-12 text-card-foreground">
            <Image src="/undraw_male_web.svg" alt="logo" width={96} height={96} className="w-auto min-h-[300px] md:min-h-[360px] h-[24vh] md:h-[60vh] max-h-[800px]" />
          </div>
        </Section>
      </main>
    </>
  )
}
