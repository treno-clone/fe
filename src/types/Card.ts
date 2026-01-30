export interface CardType {
    title: string,
    background_color: string,
    description?: string,
    dueDate?: Date,
    list: SubtaskType[],
    labels: LabelType[],
    files: FileType[],
    isArchived: boolean
}

export interface SubtaskType {
    title: string,
    isCompleted: boolean,
    dueDate?: Date,
    assignee?: AssigneeType[]
}

export interface AssigneeType {
    email: string,
    username: string,
    board_role: string
}

export interface LabelType {
    title: string,
    color: string
}

export interface FileType {

}
