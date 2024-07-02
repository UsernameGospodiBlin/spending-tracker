export interface IAlert {
    alertText: string;
    alertStatus: string;
}

export interface IAlertProps {
    props: IAlert;
}

export interface ISpinnerProps {
    top: number;
    left: number;
}

export interface ICostsHeaderProps {
    costs: ICost[];
}

export interface ICost {
    name: string;
    balance: number;
    date: Date | string;
    categoryId: number | string;
}

export interface IBaseEffectArgs {
    url: string;
    token: string;
}

export interface ICreateCost  {
    url:string;
    budget: ICost;
    token: string | null;
}
export interface IGetCost  {
    url:string;

    token: string | null;
}
export interface IRefreshToken extends IBaseEffectArgs {
    username: string;
}

export interface IDeleteCost extends IBaseEffectArgs {
    id: string | number;
}

export interface IUpdateCost extends IBaseEffectArgs {
    cost: ICost;
    id: string | number;
}

export interface IHandleAxiosErrorPayload {
    type: string;
    createCost?: Partial<ICreateCost>;
    getCosts?: Partial<IBaseEffectArgs>;
    deleteCost?: Partial<IDeleteCost>;
    updateCost?: Partial<IUpdateCost>;
}

export interface ICostsItemProps {
    cost: ICost;
    index: number;
}
export interface ICreateCategoryCost{
    url:string;
    category:string;
    token: string | null;
}