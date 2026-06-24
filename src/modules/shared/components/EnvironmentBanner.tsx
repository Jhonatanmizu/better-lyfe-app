import React from 'react';
import { ENVIRONMENT } from '@env';
import { Box } from './Box';
import { Text } from './Text';
import { palette } from '@/infrastructure/theme';

enum ENVIRONMENTS {
  DEV = 'development',
  STAGING = 'staging',
  PROD = 'production',
}

interface EnvConfig {
  backgroundColor: string;
  label: string;
}

const ENV_CONFIG: Record<string, EnvConfig> = {
  [ENVIRONMENTS.DEV]: { backgroundColor: palette.envDevelopment, label: 'Development' },
  [ENVIRONMENTS.STAGING]: { backgroundColor: palette.envStaging, label: 'Staging' },
  [ENVIRONMENTS.PROD]: { backgroundColor: palette.envProduction, label: 'Production' },
};

const EnvironmentBanner = React.memo(() => {
  const config = ENV_CONFIG[ENVIRONMENT] || ENV_CONFIG[ENVIRONMENTS.DEV];

  if (ENVIRONMENT === ENVIRONMENTS.PROD) return null;

  return (
    <Box
      style={{ backgroundColor: config.backgroundColor }}
      padding="s"
      alignItems="center"
    >
      <Text color="white" style={{ fontWeight: 'bold' }}>
        {config.label}
      </Text>
    </Box>
  );
});

EnvironmentBanner.displayName = 'EnvironmentBanner';

export { EnvironmentBanner };
