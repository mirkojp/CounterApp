import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert, StatusBar } from 'react-native';
import { useThemeStyles } from './styles/useThemeStyles';

interface ThemeStyles {
  container: object;
  counterText: object;
  button: object;
  buttonText: object;
  disabledButton: object;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const styles = useThemeStyles(isDarkTheme);

  const handleIncrement = () => {
    if (count >= 10) {
      Alert.alert('Limit Reached', 'Counter cannot exceed 10');
      return;
    }
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <View style={styles.card}>
        <Text style={styles.counterText}>{count}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              count >= 10 && styles.disabledButton,
              pressed && { opacity: 0.7 },
            ]}
            onPress={handleIncrement}
            disabled={count >= 10}
          >
            <Text style={styles.buttonText}>+1</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
            onPress={handleToggleTheme}
          >
            <Text style={styles.buttonText}>
              {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default App;