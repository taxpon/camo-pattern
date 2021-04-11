
type Callback = (state: State) => void;

export class State {

    private static _instance: State;
    private static _callbacks: Set<(state?: State) => void> = new Set();

    private constructor() {}

    static getInstance(): State {
        if (this._instance === undefined) {
            this._instance = new State();
        }
        return  this._instance;
    }

    static getState(key: string, defaultValue: string = undefined) {
        return this.getInstance()[key] || defaultValue
    }

    static setState(key: string, value: any, triggerUpdate: boolean = true) {
        this.getInstance()[key] = value;
        if (!triggerUpdate) {
            return;
        }
        State._callbacks.forEach((callback) => {
            callback(this)
        })
    }

    static registerCallback(callback: Callback) {
        this._callbacks.add(callback)
    }

    static deregisterCallback(callback: Callback) {
        this._callbacks.delete(callback)
    }

}
