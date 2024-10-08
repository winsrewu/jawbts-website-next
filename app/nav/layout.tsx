import Navbar from "@/components/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <header className="bg-[#222222] w-screen h-full">
            <Navbar />
            <div className="pt-20">{children}</div>
        </header>
    );
}