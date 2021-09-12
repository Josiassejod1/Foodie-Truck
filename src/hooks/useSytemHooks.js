import React, { useState, useEffect } from "react"
import { Image } from "react-native"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { LogBox } from "react-native"
import { Asset } from "expo-asset"

export default function useSystemHook() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()
        /**
         * Loads images
         */
        //await loadAssetsAsync()
        /**
         * You can load any font you'd like from a .ttf file placed in assests/fonts/YoUrFoNtHeRe
         */
       await Font.loadAsync({
          Poppins: require('../../fonts/Poppins.ttf'),
          "Poppins-Light": require('../../fonts/Poppins-Light.ttf'),
          "Poppins-Bold": require('../../fonts/Poppins-Bold.ttf'),
          "Poppins-Regular": require('../../fonts/Poppins-Regular.ttf'),
          "Poppins-Black": require('../../fonts/Poppins-Black.ttf'),
          "Poppins-Medium": require('../../fonts/Poppins-Medium.ttf'),
          "Avenir": require('../../fonts/Avenir.otf'),
          "Encode-Sans": require('../../fonts/Encode-Sans.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return { isLoadingComplete }
}

// const loadAssetsAsync = async () => {
//   const imageAssets = cacheImages([
//     //  Require each image
//   ])

//   function cacheImages(images: any) {
//     return images.map((image: any) => {
//       if (typeof image === "string") {
//         return Image.prefetch(image)
//       } else {
//         return Asset.fromModule(image).downloadAsync()
//       }
//     })
//   }

//   await Promise.all([...imageAssets])
// }