import { D1Flex } from '@components/Flex/Flex'
import { HomeContentDatas } from './HomeContentDatas'
import { HomeContentFilter } from './HomeContentFilter'

export const HomeContent = () => {
  return (
    <D1Flex flex={1} my={50} justifyContent="space-between">
      <HomeContentFilter />
      <HomeContentDatas />
    </D1Flex>
  )
}
