import Header from "../../components/Header";
import FooterCTA from "../../components/FooterCTA";
import DataDeletion from "../../components/Data-Deletion";

export default function Page() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-12 min-h-[60vh]">
                <DataDeletion />
            </main>
            <FooterCTA />
        </>
    );
}
