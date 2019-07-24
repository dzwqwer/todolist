export function addTodoList(t, value){
    return {
        type: t,
        value
    }
}

export function addDoneList(t, check, index, value){
    return {
        type: t,
        check,
        index,
        value
    }
}

export function deleteList(t, check, index){
    return {
        type: t,
        check,
        index
    }
}