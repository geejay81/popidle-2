import headingFont from "@/ui/fonts/headings";

type Props = {
    title: string,
    subtitle: string
};

export default function Header({title, subtitle }: Props) {
    return (
        <section className="bg-popidle-banner-bg text-popidle-banner-text">
            <div className="container mx-auto max-w-5xl px-8 py-8 space-y-3">
                <h1 className={`text-3xl font-bold md:text-4xl ${headingFont.className}`}>{title}</h1>
                {subtitle && 
                    <div className={`text-lg font-semibold md:text-xl  ${headingFont.className}`}>{subtitle}</div>}
            </div>
        </section>
    )
}