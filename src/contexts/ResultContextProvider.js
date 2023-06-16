import {createContext,useContext,useState} from 'react';

const ResultContext= createContext();

const base = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({children})=>{
    const [results, setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('Ashir Afridi');

    const getResults = async (type)=>{
        setIsLoading(true);
        const response = await fetch(`${base}${type}`,{
            method:'GET',
            headers: {
                'X-RapidAPI-Key': 'c5e85626c8msh66511e840519b49p1f0c14jsn751a010fc6c1',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        })

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }

    return  (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = ()=> useContext(ResultContext);