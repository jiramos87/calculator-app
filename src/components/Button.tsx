
import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type?: 'normal' | 'special' | 'operator' | 'equals';
  wide?: boolean;
  theme: any;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onPress, 
  type = 'normal', 
  wide = false,
  theme
}) => {
  const buttonTypeStyle = (): ViewStyle => {
    switch (type) {
      case 'special':
        return {
          backgroundColor: theme.specialButtonBackground,
          shadowColor: theme.specialButtonShadow,
        };
      case 'operator':
        return {
          backgroundColor: theme.operatorButtonBackground,
          shadowColor: theme.operatorButtonShadow,
        };
      case 'equals':
        return {
          backgroundColor: theme.equalsButtonBackground,
          shadowColor: theme.equalsButtonShadow,
        };
      default:
        return {
          backgroundColor: theme.buttonBackground,
          shadowColor: theme.buttonShadow,
        };
    }
  };

  const textTypeStyle = (): TextStyle => {
    switch (type) {
      case 'special':
      case 'operator':
        return {
          color: theme.specialButtonTextColor,
        };
      case 'equals':
        return {
          color: theme.equalsButtonTextColor,
        };
      default:
        return {
          color: theme.buttonTextColor,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonTypeStyle(),
        wide && styles.wideButton,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textTypeStyle()]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  wideButton: {
    flex: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button
