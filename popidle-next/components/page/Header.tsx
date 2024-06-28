import headingFont from "@/ui/fonts/headings";

type Props = {
    title: string,
    subtitle: string
};

export default function Header({title, subtitle}: Props) {
    return (
        <section className="header-section">
            <div className="header-container">
                <h1 className={`header-title ${headingFont.className}`}>{title}</h1>
                {subtitle && 
                    <div className={`header-subtitle ${headingFont.className}`}>{subtitle}</div>}
            </div>
        </section>
    )
}