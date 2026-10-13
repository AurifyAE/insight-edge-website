import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageTransition from "@/app/components/layout/PageTransition";
import QuickContactBar from "@/app/components/layout/QuickContactBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="grow">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <QuickContactBar />
        </>
    );
}