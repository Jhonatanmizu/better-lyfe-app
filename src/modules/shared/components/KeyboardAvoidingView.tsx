import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

interface KeyboardAvoidingViewProps extends PropsWithChildren {
  /** Override the default behavior. Defaults to 'padding' on iOS, undefined on Android. */
  behavior?: 'height' | 'position' | 'padding' | undefined;
  /** Keyboard vertical offset (e.g., for header height). Default 0. */
  keyboardVerticalOffset?: number;
}

/**
 * Cross-platform KeyboardAvoidingView wrapper.
 *
 * - iOS: Uses `behavior="padding"` to push content up when keyboard opens.
 * - Android: Uses `behavior="height"` (or undefined) since Android handles
 *   keyboard adjustment natively with `windowSoftInputMode`. The wrapper
 *   still provides a consistent API for both platforms.
 */
const KeyboardAvoidingView = ({
  children,
  behavior,
  keyboardVerticalOffset = 0,
}: KeyboardAvoidingViewProps): React.JSX.Element => {
  const platformBehavior =
    behavior ?? (Platform.OS === 'ios' ? 'padding' : undefined);

  return (
    <RNKeyboardAvoidingView
      style={styles.container}
      behavior={platformBehavior}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { KeyboardAvoidingView };
