import { ComponentProps } from 'react';
import { View as InternalView } from 'react-native';
import { Text as InternalText } from 'react-native-paper';

import withStyledComponent from '../../hocs/withStyledComponent';

type InternalViewProps = ComponentProps<typeof InternalView>;
export const View = withStyledComponent<
  InternalViewProps['style'],
  InternalViewProps
>(InternalView);

type InternalTextProps = ComponentProps<typeof InternalText>;
export const Text = withStyledComponent<
  InternalTextProps['style'],
  InternalTextProps
>(InternalText);
