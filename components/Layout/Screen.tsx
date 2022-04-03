import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';

import Size from 'constants/Size';
import Colors from 'constants/Colors';

interface ScreenProps {
  fullScreen?: boolean;
  scrollable?: boolean;
  insets?: ('left' | 'right' | 'bottom' | 'top')[];
}

const Scrollable: React.FC<
  React.PropsWithChildren<{ enabled?: boolean; fullScreen?: boolean }>
> = ({ enabled, fullScreen, children }) => {
  const style = fullScreen ? { flex: 1 } : styles.screenPadding;

  if (!enabled) {
    return <View style={style}>{children}</View>;
  }

  return (
    <ScrollView>
      <View style={style}>{children}</View>
    </ScrollView>
  );
};

const Screen: React.FC<React.PropsWithChildren<ScreenProps>> = ({
  children,
  fullScreen = false,
  scrollable,
  insets = ['left', 'right'],
}) => {
  const edges: Edge[] = fullScreen ? [] : insets;

  if (fullScreen) {
    return (
      <Scrollable enabled={scrollable} fullScreen={fullScreen}>
        {children}
      </Scrollable>
    );
  }

  return (
    <SafeAreaView edges={edges} style={styles.screen}>
      <Scrollable enabled={scrollable} fullScreen={fullScreen}>
        {children}
      </Scrollable>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screenPadding: {
    flex: 1,
    padding: Size.spacing.large,
  },
});
