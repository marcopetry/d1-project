import React from 'react'

import { D1Flex } from '@components/Flex/Flex'

import { HomeHeader } from './HomeHeader'
import { HomeSideBar } from './HomeSideBar'

export const Home = () => {
  return (
    <>
      <D1Flex flex={1}>
        <HomeSideBar />
        <HomeHeader />
      </D1Flex>
    </>
  )
}
