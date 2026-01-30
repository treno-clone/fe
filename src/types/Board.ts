import type { ListType} from "./List";

export interface Board {
    title: string,
    background_image: string,
    visibility: ["private", "workspace", "public"],
    list: ListType[],
    starred: boolean,
    isArchived: boolean
}