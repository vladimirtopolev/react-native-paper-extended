import { DefaultTheme } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    interface ThemeBreakpoints {
      values: { [k in Breakpoint]: number };
    }

    interface Theme {
      breakpoints: ThemeBreakpoints;
    }
  }
}

export const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};
