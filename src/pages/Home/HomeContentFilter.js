import { D1Flex } from '@components/Flex/Flex'
import { D1Text } from '@components/Text/Text'
import { FilterApi } from 'apis/FilterApi'

import { HomeContentFilterItem } from './HomeContentFilterItem'

export const HomeContentFilter = () => {
  return <FilterApi>{HomeContentFilterComp}</FilterApi>
}

export const HomeContentFilterComp = ({ data: filters }) => {
  return (
    <D1Flex flexDirection="column" width={250}>
      <D1Text fontWeight="bold" my={20}>
        Jornada
      </D1Text>
      {filters && filters.map((filter) => <HomeContentFilterItem key={filter} filter={filter} />)}
    </D1Flex>
  )
}
