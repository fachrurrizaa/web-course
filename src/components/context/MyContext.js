'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react"

const Context = createContext(null)

const Provider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
          const { data } = await axios(`https://zullkit-backend.belajarkoding.com/api/categories`)

          setCategories(data.data.data)
        }
  
        getCategories().then(r => r)
  
    }, [])

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('/api/post').then(response => {
        setPosts(response.data)
      })
      setIsUpdated(false)
    }, [isUpdated]);

    const [isSubscribe, setIsSubscribe] = useState(false);

    return (
      <SessionProvider>
        <Context.Provider value={{posts, categories, isSubscribe, setIsSubscribe, setIsUpdated, setPosts}}>
            {children}
        </Context.Provider>
      </SessionProvider>
    )
}

export {Context, Provider}