import useLocalStorage from "./useLocalStorage"

const useToggle = (key, initValue) => {
   const [value, setValue] = useLocalStorage(key, initValue)

   const toggle = (value) => {
        
   }
}

export default useToggle
