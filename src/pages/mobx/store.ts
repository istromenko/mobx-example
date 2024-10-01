import { makeAutoObservable } from "mobx";

class NameStore {
    name = '';

    constructor() {
        makeAutoObservable(this);
    }

    changeName(name: string) {
        this.name = name;
    }
}

const nameStore = new NameStore();
export default nameStore;