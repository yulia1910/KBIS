export interface TodoItem {
    id: number;
    dueDate: Date;
    done: boolean;
    text: string;
}

export interface TodoItemsForView {
    id: number;
    dueDate: string;
    done: boolean;
    text: string;
    isClicked: boolean;
}

