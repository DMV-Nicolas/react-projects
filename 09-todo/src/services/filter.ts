import { TODO_FILTERS } from '../constants'
import { type FilterValue } from '../types'

export const getFilterURLParam = (): FilterValue => {
  const rawParams = window.location.search
  const params = new URLSearchParams(rawParams)
  const filter = params.get('filter')

  const { ALL, ACTIVE, COMPLETED } = TODO_FILTERS
  if (filter === ALL || filter === ACTIVE || filter === COMPLETED) return filter

  return TODO_FILTERS.ALL
}
