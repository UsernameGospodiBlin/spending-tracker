import { useTheme } from "../../hooks/index"
export const Header = () => {
    const {switchTheme, theme}= useTheme();
    return(
        <header className={`navbar navbar-dark bg-${theme === 'dark' ? 'dark':'primary'}`}>
            <div className="container"></div>
            <h1 style={{color:'white'}}>Доходы и расходы</h1>
            <button
            onClick={switchTheme}
            className={`btn btn-${theme === 'dark' ? 'light' : 'dark'}`}
            >
                {theme === 'dark' ? 'Светлая' : 'Тёмная'} 
            </button>
        </header>
    )
}