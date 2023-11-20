import { useEffect, useState } from "react"

const getLocalValue = (key, initValue) => {
    //SSR Next Js (server side error)
    if (typeof window === 'undefined') return initValue

    // if a value is already stored

    const locaValue = JSON.parse(localStorage.getItem(key))

    if (locaValue) return locaValue

    // return result of a function

    if (initValue instanceof Function) return initValue()

    return initValue
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

        return [value, setValue]
}

export default useLocalStorage
