import { createContext, useState } from "react";
import { Filters } from "../types";

const INITIAL_FILTERS: Filters = { category: "all", minPrice: 250 }
const INITIAL_FILTERS_CONTEXT: {
    filters: Filters,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
} = {
    filters: INITIAL_FILTERS,
    setFilters: () => { },
}

export const FiltersContext = createContext(INITIAL_FILTERS_CONTEXT)

export function FiltersProvider({ children }: { children?: React.ReactNode }) {
    const [filters, setFilters] = useState(INITIAL_FILTERS)
    const contextValue = { filters, setFilters }

    return (
        <FiltersContext.Provider value={contextValue}>
            {children}
        </FiltersContext.Provider>
    )
}