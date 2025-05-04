import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Calculator from './src/screens/Calculator';

export default function App() {
  return (
    <SafeAreaProvider>
      <Calculator />
    </SafeAreaProvider>
  );
}