import React from 'react'

import { D1Flex } from '@components/Flex/Flex'
import { D1Icon } from '@components/Icon/Icon'

import { D1SideBar } from '@components/SideBar/SideBar'

export const HomeSideBar = () => {
  return (
    <D1SideBar>
      <D1Flex flexDirection="column" flex={1} justifyContent="space-around">
        <D1Icon>chart-pie</D1Icon>
        <D1Icon>rocket</D1Icon>
        <D1Icon>user-friends</D1Icon>
        <D1Icon>ccm-cloud</D1Icon>
        <D1Icon>external-link-square-alt</D1Icon>
      </D1Flex>
      <D1Flex flexDirection="column" flex={1} justifyContent="space-around">
        <D1Icon>gem-solid</D1Icon>
        <D1Icon>tools</D1Icon>
        <D1Icon>exchange-alt</D1Icon>
        <D1Icon>sign-out-alt</D1Icon>
      </D1Flex>
    </D1SideBar>
  )
}
