import { extendTheme, useColorModeValue } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FBF1C7', '#282828')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'index-section-title': {
        fontSize: 20,
        textDecoration: `underline`,
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 4
      },
      'section-title': {
        fontSize: 20,
        marginTop: 4,
        marginBottom: 4
      },
      'track-title': {
        fontSize: 16,
        marginTop: 4,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#458488', '#458488')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts
})

export default theme
