import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '@shared/components';

const ExampleScreen = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text>{t('example.screenTitle')}</Text>
    </Box>
  );
};

export default ExampleScreen;
