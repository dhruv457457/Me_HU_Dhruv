import React, {createContext ,useContext,useEffect,useState} from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider =({children})=>{
    const [theme,setTheme] =useState(
        ()=>localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
        document.documentElement.classList.add(theme);
    }, [theme]);
    
    
    const toggleTheme =()=>{
        console.log('toggle theme');
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}