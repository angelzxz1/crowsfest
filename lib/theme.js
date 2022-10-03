import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    defaultColorMode: "dark",
    initialColorMode: "dark",
    disableTransitionOnChange: false
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("crowRed.200", "#202023")(props),
        color: "#fff"
      }
    })
  },
  components: {
    Heading: {
      variants: {
        "section-title": {
          textDecoration: "underline",
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: "#525252",
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4
        }
      }
    },
    Link: {
      baseStyle: (props) => ({
        color: "#fff",
        _hover: {
          textDecoration: "none"
        }
      })
    },
    MenuButton: {
      baseStyle: (props) => ({
        _hover: {
          bg: mode("crowRed.50", "gray.700")(props)
        },
        _active: {
          bg: mode("crowRed.200", "gray.700")(props)
        }
      })
    }
  },
  colors: {
    glassTeal: "#88ccca",
    darker: {
      50: "#464957",
      100: "#414452",
      200: "#343742",
      300: "#2d303b",
      400: "#242730",
      500: "#232733",
      600: "#1e222e",
      700: "#191e2e",
      800: "#111626",
      900: "#090d1a"
    },
    brighter: {
      50: "#ffffff",
      100: "#f5f4e9",
      200: "#edebd8",
      300: "#edead1",
      400: "#fcf9dc",
      500: "#f0ecc7",
      600: "#ebe6b9",
      700: "#ebe5ae",
      800: "#fcf5ae",
      900: "#fff8a8"
    },
    crowRed: {
      50: "#BB2030",
      200: "#6A0004",
      400: "#4C0005"
    }
  },
  fonts: {
    heading: "'M PLUS rounded 1c'",
    p: "'Roboto'"
  }
});

export default theme;
