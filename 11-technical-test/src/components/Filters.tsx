import { type SortedFilter, type FiltersType } from '../types'
import './Filters.css'

interface Props {
  filters: FiltersType
  toggleRowsColoredFilter: () => void
  toggleSortedBy: (sortedFilter: SortedFilter) => void
  resetUsersState: () => void
  setCountryFilter: (country: string) => void
}

export function Filters({
  filters,
  toggleRowsColoredFilter,
  toggleSortedBy,
  resetUsersState,
  setCountryFilter
}: Props) {
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return
    setCountryFilter(e.target.value)
  }

  return (
    <div className="filters">
      <ul className="filtersList">
        <li>
          <button onClick={toggleRowsColoredFilter}>Color rows</button>
        </li>
        <li>
          <button onClick={() => { toggleSortedBy('country') }}>Sort by country</button>
        </li>
        <li>
          <button onClick={resetUsersState}>Reset state</button>
        </li>
        <li>
          <input type="text" placeholder='Filter by country' onChange={handleCountryChange} />
        </li>
      </ul>
    </div>
  )
}
