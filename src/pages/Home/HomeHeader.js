import React from 'react'

import { D1Flex } from '@components/Flex/Flex'
import { D1Input } from '@components/Input/Input'
import { D1Button } from '@components/Button/Button'
import acmeLogo from '@images/acme-logo.png'
import { D1Box } from '@components/Box/Box'
import { D1Text } from '@components/Text/Text'
import { useTheme } from 'hooks/useTheme'

export const HomeHeader = () => {
  const theme = useTheme()

  return (
    <D1Flex justifyContent="space-between" alignItems="center" py={20} px={40}>
      <D1Flex flex={1} alignItems="center">
        <D1Flex
          justifyContent="center"
          alignItems="center"
          borderRadius={1000}
          width={35}
          height={35}
          border={`1px solid ${theme.colors.blueDark}`}
          backgroundColor={theme.colors.blueDark}
        >
          <D1Text color={theme.colors.white}>A</D1Text>
        </D1Flex>
        <D1Box border={`1px solid ${theme.colors.mediumGrey}`} ml={20} py={2} px={3} borderRadius={5}>
          <img src={acmeLogo} alt="Acme Logo" height="30px" />
        </D1Box>
      </D1Flex>
      <D1Flex justifyContent="space-between" width={500}>
        <D1Box>
          <D1Input leftIcon="search" placeholder="Buscar" />
        </D1Box>
        <D1Button>+ Nova Jornada</D1Button>
      </D1Flex>
    </D1Flex>
  )
}
