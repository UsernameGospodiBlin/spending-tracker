import { MutableRefObject } from "react";
import { handleAlertMessage } from "./auth";

export const validationInputs = (
    nameInput: MutableRefObject<HTMLInputElement>,
    balanceInput: MutableRefObject<HTMLInputElement>,
    dateInput: MutableRefObject<HTMLInputElement>,
    categoryIdInput: MutableRefObject<HTMLInputElement>
) => {
    const nameInputValue = nameInput.current.value;
    const balanceInputValue = balanceInput.current.value;
    const dateInputValue = dateInput.current.value;
    const categoryIdInputValue = categoryIdInput.current.value;
    

    const inputs = [
        nameInput.current,
        balanceInput.current,
        dateInput.current,
        categoryIdInput.current
    ]
    const addDangerBorderByCondition = () => 
    inputs.forEach(input => input.value.length
        ? input.classList.remove('border-danger')
        : input.classList.add('border-danger'));
       
 if (!nameInputValue || !balanceInputValue || !dateInputValue || !categoryIdInputValue) {
      handleAlertMessage({ alertText: 'Заполните все поля!', alertStatus: 'warning' });
       addDangerBorderByCondition();
        return false;
        }
        if (isNaN(+balanceInputValue)) {
            handleAlertMessage({ alertText: 'Введите число!', alertStatus: 'warning' });
            addDangerBorderByCondition();
    
            balanceInput.current.classList.add('border-danger');
            return false;
        }
    
        nameInput.current.value = '';
        balanceInput.current.value = '';
        dateInput.current.value = '';
        categoryIdInput.current.value ='';
    
        inputs.forEach(input => input.classList.remove('border-danger'));
    

        return true;
    
}