import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function Home() {

  return (
    <>
      <title>Home | {siteConfig.title}</title>

      <Section>
        <div className="flex w-full max-w-3xl h-auto min-h-[40vh] md:min-h-[78vh] flex-col items-center text-center md:items-start md:text-start justify-evenly p-4 md:p-8 lg:p-12 xl:p-16 text-card-foreground rounded-l-lg">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
            {siteConfig.title} of {siteConfig.owner}
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
        <div className="flex w-full max-w-3xl min-h-[40vh] h-auto md:min-h-[78vh] flex-col items-center justify-around p-4 md:p-8 lg:p-12 xl:p-16 text-card-foreground rounded-r-lg">
          <Image src="/illustrations/undraw_resume_re_hkth.svg" alt="logo" width={96} height={96} className="w-auto min-h-[300px] md:min-h-[360px] h-[24vh] md:h-[60vh] max-h-[800px]" />
        </div>
      </Section>
    </>
  )
}

export default Home
