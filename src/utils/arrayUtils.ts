import { setTotalPrice } from "../context";
import { ICost } from "../types";

export const countTotalPrice = (costs:ICost[]) => {
    if (costs === undefined) return;
    setTotalPrice(
        costs.reduce((defaultCount, item) => defaultCount + item.balance, 0)
    );
}