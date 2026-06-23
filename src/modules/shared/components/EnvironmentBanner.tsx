import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { ENVIRONMENT } from '@env';

enum ENVIRONMENTS {
  DEV = 'development',
  STAGING = 'staging',
  PROD = 'production',
}
const EnvironmentBanner = () => {
  const env = ENVIRONMENT;
  const bannerColor =
    env === 'development' ? 'blue' : env === 'staging' ? 'orange' : 'green';
  const bannerText =
    env === 'development'
      ? 'Development'
      : env === 'staging'
      ? 'Staging'
      : 'Production';

  const customStyles: ViewStyle = {
    ...styles.container,
    backgroundColor: bannerColor,
  };

  if (ENVIRONMENT === ENVIRONMENTS.PROD) return null;

  return (
    <View style={customStyles}>
      <Text style={styles.text}>{bannerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export { EnvironmentBanner };
