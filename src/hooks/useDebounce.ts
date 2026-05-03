import { useEffect, useState } from "react";

export function useDebounce(initialState: string, delay: number){
    const [debouncedState, setDebouncedState] = useState(initialState)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedState(initialState), delay)

        return () => {
            clearTimeout(handler)
        }
    }, [initialState, delay])

    return debouncedState
}