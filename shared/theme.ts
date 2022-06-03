import { extendTheme } from '@chakra-ui/react'

export const colors = {
    orange: '#F86624',
    green: '#61983B',
    blue: '#009EEA',
    white: '#FBFEF9',
    yellow: '#FFE156',
    yellowHover: '#FFD20A',
    yellowActive: '#F5C800',
    black: '#000D0A',
}

const systemFont = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`

export const theme = extendTheme({
    fonts: {
        body: systemFont,
        heading: `'Source Sans Pro', ${systemFont}`,
    },
    fontWeights: {
        light: '300',
        normal: '400',
        black: '900',
    },
    styles: {
        global: {
            'html, body': {
                color: colors.white,
                fontWeight: 300,
                fontSize: '20px',
            },
        },
    },
    colors,
    components: {
        Link: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                black: {
                    color: colors.black,
                },
                yellow: {
                    color: colors.yellow,
                },
                white: {
                    color: colors.white,
                },
            },
            defaultProps: {
                variant: 'black',
            },
        },
        Heading: {
            baseStyle: {
                fontWeight: 'black',
            },
        },
        Button: {
            baseStyle: {
                transition: 'none',
            },
            variants: {
                primary: {
                    color: colors.black,
                    bg: colors.yellow,
                    _hover: {
                        bg: colors.yellowHover,
                    },
                    _pressed: {
                        bg: colors.yellowActive,
                    },
                    _active: {
                        bg: colors.yellowActive,
                    },
                },
            },
            defaultProps: {
                variant: 'primary',
            },
        },
    },
})
