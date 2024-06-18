/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import Toast from 'react-native-toast-message';
import {commonTheme} from './theme/theme';
import {Navigation} from './navigation';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={commonTheme}>
        <Navigation />
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;