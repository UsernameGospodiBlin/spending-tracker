import {createEffect} from "effector" ;
import {ICreateCategoryCost, ICreateCost, IRefreshToken} from "../types";
import {IGetCost} from "../types";
import api from './axiosClient'
import { removeUser } from "../utils/auth";

/*export const createCostFxCategory = createEffect( ({ url, category, token }: ICreateCategoryCost) => {
    try {
        //парсер
        if (typeof token === "string") {
            token = JSON.parse(token).data
        }

        console.log(`${token}`);
        let response = api.post(url, { ...category },
            { headers:
                    { 'Authorization': `${token}` ,
                        'Content-Type': 'application/json;charset=utf-8'} });
        return response;
    } catch (error) {
        console.log(error);
    }
});*/

export const createCostFx = createEffect(async ({ url, budget, token }: ICreateCost) => {
    try {
        //парсер
        if (typeof token === "string") {
            token = JSON.parse(token).data
        }

        console.log(`${token}`);

        // дописал чтоб наверняка запрос
        const { data } = await api.post(url, { ...budget },
            { headers:
                    { 'Authorization': `${token}` ,
                        'Content-Type': 'application/json;charset=utf-8'} });
        return data;
    } catch (error) {
      console.log(error);
    }
});
export const getCostFx = createEffect(async ({ url, token }: IGetCost) => {
    try {
        const { data } = await api.get(url, { headers: { 'Authorization': `${token}`, 'Content-Type': 'application/json;charset=utf-8' } });

        return data;
    } catch (error) {
    console.log(error)
    }
});
