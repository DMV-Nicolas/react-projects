import { createContext, useState } from "react";
import { Filters, FiltersContextType } from "../types";

export const FiltersContext = createContext<FiltersContextType | null>(null)

export function FiltersProvider({ children }: { children?: React.ReactNode }) {
    const [filters, setFilters] = useState<Filters>({ category: "all", minPrice: 0 })
    const contextValue = { filters, setFilters }

    return (
        <FiltersContext.Provider value={contextValue}>
            {children}
        </FiltersContext.Provider>
    )
}