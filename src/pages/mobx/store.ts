import { action, makeAutoObservable, observable } from "mobx";

class NameStore {
    @observable name: string = '';
    @action setName(newName: string) {
        this.name = newName;
    }
    constructor() {
        makeAutoObservable(this);
    }
}

const  nameStore = new NameStore();
export default nameStore;