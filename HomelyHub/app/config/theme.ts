import {extendTheme} from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Light',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Regular',
      },
      600: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-MediumItalic',
      },
      bold: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-MediumItalic',
      },
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  components: {
    Button: {
      variants: {
        solid: ({colorScheme}: any) => {
          return {
            bg: `${colorScheme}.400`,
          };
        },
        link: {
          underline: true,
        },
      },
      defaultProps: {
        size: 'xl',
        colorScheme: 'primary',
      },
      sizes: {
        xl: {
          py: '2',

          _text: {
            fontSize: '20',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          },
        },
      },
    },
    Heading: {
      defaultProps: {
        size: 'xl',
      },
      baseStyle: {
        fontWeight: 'semibold',
      },
    },
    Input: {
      baseStyle: {
        fontFamily: 'Roboto-Light',
        borderColor: 'primary.400',

        _input: {
          h: '16',
          fontWeight: '300',
          fontSize: '16px',
        },
        placeholderTextColor: 'gray.400',
      },

      sizes: {
        '3xl': {
          fontSize: '14px',
        },
      },
      defaultProps: {
        size: 'xl',
        rounded: 'lg',
      },
    },
  },
});
