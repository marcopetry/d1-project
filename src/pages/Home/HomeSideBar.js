import React from 'react'

import { D1Flex } from '@components/Flex/Flex'
import { D1Icon } from '@components/Icon/Icon'

import { D1SideBar } from '@components/SideBar/SideBar'
import { D1Tooltip } from '@components/Tooltip/Tooltip'
import { D1Hr } from '@components/Hr/Hr'

export const HomeSideBar = () => {
  return (
    <D1SideBar>
      <D1Flex flexDirection="column" flex={1} justifyContent="space-between">
        <D1Flex flexDirection="column" height="30%" justifyContent="space-around" my={50}>
          <D1Tooltip id="chart-pie" text="Análises">
            <D1Icon>chart-pie</D1Icon>
          </D1Tooltip>
          <D1Tooltip id="rocket" text="Jornadas">
            <D1Icon>rocket</D1Icon>
          </D1Tooltip>
          <D1Tooltip id="user-friends" text="Clientes">
            <D1Icon>user-friends</D1Icon>
          </D1Tooltip>
          <D1Tooltip id="ccm-cloud" text="CCM Cloud">
            <D1Icon>ccm-cloud</D1Icon>
          </D1Tooltip>

          <D1Hr />

          <D1Tooltip id="external-link-square-alt" text="Versão 01">
            <D1Icon>external-link-square-alt</D1Icon>
          </D1Tooltip>
        </D1Flex>
        <D1Flex flexDirection="column" height="30%" justifyContent="space-around" my={50}>
          <D1Tooltip id="gem-solid" text="Administração">
            <D1Icon>gem-solid</D1Icon>
          </D1Tooltip>
          <D1Tooltip id="tools" text="Help Desk">
            <D1Icon>tools</D1Icon>
          </D1Tooltip>
          <D1Tooltip id="exchange-alt" text="Trocar conta">
            <D1Icon>exchange-alt</D1Icon>
          </D1Tooltip>

          <D1Tooltip id="sign-out-alt" text="Sair">
            <D1Icon>sign-out-alt</D1Icon>
          </D1Tooltip>
        </D1Flex>
      </D1Flex>
    </D1SideBar>
  )
}
