export class IndexGenerator {

    private static _index: number

    public static incrementAndGet(): number {
        if (this._index === undefined) {
            this._index = 0
        }
        return this._index++
    }

    public static reset() {
        this._index = 0
    }
}
