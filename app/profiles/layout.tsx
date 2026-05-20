import { defaultMetadata } from "@/seo.config";

export const metadata = {
    ...defaultMetadata,
    title: {
        default: "Insight Edge Global | Profiles",
        template: "%s | Insight Edge Global",
    },
};

export default function ProfilesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}