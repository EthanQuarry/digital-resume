import { getIntro } from '@/sanity/queries'

export default async function Intro() {
    const intro = await getIntro()

    return (
        <div className="flex w-full max-w-4xl flex-col items-center justify-start p-6 shadow bg-card rounded-lg text-card-foreground">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            {intro?.name}
          </h1>
          <h4 className="mb-6 text-xl sm:text-2xl">{intro?.location}</h4>
          <PortableText value={intro?.summary} />
        </div>
    )
}