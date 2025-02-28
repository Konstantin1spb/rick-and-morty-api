import { useCallback, useRef } from "react";

export const useUpdatePageNumber = (isLoading, shouldLoadData, setPageNumber) => {
    const observer = useRef()
        
    const lastNodeRef = useCallback((node) => {
        if(isLoading) return;

        if(observer.current) {
            observer.current.disconnect()
        }
        
        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && shouldLoadData) {
                setPageNumber(prev => prev + 1)
            }
        })

        if(node) {
            observer.current?.observe(node)
        }
    }, [isLoading, shouldLoadData, setPageNumber])

    return lastNodeRef
}