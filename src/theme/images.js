import { Asset } from 'expo-asset'
// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  greenhouse: require('../../assets/images/greenhouse.jpg'),
  temp: require('../../assets/images/temperature.jpg'),
  humid: require('../../assets/images/humidity.jpg'),
  farm: require('../../assets/images/farm.jpg'),
  kc: require('../../assets/images/kc.png')

}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
