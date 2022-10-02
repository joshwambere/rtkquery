export interface Todo{
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export interface TodosResponse{
    todos: Todo[];
}
