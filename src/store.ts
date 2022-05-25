import { nanoid } from "nanoid";
import { TodoArray } from "./types";

let items: TodoArray = [
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

export enum FILTER_VALUES {
    ALL= "ALL",
    DONE = "DONE",
    NOT_DONE = "NOT DONE",
}

let filter = FILTER_VALUES.ALL;

export function getItems(): TodoArray {
    if (filter === FILTER_VALUES.DONE) {
        return items.filter(item => item.done);
    }
    if (filter === FILTER_VALUES.NOT_DONE) {
        return items.filter(item => !item.done);
    }
    return items;
}

export function add(name: string) {
    if (name.trim() === "") {
        throw new Error("Should pass not empty string!");
    }

    items.push({
        id: nanoid(),
        name,
        done: false
    });
}

export function remove(id: string) {
    items = items.filter(item => item.id !== id);
}

export function update(id: string) {
    items = items.map(item => {
        if(item.id === id) {
            return {...item, done: !item.done};
        }
        return item;
    });
}

export function setFilter(newFilterValue: FILTER_VALUES) {
    filter = newFilterValue;
}