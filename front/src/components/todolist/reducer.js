export default (state, action) => {
    
    switch (action.type) {
        case 'update-item':
            const todoListUpItem = state.todoList;
            const listUpdateEdit = todoListUpItem.list.map((item) => {
                if (item.id_todoList === action.item.id_todoList) {
                    return action.item;
                }
                return item;
            });
            todoListUpItem.list = listUpdateEdit;
            todoListUpItem.item = {};
            return { ...state, todoList: todoListUpItem }
        case 'delete-item':
            const todoListUpDelete = state.todoList;
            const listUpdate = todoListUpDelete.list.filter((item) => {
                return item.id_todoList !== action.id_todoList;
            });
            todoListUpDelete.list = listUpdate;
            return { ...state, todoList: todoListUpDelete }
        case 'update-list':
            const todoListUpList = state.todoList;
            todoListUpList.list = action.list;
            return { ...state, todoList: todoListUpList }
        case 'add-item':
            const todoListUp = state.todoList.list;
            todoListUp.push(action.item);
            return { ...state, todoList: { list: todoListUp, item: {} } }
        default:
            return state;
    }
}