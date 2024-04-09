import headingFont from "@/ui/fonts/headings";

type Props = {
    title: string,
    subtitle: string
};

export default function Header({title, subtitle }: Props) {
    return (
        <section className="bg-gradient-to-br from-indigo-600 to-fuchsia-700 text-white">
            <div className="container mx-auto max-w-l px-4 py-8 space-y-3">
                <h1 className={`text-3xl font-bold md:text-4xl ${headingFont.className}`}>{title}</h1>
                {subtitle && 
                    <div className="text-lg font-semibold md:text-xl">{subtitle}</div>}
            </div>
        </section>
    )
}