import {add, FILTER_VALUES, getItems, remove, setFilter, update} from "./store";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputString");
    const form = document.getElementById("form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        add(input.value);
        input.value = "";
        render();
    });

    function render() {
        const list = document.getElementById("list");
        let result = "";

        for(let item of getItems()) {
            result += `<li>
                <div class="li-wrapper">
                    <input id="${item.id}-checkbox" type="checkbox" ${item.done ? "checked" : ""}>
                    <label for="${item.id}-checkbox" class="${item.done ? 'checked' : '' }">${item.name}</label>
                </div>
                <button id="${item.id}">🗑️</button>
            </li>`;
        }

        list.innerHTML = result;

        for(let item of getItems()) {
            const button = document.getElementById(item.id);
            button.addEventListener("click", () => {
                remove(item.id);
                render();
            })
            const checkbox = document.getElementById(`${item.id}-checkbox`);
            checkbox.addEventListener("click", () => {
                update(item.id);
                render();
            })
        }
    }
    render();

    const all = document.getElementById("all");
    all.addEventListener("click", e => {
        e.preventDefault();
        for(const link of document.querySelectorAll("#filter a")) {
            link.classList.remove("selected");
        }
        all.classList.add("selected");
        setFilter(FILTER_VALUES.ALL);
        render();
    });

    const done = document.getElementById("done");
    done.addEventListener("click", e => {
        e.preventDefault();
        for(const link of document.querySelectorAll("#filter a")) {
            link.classList.remove("selected");
        }
        done.classList.add("selected");
        setFilter(FILTER_VALUES.DONE);
        render();
    });

    const notDone = document.getElementById("not-done");
    notDone.addEventListener("click", e => {
        e.preventDefault();
        for(const link of document.querySelectorAll("#filter a")) {
            link.classList.remove("selected");
        }
        notDone.classList.add("selected");
        setFilter(FILTER_VALUES.NOT_DONE);
        render();
    });

});