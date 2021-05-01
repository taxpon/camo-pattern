import {StateKeyType} from "./stateKey";

type Callback = (state: State, key:StateKeyType, value: any) => void;

export class State {

    private static _instance: State;
    private static _callbacks: Set<Callback> = new Set();

    private constructor() {}

    static getInstance(): State {
        if (this._instance === undefined) {
            this._instance = new State();
        }
        return  this._instance;
    }

    static getState(key: StateKeyType, defaultValue: string = undefined) {
        const current = this.getInstance()[key]
        if (current === undefined || current === null) {
            return defaultValue
        } else {
            return current
        }
    }

    static setState(key: StateKeyType, value: any, triggerUpdate: boolean = true): any {
        this.getInstance()[key] = value;
        if (!triggerUpdate) {
            return value
        }
        State._callbacks.forEach((callback) => {
            callback(this, key, value)
        })
        return value
    }

    static flipState(key: StateKeyType): boolean {
        const current = State.getState(key)
        if (typeof current !== "boolean") {
            console.error("Failed to flip state due to invalid state type", current)
        } else {
            return State.setState(key, !current)
        }
    }

    static registerCallback(callback: Callback) {
        this._callbacks.add(callback)
    }

    static deregisterCallback(callback: Callback) {
        this._callbacks.delete(callback)
    }

}
