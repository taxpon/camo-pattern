import {ActionKeyType} from "./actionKey";
import Dict = NodeJS.Dict;

type Callback = (key:ActionKeyType) => void;

export class Action {

    private static _instance: Action;
    private static _callbacks: Dict<Set<Callback>> = {};

    private constructor() {}

    static getInstance(): Action {
        if (this._instance === undefined) {
            this._instance = new Action();
        }
        return this._instance;
    }

    static emit(key: ActionKeyType) {
        this._callbacks[key].forEach(callback => {
            callback(key)
        })
    }

    static register(key: ActionKeyType, callback: Callback) {
        if (this._callbacks[key] === undefined) {
            this._callbacks[key] = new Set()
        }
        this._callbacks[key].add(callback)
    }

    static deregister(key: ActionKeyType, callback: Callback) {
        this._callbacks[key].delete(callback)
    }

}

