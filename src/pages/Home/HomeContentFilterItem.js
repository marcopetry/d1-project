import { D1Flex } from '@components/Flex/Flex'
import { D1Icon } from '@components/Icon/Icon'
import { D1Text } from '@components/Text/Text'
import { useCallback, useContext, useMemo } from 'react'
import { HomeContext } from './HomeContext'
import { returnIconAndColorFilter } from './utils'

export const HomeContentFilterItem = ({ filter }) => {
  const { filterSelected, setFiltersSelected } = useContext(HomeContext)

  const { color, icon } = useMemo(() => returnIconAndColorFilter(filter.id), [filter.id])

  const handleFilterState = useCallback(
    (filterId) => {
      // selecionou todos, tira todos os outros filtros
      if (filterId === 0 && !filterSelected.includes(0)) {
        setFiltersSelected([0])
        return
      }

      setFiltersSelected((oldStateFiltersSelecteds) => {
        return oldStateFiltersSelecteds.includes(filterId)
          ? oldStateFiltersSelecteds.filter((oldFilter) => oldFilter !== filterId && oldFilter !== 0)
          : [...oldStateFiltersSelecteds, filterId].filter((oldFilter) => oldFilter !== 0)
      })
    },
    [setFiltersSelected, filterSelected]
  )

  const isSelected = useMemo(() => filterSelected.includes(filter.id), [filterSelected, filter.id])

  return (
    <D1Flex alignItems="center" justifyContent="space-between" my={10} onClick={() => handleFilterState(filter.id)}>
      <D1Flex alignItems="center">
        <D1Icon color={color}>{icon}</D1Icon>
        <D1Text ml={15} color={isSelected ? '#117eff' : null} fontWeight={isSelected ? 'bold' : null}>
          {filter.name}
        </D1Text>
      </D1Flex>
      <D1Flex
        justifyContent="center"
        alignItems="center"
        borderRadius={1000}
        width={20}
        height={20}
        border={`1px solid #${isSelected ? '117eff' : 'EBEEF6'}`}
        backgroundColor={isSelected ? '#117eff' : '#9196AB'}
      >
        <D1Text color={isSelected ? '#FFF' : null}>{filter.quantity}</D1Text>
      </D1Flex>
    </D1Flex>
  )
}
