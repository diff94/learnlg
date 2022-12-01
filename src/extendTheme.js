import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      brand: baseTheme.colors.red,
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: "blue",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
