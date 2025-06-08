// import "dotenvx/config";

export default {
  expo: {
    name: "jonally-app",
    slug: "nombre-de-tu-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "nombredetuapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true
    },

    android: {
      edgeToEdgeEnabled: true,
      package: "com.bigbang06.nombredetuapp",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },

    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],

    experiments: {
      typedRoutes: true
    },

    extra: {
      apiUrl: process.env.API_URL,
      environment: process.env.NODE_ENV
    }
  }
};
