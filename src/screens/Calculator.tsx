import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { themes } from '../styles';

const Calculator = () => {
  const [outputNumber, setOutputNumber] = useState<number>(0);
  const [cacheArray, setCacheArray] = useState<string[]>([]);
  const [currentTheme, setCurrentTheme] = useState<number>(0);
  const [addBool, setAddBool] = useState<boolean>(false);
  const [subtractBool, setSubtractBool] = useState<boolean>(false);
  const [multiplyBool, setMultiplyBool] = useState<boolean>(false);
  const [divideBool, setDivideBool] = useState<boolean>(false);
  const [opCache, setOpCache] = useState<number>(0);
  
  // Load Spartan font
  const [fontsLoaded] = useFonts({
    'LeagueSpartan-VariableFont_wght': require('../../assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });
  
  const theme = themes[currentTheme];
  const fontFamily = Platform.OS === 'ios' ? 'LeagueSpartan-VariableFont_wght' : 'LeagueSpartan-VariableFont_wght';

  // Load saved theme from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('calculatorTheme');
        if (savedTheme !== null) {
          setCurrentTheme(parseInt(savedTheme));
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };
    
    loadTheme();
  }, []);

  // Save theme to AsyncStorage when it changes
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem('calculatorTheme', currentTheme.toString());
      } catch (error) {
        console.error("Error saving theme:", error);
      }
    };
    
    saveTheme();
  }, [currentTheme]);

  const enterNumber = (digit: number) => {
    const newCacheArray = [...cacheArray, digit.toString()];
    setCacheArray(newCacheArray);
    const cacheOutput = newCacheArray.join("");
    const newOutputNumber = parseFloat(cacheOutput);
    setOutputNumber(newOutputNumber);
  };

  const enterPoint = () => {
    // Prevent adding multiple decimal points
    if (cacheArray.includes('.')) return;
    
    const newCacheArray = [...cacheArray, '.'];
    setCacheArray(newCacheArray);
    const cacheOutput = newCacheArray.join("");
    const newOutputNumber = parseFloat(cacheOutput);
    setOutputNumber(newOutputNumber || 0); // Handle case where there's just a decimal point
  };

  const deleteDigit = () => {
    const newCacheArray = [...cacheArray];
    newCacheArray.pop();
    setCacheArray(newCacheArray);
    
    if (newCacheArray.length === 0) {
      setOutputNumber(0);
    } else {
      const cacheOutput = newCacheArray.join("");
      const newOutputNumber = parseFloat(cacheOutput);
      setOutputNumber(newOutputNumber);
    }
  };

  const reset = () => {
    setCacheArray([]);
    setOpCache(0);
    setOutputNumber(0);
    setAddBool(false);
    setSubtractBool(false);
    setMultiplyBool(false);
    setDivideBool(false);
  };

  const result = () => {
    if (addBool) {
      add();
      setAddBool(false);
    }
    if (subtractBool) {
      subtract();
      setSubtractBool(false);
    }
    if (multiplyBool) {
      multiply();
      setMultiplyBool(false);
    }
    if (divideBool) {
      divide();
      setDivideBool(false);
    }
  };

  const add = () => {
    if (addBool) {
      const sum = opCache + outputNumber;
      setOutputNumber(sum);
      setOpCache(sum);
      setCacheArray([]);
    } else {
      result();
      setAddBool(true);
      setOpCache(outputNumber);
      setCacheArray([]);
    }
  };

  const subtract = () => {
    if (subtractBool) {
      const difference = opCache - outputNumber;
      setOutputNumber(difference);
      setOpCache(difference);
      setCacheArray([]);
    } else {
      result();
      setSubtractBool(true);
      setOpCache(outputNumber);
      setCacheArray([]);
    }
  };

  const multiply = () => {
    if (multiplyBool) {
      const product = opCache * outputNumber;
      setOutputNumber(product);
      setOpCache(product);
      setCacheArray([]);
    } else {
      result();
      setMultiplyBool(true);
      setOpCache(outputNumber);
      setCacheArray([]);
    }
  };

  const divide = () => {
    if (divideBool) {
      const quotient = opCache / outputNumber;
      setOutputNumber(quotient);
      setOpCache(quotient);
      setCacheArray([]);
    } else {
      result();
      setDivideBool(true);
      setOpCache(outputNumber);
      setCacheArray([]);
    }
  };

  const handleThemeChange = (value: number) => {
    setCurrentTheme(Math.floor(value));
  };

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      padding: 30,
    },
    header: {
      flexDirection: 'row',
      width: '100%',
    },
    logo: {
      textAlign: 'left',
      width: '50%',
      fontSize: 32,
      color: theme.textColor,
      fontFamily,
    },
    themeDiv: {
      flexDirection: 'row',
      width: '50%',
    },
    themeLabel: {
      fontSize: 14,
      marginTop: 18,
      color: theme.textColor,
      fontFamily,
    },
    themeSliderDiv: {
      flexDirection: 'column',
    },
    slideNumbers: {
      fontSize: 12,
      marginTop: -4,
      marginLeft: 40,
      letterSpacing: 6,
      color: theme.textColor,
      fontFamily,
    },
    sliderContainer: {
      marginTop: -6,
      marginLeft: 35,
    },
    outputScreen: {
      backgroundColor: theme.displayBackground,
      width: '100%',
      height: 90,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 10,
      padding: 28,
      justifyContent: 'center',
    },
    outputText: {
      color: theme.textColor,
      fontSize: 36,
      textAlign: 'right',
      fontFamily,
    },
    numberpadDiv: {
      backgroundColor: theme.calculatorBackground,
      width: '100%',
      borderRadius: 10,
      padding: 20,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    button: {
      backgroundColor: theme.buttonBackground,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      shadowColor: theme.buttonShadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 6,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 24,
      fontFamily,
    },
    delButton: {
      backgroundColor: theme.specialButtonBackground,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      shadowColor: theme.specialButtonShadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 6,
    },
    delButtonText: {
      color: theme.specialButtonTextColor,
      fontSize: 18,
      fontFamily,
    },
    bigButtonsDiv: {
      flexDirection: 'row',
      marginTop: 10,
    },
    resetButton: {
      backgroundColor: theme.specialButtonBackground,
      flex: 1,
      borderRadius: 7,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      shadowColor: theme.specialButtonShadow,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 5,
    },
    resetButtonText: {
      color: theme.specialButtonTextColor,
      fontSize: 18,
      fontFamily,
    },
    resultButton: {
      backgroundColor: theme.equalsButtonBackground,
      flex: 1,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      shadowColor: theme.equalsButtonShadow,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 5,
    },
    resultButtonText: {
      color: theme.equalsButtonTextColor,
      fontSize: 28,
      fontFamily,
    },
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <StatusBar 
        barStyle={currentTheme === 1 ? 'dark-content' : 'light-content'} 
        backgroundColor={theme.backgroundColor}
      />
      
      {/* Header */}
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.logo}>calc</Text>
        
        <View style={dynamicStyles.themeDiv}>
          <Text style={dynamicStyles.themeLabel}>THEME</Text>
          
          <View style={dynamicStyles.themeSliderDiv}>
            <Text style={dynamicStyles.slideNumbers}>123</Text>
            <View style={dynamicStyles.sliderContainer}>
              <Slider
                style={{width: 60, height: 20}}
                minimumValue={0}
                maximumValue={2.99}
                step={1}
                value={currentTheme}
                onValueChange={handleThemeChange}
                minimumTrackTintColor={theme.sliderThumb}
                maximumTrackTintColor={theme.sliderBackground}
                thumbTintColor={theme.sliderThumb}
              />
            </View>
          </View>
        </View>
      </View>
      
      {/* Display */}
      <View style={dynamicStyles.outputScreen}>
        <Text style={dynamicStyles.outputText} numberOfLines={1} adjustsFontSizeToFit>
          {outputNumber}
        </Text>
      </View>
      
      {/* Number Pad */}
      <View style={dynamicStyles.numberpadDiv}>
        <View style={dynamicStyles.buttonRow}>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(7)}>
            <Text style={dynamicStyles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(8)}>
            <Text style={dynamicStyles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(9)}>
            <Text style={dynamicStyles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.delButton} onPress={deleteDigit}>
            <Text style={dynamicStyles.delButtonText}>DEL</Text>
          </TouchableOpacity>
        </View>
        
        <View style={dynamicStyles.buttonRow}>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(4)}>
            <Text style={dynamicStyles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(5)}>
            <Text style={dynamicStyles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(6)}>
            <Text style={dynamicStyles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={add}>
            <Text style={dynamicStyles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={dynamicStyles.buttonRow}>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(1)}>
            <Text style={dynamicStyles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(2)}>
            <Text style={dynamicStyles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(3)}>
            <Text style={dynamicStyles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={subtract}>
            <Text style={dynamicStyles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        
        <View style={dynamicStyles.buttonRow}>
          <TouchableOpacity style={dynamicStyles.button} onPress={enterPoint}>
            <Text style={dynamicStyles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={() => enterNumber(0)}>
            <Text style={dynamicStyles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={divide}>
            <Text style={dynamicStyles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.button} onPress={multiply}>
            <Text style={dynamicStyles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>
        
        <View style={dynamicStyles.bigButtonsDiv}>
          <TouchableOpacity style={dynamicStyles.resetButton} onPress={reset}>
            <Text style={dynamicStyles.resetButtonText}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.resultButton} onPress={result}>
            <Text style={dynamicStyles.resultButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
