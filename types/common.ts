export interface NavItem {
    id: string;
    name: string;
}

export interface ProductNavigatorProps {
    prevItem?: NavItem | null;
    nextItem?: NavItem | null;
    onPrev?: () => void;
    onNext?: () => void;
}