import { StyleSheet } from 'react-native';

// Theme 3: Purple/neon theme (based on the third CSS file)
const Theme3 = {
  // Colors
  backgroundColor: 'hsl(268, 75%, 9%)',
  calculatorBackground: 'hsl(268, 71%, 12%)',
  displayBackground: 'hsl(268, 71%, 12%)',
  textColor: 'hsl(52, 100%, 62%)',
  
  // Buttons
  buttonBackground: 'hsl(281, 89%, 26%)',
  buttonTextColor: 'hsl(52, 100%, 62%)',
  buttonShadow: 'hsl(285, 91%, 52%)',
  buttonHover: 'hsl(281, 89%, 19%)',
  buttonActive: 'hsl(285, 83%, 42%)',
  
  // Special buttons (DEL, RESET)
  specialButtonBackground: 'hsl(268, 47%, 21%)',
  specialButtonTextColor: 'white',
  specialButtonShadow: 'hsl(290, 70%, 36%)',
  specialButtonHover: 'rgb(18, 41, 43)',
  specialButtonActive: 'hsl(290, 70%, 24%)',
  
  // Equals button
  equalsButtonBackground: 'hsl(176, 100%, 44%)',
  equalsButtonTextColor: 'hsl(198, 20%, 13%)',
  equalsButtonShadow: 'hsl(177, 92%, 70%)',
  equalsButtonHover: 'hsl(176, 98%, 32%)',
  equalsButtonActive: 'hsl(177, 43%, 52%)',
  
  // Slider
  sliderBackground: 'hsl(268, 71%, 12%)',
  sliderThumb: 'hsl(176, 100%, 44%)',
  
  // Logo and header
  logoColor: 'hsl(52, 100%, 62%)',
  
  // Font (to be imported in the component)
  fontFamily: 'Spartan-Bold',
};

// Pre-defined styles based on the theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme3.backgroundColor,
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
    color: Theme3.logoColor,
    fontWeight: 'bold',
  },
  themeDiv: {
    flexDirection: 'row',
    width: '50%',
  },
  themeLabel: {
    fontSize: 14,
    marginTop: 18,
    color: Theme3.textColor,
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
    color: Theme3.textColor,
  },
  sliderContainer: {
    marginTop: -6,
    marginLeft: 35,
  },
  outputScreen: {
    backgroundColor: Theme3.displayBackground,
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
    color: Theme3.textColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  numberpadDiv: {
    backgroundColor: Theme3.calculatorBackground,
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
    backgroundColor: Theme3.buttonBackground,
    fontSize: 30,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme3.buttonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  buttonText: {
    color: Theme3.buttonTextColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  delButton: {
    backgroundColor: Theme3.specialButtonBackground,
    borderRadius: 7,
    textAlign: 'center',
    marginBottom: 16,
    marginRight: 2,
    padding: 15,
    shadowColor: Theme3.specialButtonShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  delButtonText: {
    color: Theme3.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bigButtonsDiv: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: Theme3.specialButtonBackground,
    flex: 1,
    borderRadius: 7,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme3.specialButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resetButtonText: {
    color: Theme3.specialButtonTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultButton: {
    backgroundColor: Theme3.equalsButtonBackground,
    flex: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: Theme3.equalsButtonShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  resultButtonText: {
    color: Theme3.equalsButtonTextColor,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export { Theme3, styles };
export default Theme3;
