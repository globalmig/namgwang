import CategoryBanner from "@/components/CategoryBanner";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <CategoryBanner />
            {children}
        </>
    );
}
