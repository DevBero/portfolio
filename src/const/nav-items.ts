export type NavItem = {
    label: string;
    href: string;
    aria: string;
    color: string;
    action?: "underline" | "highlight";
};

export const NAV_ITEMS: NavItem[] = [
    {
        label: "About me",
        href: "#about",
        aria: "About me",
        color: "#9241d4",
        action: "underline",
    },
    {
        label: "What I do",
        href: "#what-i-do",
        aria: "What I do",
        color: "#9241d4",
        action: "underline",
    },
    {
        label: "Projects",
        href: "#projects",
        aria: "Projects",
        color: "#9241d4",
        action: "underline",
    },
    {
        label: "Playground",
        href: "#playground",
        aria: "Playground",
        color: "#9241d4",
        action: "underline",
    },
];