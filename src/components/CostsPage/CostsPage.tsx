import { useEffect, useMemo, useRef, useState } from "react"
import { Header } from "./Header/Header"
import { Spinner } from "../Spinner/Spinner";
import { getAuthDataFromLS } from "../../utils/auth";

import { $costs, setCosts } from "../../context";
import { getCostFx } from "../../api/costsClient";
import { useStore } from "effector-react";
import PieChart from "./CostChart/CostChart"
import { CostsList } from "./CostsList/CostsList";
export const CostsPage = () => {
    const [spinner,setSpinner] = useState(false);
    const store = useStore($costs);
   
    useEffect(()=> {
        
            handleGetCosts();
            console.log(store)
       
      
    },[])
    const handleGetCosts = async() =>{
        setSpinner(true);
        const token = localStorage.getItem('auth');
        const costs = await getCostFx({
            url: '/budgets',
            token: token
        });
        
        setSpinner(false);
        setCosts(costs);
        console.log(costs)
    }
    return (
        <div className="container">
            <h2 style = {{textAlign:'center', marginBottom:30}}>Учет моих расходов</h2>
            <Header costs={[]} />
           <div style={{position:'relative'}}>{spinner && <Spinner top = {0} left = {0}/>}</div> 
          <CostsList costs = {store}/>
          <PieChart/>
        </div>
    )
}