import { ICostsItemProps } from "../../../types";

export const CostsItem = ({ cost, index }: ICostsItemProps) => {
    return (
        <li className="cost-item list-group-item d-flex justify-content-between align-items-center" 
        id = {cost.categoryId as string}
         >
            <div className="cost-item-left"></div>
                <span>{index} Магазин</span>
                <span>"{cost.name}" Магазин</span>
                <span className="cost-date">{cost.date as string}</span>
            <div className='cost-item-right d-flex align-items-center'>
            <span className="cost-date">Cумма: {cost.balance}</span>
            <button className="btn btn-primary btn-edit">Изменить</button>
            <button className="btn btn-danger btn-delete">Удалить</button>
            </div>
        </li>
    )
}

