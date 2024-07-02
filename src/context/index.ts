import { createDomain } from 'effector';
import { ICost } from '../types/index';

const costs = createDomain();
export const setCosts = costs.createEvent<ICost[]>();
export const createCost = costs.createEvent<ICost>();
export const updatedCost = costs.createEvent<ICost>();
export const removeCost = costs.createEvent<string | number>();
export const setTotalPrice = costs.createEvent<number>();


export const $costs = costs.createStore<ICost[]>([])
.on(createCost, (state, cost) => [...state, cost])
.on(setCosts, (_, costs) => costs)
.on(updatedCost, (state, updatedCost) => {
    // Обновление данных в сторе
    const updatedIndex = state.findIndex(cost => cost.categoryId === updatedCost.categoryId);
    if (updatedIndex !== -1) {
      const newState = [...state];
      newState[updatedIndex] = updatedCost;
      return newState;
    }
    return state;
  })
  .on(removeCost, (state, costId) => {
    // Удаление данных из стора
    return state.filter(cost => cost.categoryId !== costId);
  })
export const $totalPrice = costs.createStore<number>(0)
    .on(setTotalPrice, (_, value) => value);
