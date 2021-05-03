
export abstract class Component {
    private _state: Object = {}
    protected templateSrc: string
    protected template: HTMLTemplateElement

    public getState(key): any {
        return this._state[key]
    }

    public setState(key, value, render = true) {
        this._state[key] = value
        if (render) {
            this.render()
        }
    }
    public abstract render(): Node
}

