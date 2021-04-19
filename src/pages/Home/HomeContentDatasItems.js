import { FilterApi } from '@apis/FilterApi'
import { D1Flex } from '@components/Flex/Flex'
import { D1Icon } from '@components/Icon/Icon'
import { D1Text } from '@components/Text/Text'
import { useTheme } from 'hooks/useTheme'
import { useMemo } from 'react'
import { returnIconAndColorFilter } from './utils'

export const HomeContentDatasItems = ({ item }) => {
  const { icon, color } = useMemo(() => returnIconAndColorFilter(item.status), [item.status])
  const theme = useTheme()

  return (
    <D1Flex
      flex={1}
      justifyContent="space-around"
      alignItems="center"
      mx={150}
      backgroundColor={theme.colors.white}
      my={25}
    >
      <D1Flex flex={1}>
        <D1Text fontWeight="bold">{item.name}</D1Text>
      </D1Flex>
      <D1Flex flex={1}>
        <D1Text fontWeight="light">{item.recipients}</D1Text>
      </D1Flex>
      <D1Flex flex={1}>
        <D1Text>{item.success}</D1Text>
      </D1Flex>
      <D1Flex flex={1} alignItems="center">
        <FilterApi>
          {({ data } = {}) => (
            <>
              <D1Icon color={color}>{icon}</D1Icon>
              <D1Text ml={15}>{data && data.find((d) => d.id === item.status).name}</D1Text>
            </>
          )}
        </FilterApi>
      </D1Flex>
    </D1Flex>
  )
}
