import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label={'Toggle theme'}
      backgroundColor={useColorModeValue('#B16286', '#D65D0E')}
      color={useColorModeValue('#3C3836', '#EBDBB2')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
