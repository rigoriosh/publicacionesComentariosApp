import { useState } from "react"


export const useForm = (initialState) => {

    
    const [fields, setfields] = useState(initialState)

    const resetFields = () => {
        setfields(initialState);
    }

    const handledInputChange = ({target}) => {
        
        setfields(
            {
                ...fields, [target.name]: target.value
            }
        )
        
    }


    return [fields, handledInputChange, resetFields]
}