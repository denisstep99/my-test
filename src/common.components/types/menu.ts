export interface IMenuItem {
    title: string;
    exact?: boolean;
    link?: string;

    onClick?(): void;
}