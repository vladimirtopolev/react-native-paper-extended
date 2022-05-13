import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useBreakpoint = (): {
  width: number;
  breakpoint: ReactNativePaper.Breakpoint;
} => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const breakpoint = useMemo(() => {
    const nearestBrekpoint = Object.entries(theme.breakpoints.values)
      .reverse()
      .find(([_, value]) => value < width);
    if (nearestBrekpoint) {
      return nearestBrekpoint[0] as ReactNativePaper.Breakpoint;
    }
    return 'xs';
  }, [width, theme]);

  return {
    width,
    breakpoint,
  };
};
