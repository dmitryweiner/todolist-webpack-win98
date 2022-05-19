import {nanoid} from "nanoid";

let items = [
    {
        id: nanoid(),
        name: "Покормить кота",
        done: false
    },
    {
        id: nanoid(),
        name: "Полить картошку",
        done: true
    }
];

export const FILTER_VALUES = {
    ALL: "ALL",
    DONE: "DONE",
    NOT_DONE: "NOT DONE",
}

let filter = FILTER_VALUES.ALL;

export function getItems() {
    if (filter === FILTER_VALUES.DONE) {
        return items.filter(item => item.done);
    }
    if (filter === FILTER_VALUES.NOT_DONE) {
        return items.filter(item => !item.done);
    }
    return items;
}

export function add(name) {
    items.push({
        id: nanoid(),
        name,
        done: false
    });
}

export function remove(id) {
    items = items.filter(item => item.id !== id);
}

export function update(id) {
    items = items.map(item => {
        if(item.id === id) {
            return {...item, done: !item.done};
        }
        return item;
    });
}

export function setFilter(newFilterValue) {
    filter = newFilterValue;
}