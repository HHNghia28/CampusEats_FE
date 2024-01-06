interface PagingDTO<T> {
    total: number;
    pageSize: number;
    currentItem: number;
    data: T[];
}
