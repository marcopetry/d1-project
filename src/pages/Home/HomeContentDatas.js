import { D1Flex } from '@components/Flex/Flex'
import { D1Text } from '@components/Text/Text'

import { useContext } from 'react'
import ScrollBar from 'react-perfect-scrollbar'
import { HomeContentDatasAll } from './HomeContentDatasAll'
import { HomeContentDatasFiltered } from './HomeContentDatasFiltered'

import { HomeContext } from './HomeContext'

export const HomeContentDatas = () => {
  const { filterSelected } = useContext(HomeContext)

  return (
    <D1Flex flexDirection="column" width={1300} mt={60}>
      <ScrollBar>
        <D1Flex flex={1} justifyContent="space-around" mx={150}>
          <D1Flex flex={1}>
            <D1Text color="#9196AB">Nome</D1Text>
          </D1Flex>
          <D1Flex flex={1}>
            <D1Text color="#9196AB">Destinatários</D1Text>
          </D1Flex>
          <D1Flex flex={1}>
            <D1Text color="#9196AB">Sucesso</D1Text>
          </D1Flex>
          <D1Flex flex={1}>
            <D1Text color="#9196AB">Status</D1Text>
          </D1Flex>
        </D1Flex>

        {filterSelected.length && !filterSelected.includes(0) ? (
          filterSelected.map((filter) => <HomeContentDatasFiltered filterId={filter} />)
        ) : (
          <HomeContentDatasAll />
        )}
      </ScrollBar>
    </D1Flex>
  )
}
