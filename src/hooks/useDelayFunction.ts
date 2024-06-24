import { useState } from "react";

export const useDelayFunction = (ms: number = 900) =>{
    const [timeoutId, setTimeoutId] = useState<any>()
    const delayFunction = (callback: ()=> void) =>{
        clearTimeout(timeoutId)

        const id = setTimeout(callback, ms);
        setTimeoutId(id)
    }
    return {delayFunction}
}