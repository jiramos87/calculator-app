import { StyleSheet } from 'react-native';

// Theme 2: Light theme (based on the second CSS file)
const Theme2 = {
  // Colors
  backgroundColor: 'hsl(0, 0%, 90%)',
  calculatorBackground: 'hsl(0, 5%, 81%)',
  displayBackground: 'hsl(0, 0%, 93%)',
  textColor: 'hsl(60, 10%, 19%)',
  
  // Buttons
  buttonBackground: 'hsl(45, 7%, 89%)',
  buttonTextColor: 'hsl(60, 10%, 19%)',
  buttonShadow: 'hsl(35, 11%, 61%)',
  buttonHover: 'hsl(45, 3%, 74%)',
  buttonActive: 'hsl(60, 1%, 72%)',
  
  // Special buttons (DEL, RESET)
  specialButtonBackground: 'hsl(185, 42%, 37%)',
  specialButtonTextColor: 'white',
  specialButtonShadow: 'hsl(185, 42%, 27%)',
  specialButtonHover: 'hsl(185, 41%, 25%)',
  specialButtonActive: 'hsl(185, 58%, 25%)',
  
  // Equals button
  equalsButtonBackground: 'hsl(25, 98%, 40%)',
  equalsButtonTextColor: 'white',
  equalsButtonShadow: 'hsl(25, 99%, 27%)',
  equalsButtonHover: 'hsl(25, 97%, 28%)',
  equalsButtonActive: 'hsl(25, 99%, 27%)',
  
  // Slider
  sliderBackground: 'hsl(0, 5%, 81%)',
  sliderThumb: 'hsl(25, 98%, 40%)',
  
  // Logo and header
  logoColor: 'hsl(60, 10%, 19%)',
  
  // Font (to be imported in the component)
  fontFamily: 'Spartan-Bold',
};

// Pre-defined styles based on the theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme2.backgroundColor,
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
    color: Theme2.logoColor,
    fontWeight: 'bold',
  },
  themeDiv: {
    flexDirection: 'row',
    width: '50%',
  },
  themeLabel: {
    fontSize: 14,
    marginTop: 18,
    color: Theme2.textColor,
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
    color: Theme2.textColor,
  },
  sliderContainer: {
    marginTop: -6,
    marginLeft: 35,
  },
  outputScreen: {
    backgroundColor: Theme2.displayBackground,
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
    color: Theme2.textColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  numberpadDiv: {
    backgroundColor: Theme2.calculatorBackground,
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
    backgroundColor: Theme2.buttonBackground,
    fontSize: 30,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme2.buttonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  buttonText: {
    color: Theme2.buttonTextColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  delButton: {
    backgroundColor: Theme2.specialButtonBackground,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme2.specialButtonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  delButtonText: {
    color: Theme2.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bigButtonsDiv: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: Theme2.specialButtonBackground,
    flex: 1,
    borderRadius: 7,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme2.specialButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resetButtonText: {
    color: Theme2.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultButton: {
    backgroundColor: Theme2.equalsButtonBackground,
    flex: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme2.equalsButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resultButtonText: {
    color: Theme2.equalsButtonTextColor,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export { Theme2, styles };
export default Theme2;
