import FixStats from "@/components/client-apps/FixStats";
import Header from "@/components/page/Header";

const title = "Fix stats";
const subtitle = "Use with caution - this can break your statistics";

export default function FixStatsPage() {
    return (
        <>
            <Header title={title} subtitle={subtitle} />
            <main className="grow">
                <div className="max-w-md p-4 mx-auto md:max-w-screen-lg md:px-8">
                    <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-4">
                        <FixStats />
                    </div>
                </div>
            </main>
        </>
    )
}