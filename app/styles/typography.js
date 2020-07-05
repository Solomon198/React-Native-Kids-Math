import * as Colors from './colors'
import * as Spacing from './spacing'

export const extraLargeFontSize = 32
export const largeFontSize = 24
export const buttonFontSize = 18
export const baseFontSize = 16
export const smallFontSize = 14
export const smallestFontSize = 10
export const largeHeaderFontSize = 20
export const headerFontSize = 18
export const smallestMediumFontSize = 12
export const iconJobFooter = 30;

export const logoStyle = {
  color:Colors.primary,
  alignSelf:'center',
  fontFamily:'GrandHotel-Regular',
  fontSize:25,textAlign:'center',
  alignSelf:'center'
}

const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

export const icons = {
  color:Colors.primary,
  fontSize: iconJobFooter
}

export const iconNav = {
  color:Colors.faintPrimary,
  fontSize: iconJobFooter
}

export const headerIcon = {
  color:Colors.primary,
  fontSize: largeFontSize
}

export const link = {
  color: Colors.thoughtbotRed,
  fontWeight: 'bold',
}

export const bodyText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
  lineHeight: 19,
}

export const headerText = {
  color: Colors.darkText,
  fontSize: headerFontSize,
  fontWeight: 'bold',
}

export const descriptionText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
}

export const screenHeader = {
  ...base,
  color: Colors.baseText,
  fontSize: largeFontSize,
  fontWeight: 'bold',
}

export const screenFooter = {
  ...base,
  ...descriptionText,
}

export const sectionHeader = {
  ...base,
  ...headerText,
}

export const count = {
  ...base,
  ...descriptionText,
}
