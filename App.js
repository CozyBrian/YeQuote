import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { YeApp } from './src/components/kanyescreen';
import { AppNavigation } from './src/navigation/app-navigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppNavigation />
    </>
  );
}
