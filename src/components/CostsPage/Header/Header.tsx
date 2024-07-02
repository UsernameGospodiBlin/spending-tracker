import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Spinner } from "../../Spinner/Spinner";
import { ICostsHeaderProps } from "../../../types";
import { countTotalPrice } from "../../../utils/arrayUtils";
import { $totalPrice, createCost } from "../../../context";
import { useStore } from "effector-react";
import './styles.css'
import { validationInputs } from "../../../utils/validation";
import { getAuthDataFromLS, handleAlertMessage } from "../../../utils/auth";
import { createCostFx } from "../../../api/costsClient";

export const Header = ({costs} : ICostsHeaderProps) => {
    const [spinner, setSpinner] = useState(false);
    const totalPrice = useStore($totalPrice)
    const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
    const balanceRef = useRef() as MutableRefObject<HTMLInputElement>;
    const dateRef = useRef() as MutableRefObject<HTMLInputElement>;
    const categoryIdRef = useRef() as MutableRefObject<HTMLInputElement>
    useEffect(() => {
        countTotalPrice(costs);
    }, [costs])
    const formSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setSpinner(true);
    const nameInputValue = nameRef.current.value;
    const balanceInputValue = balanceRef.current.value;
    const dateInputValue = dateRef.current.value;
    const categoryIdInputValue = categoryIdRef.current.value;
        if (!validationInputs(
            nameRef,
            balanceRef,
            dateRef,
            categoryIdRef
        )){
            setSpinner(false);
            return;
        }
        const token = localStorage.getItem('auth');
       
        const cost = await createCostFx({
            url:'/budgets',
            budget: {
                name:nameInputValue,
                balance: parseInt(balanceInputValue),
                date: dateInputValue,
                categoryId: categoryIdInputValue,

            },
            token:token
          
        });
        if(!cost){
            setSpinner(false);
            return;
        }
        setSpinner(false);
        createCost(cost);
        handleAlertMessage({alertText:"Успешно создано",alertStatus:"success" });

    }
    return(
        <div className="costs-header">
            <form className="d-flex mb-3" onSubmit={formSubmit}>
                <div className="form-item">
                    <span className="mb-3">Куда было потрачено:</span>
                    <input ref={nameRef} type = "text" className="form-control"/>
                </div>
                <div className="form-item">
                    <span className="mb-3">Сколько было потрачено:</span>
                    <input ref = {balanceRef} type = "text" className="form-control"/>
                </div>
                <div className="form-item">
                    <span className="mb-3">Когда было потрачено:</span>
                    <input ref = {dateRef} type = "date" className="form-control"/>
                </div>
                <div className="form-item">
                    <span className="mb-3">напишите категорию</span>
                    <input ref = {categoryIdRef} type = "text" className="form-control"/>
                </div>
                <button className="btn btn-primary add-btn">
                    {spinner ? <Spinner top={5} left={20}/>:'Добавить'}
                </button>
            </form>
            <div style={{textAlign: 'end', marginBottom:10}}>
                Итого:
                <span> {isNaN(parseInt(String(totalPrice))) ? 0 : parseInt(String(totalPrice)) }</span>
                р.
            </div>
          
        </div>
        
    )
}