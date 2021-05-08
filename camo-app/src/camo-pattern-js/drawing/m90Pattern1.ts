import {BaseLogic} from "./baseLogic";
import {Polygon} from "../geometry/polygon";
import {Point} from "../geometry/point";

export class M90Pattern1 extends BaseLogic {
    startAnimate() {
    }
    stopAnimate() {
    }
    handleMouseMove(p: Point) {
    }

    public draw(width: number, height: number, colIter: IterableIterator<string>) {
        // let colIter = Color.colorGeneratorFromPalette(State.getState("palette", "green"));
        const unit = 500;
        let xNum = Math.ceil(width / unit);
        let yNum = Math.ceil(height / unit);

        for (let i = 0; i < xNum; i++) {
            for (let j = 0; j < yNum; j++) {
                let x = unit * i;
                let y = unit * j;
                let curr = colIter.next()
                let num = 4;
                let rnd = Math.random();
                if (rnd > 0.66) {
                    num = 5
                } else if (rnd > 0.33) {
                    num = 6
                }
                let rnd2 = Math.random();
                if (rnd2 > 0.8) {
                    continue
                }
                let p2 = new Polygon(
                    Point.randomPoints2Of(x, y, unit, num)
                    , curr.value)
                this.drawPolygon(p2);
            }
        }

        const unit2 = 200;
        xNum = Math.ceil(width / unit2);
        yNum = Math.ceil(height / unit2);

        for (let i = 0; i < xNum; i++) {
            for (let j = 0; j < yNum; j++) {
                let x = unit2 * i;
                let y = unit2 * j;
                let curr = colIter.next()
                let num = 4;
                let rnd = Math.random();
                if (rnd > 0.66) {
                    num = 5
                } else if (rnd > 0.33) {
                    num = 6
                }
                let rnd2 = Math.random();
                if (rnd2 > 0.8) {
                    continue
                }
                let p2 = new Polygon(
                    Point.randomPoints2Of(x, y, unit2, num)
                    , curr.value)
                this.drawPolygon(p2);
            }
        }
    }
}
