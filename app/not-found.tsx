import Link from 'next/link';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export const metadata = {
    title: '404 - Page Not Found | Insight Edge Global',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="grow flex items-center justify-center px-4 pt-20">
                <div className="max-w-xl w-full text-center py-20">
                    <div className="mb-8 relative">
                        <h1 className="text-[12rem] md:text-[16rem] font-black text-[#365693] opacity-5 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#365693] mb-4">Page Not Found</h2>
                            <div className="w-16 h-1 bg-[#8B9C32] rounded-full mb-6 mx-auto"></div>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-10 text-lg md:text-xl max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 shadow-sm bg-[#8B9C32] hover:bg-[#ABBD4F] hover:-translate-y-1 hover:shadow-md text-white"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
