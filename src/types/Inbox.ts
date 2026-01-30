import type { FileType, LabelType, SubtaskType } from "./Card";

export interface InboxType {
  title: string,
    description?: string,
    dueDate?: Date,
    list: SubtaskType[],
    labels: LabelType[],
    files: FileType[],
    isArchived: boolean
}
