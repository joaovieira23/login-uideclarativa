import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        },
        purple: {
            "500": '#8257e5'
        }
    },
    fontSizes: {
        "2xl": "90rem"
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    radii: {
        sm: '5px',
        md: '8px'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})