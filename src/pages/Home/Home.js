import React, { useState } from 'react'

import { D1Flex } from '@components/Flex/Flex'

import { HomeHeader } from './HomeHeader'
import { HomeSideBar } from './HomeSideBar'
import { HomeContent } from './HomeContent'
import { HomeContext } from './HomeContext'
import { useTheme } from 'hooks/useTheme'

export const Home = () => {
  const [filterSelected, setFiltersSelected] = useState([0])

  const theme = useTheme()

  return (
    <HomeContext.Provider value={{ filterSelected, setFiltersSelected }}>
      <D1Flex flex={1}>
        <HomeSideBar />
        <D1Flex flex={1} flexDirection="column" px={100} py={20} ml={70} backgroundColor={theme.colors.lightGrey}>
          <HomeHeader />
          <HomeContent />
        </D1Flex>
      </D1Flex>
    </HomeContext.Provider>
  )
}
