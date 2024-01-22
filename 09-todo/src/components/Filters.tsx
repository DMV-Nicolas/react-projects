import { useTodos } from '../hooks/useTodos'
import { FILTERS_BUTTONS } from '../constants'
import { type FilterValue } from '../types'

export const Filters = (): JSX.Element => {
  const { filter, changeFilter } = useTodos()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, key: FilterValue): void => {
    e.preventDefault()
    if (e.target instanceof HTMLAnchorElement) {
      window.history.pushState({}, '', e.target.href)
    }
    changeFilter(key)
  }

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filter
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href}
                className={className}
                onClick={(e) => { handleClick(e, key as FilterValue) }}>
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
