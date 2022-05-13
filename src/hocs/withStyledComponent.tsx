import { ComponentType } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

type SxStyle<Style> = {
  sx?: Partial<{
    [k in ReactNativePaper.Breakpoint]: Style;
  }>;
};

function withStyledComponent<
  StyleProp,
  Props extends { style?: StyleProp },
>(Component: ComponentType<Props>) {
  return (props: Props & SxStyle<StyleProp>) => {
    const { style, sx } = props;
    const { breakpoint } = useBreakpoint();

    let compiledStyle = style instanceof Object ? style : {};

    if (sx && sx[breakpoint]) {
      compiledStyle = { ...compiledStyle, ...sx[breakpoint] };
    }

    return <Component {...props} style={compiledStyle} />;
  };
}

export default withStyledComponent;
