import { StyleSheet } from 'react-native';

// Theme 1: Dark blue theme (based on the first CSS file)
const Theme1 = {
  // Colors
  backgroundColor: 'hsl(222, 26%, 31%)',
  calculatorBackground: 'hsl(223, 31%, 20%)',
  displayBackground: 'hsl(224, 36%, 15%)',
  textColor: 'white',
  
  // Buttons
  buttonBackground: 'hsl(30, 25%, 89%)',
  buttonTextColor: 'hsl(221, 14%, 31%)',
  buttonShadow: 'hsl(28, 16%, 65%)',
  buttonHover: 'hsl(28, 12%, 79%)',
  buttonActive: 'hsl(29, 9%, 48%)',
  
  // Special buttons (DEL, RESET)
  specialButtonBackground: 'hsl(225, 21%, 49%)',
  specialButtonTextColor: 'white',
  specialButtonShadow: 'hsl(224, 28%, 35%)',
  specialButtonHover: 'hsl(225, 21%, 37%)',
  specialButtonActive: 'hsl(222, 29%, 25%)',
  
  // Equals button
  equalsButtonBackground: 'hsl(6, 63%, 50%)',
  equalsButtonTextColor: 'white',
  equalsButtonShadow: 'hsl(6, 70%, 34%)',
  equalsButtonHover: 'hsl(6, 63%, 40%)',
  equalsButtonActive: 'hsl(6, 71%, 24%)',
  
  // Slider
  sliderBackground: 'hsl(223, 31%, 20%)',
  sliderThumb: 'hsl(6, 63%, 50%)',
  
  // Logo and header
  logoColor: 'white',
  
  // Font (to be imported in the component)
  fontFamily: 'Spartan-Bold',
};

// Pre-defined styles based on the theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme1.backgroundColor,
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
    color: Theme1.logoColor,
    fontWeight: 'bold',
  },
  themeDiv: {
    flexDirection: 'row',
    width: '50%',
  },
  themeLabel: {
    fontSize: 14,
    marginTop: 18,
    color: Theme1.textColor,
    fontWeight: 'bold',
  },
  themeSliderDiv: {
    flexDirection: 'column',
  },
  slideNumbers: {
    fontSize: 12,
    marginTop: -4,
    marginLeft: 40,
    letterSpacing: 6,
    color: Theme1.textColor,
  },
  sliderContainer: {
    marginTop: -6,
    marginLeft: 35,
  },
  outputScreen: {
    backgroundColor: Theme1.displayBackground,
    color: Theme1.textColor,
    width: '100%',
    height: 90,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingTop: 28,
    paddingRight: 28,
    textAlign: 'right',
  },
  outputText: {
    color: Theme1.textColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  numberpadDiv: {
    backgroundColor: Theme1.calculatorBackground,
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
    backgroundColor: Theme1.buttonBackground,
    fontSize: 30,
    color: Theme1.buttonTextColor,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme1.buttonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  buttonText: {
    color: Theme1.buttonTextColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  delButton: {
    backgroundColor: Theme1.specialButtonBackground,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme1.specialButtonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  delButtonText: {
    color: Theme1.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bigButtonsDiv: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: Theme1.specialButtonBackground,
    flex: 1,
    borderRadius: 7,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme1.specialButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resetButtonText: {
    color: Theme1.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultButton: {
    backgroundColor: Theme1.equalsButtonBackground,
    flex: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme1.equalsButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resultButtonText: {
    color: Theme1.equalsButtonTextColor,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export { Theme1, styles };
export default Theme1
