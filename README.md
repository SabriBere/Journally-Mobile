<p>
  <a href="#español"><img src="https://flagcdn.com/w20/es.png" alt="Español" /> Español</a> |
  <a href="#english"><img src="https://flagcdn.com/w20/gb.png" alt="English" /> English</a>
</p>


# 📔 Journally Mobile App

<h2 id="español"><a href="#español"><img src="https://flagcdn.com/w20/es.png" alt="Español" /></a>🇪🇸</h2>


Una aplicación de journaling móvil desarrollada en **React Native** con **Expo**. Este proyecto nace como un experimento técnico con manejo de entornos y arquitectura modular, y evolucionará hacia una herramienta personal de escritura y registro diario.

---

## 🚀 Tecnologías principales

- [Expo SDK 52](https://docs.expo.dev/)
- React Native
- TypeScript
- React Navigation
- dotenvx (`.env` por entorno)

---

## 📁 Arquitectura

El proyecto está compuesto por la siguiente estructura de archivos y carpetas:

```
📦 Raíz del proyecto
├── app/               # Navegación principal y pantallas
├── components/        # Componentes reutilizables
├── constants/         # Colores, fuentes, helpers
├── hooks/             # Custom hooks
├── assets/            # Íconos, splash, imágenes
├── .env               # Configuración base de entorno
├── .env.dev           # Entorno de desarrollo
├── .env.production    # Entorno de producción
├── app.config.js      # Configuración global de Expo
├── package.json       # Dependencias y scripts
├── tsconfig.json      # Configuración de TypeScript
```


---

## Instalación

Al ejecutar el comando `npm install` o `npm i` se instalaran las dependencias del proyecto.

---

## Scripts disponibles

### ▶️ `npm start`

Inicia el servidor de desarrollo de Expo. Desde aquí podés escanear el QR con la app de Expo Go o lanzar el proyecto en emuladores/dispositivos.

### 🤖 `npm run android`

Compila y ejecuta la app en un emulador Android (como Android Studio) o en un dispositivo conectado por USB (modo desarrollador activado).

Requiere tener el entorno Android correctamente configurado.

### 🍏 `npm run ios`

Lanza la aplicación en un simulador de iOS (macOS únicamente) o en un dispositivo físico si está conectado y autorizado.

⚠️ Solo funciona en macOS con Xcode instalado.

### 🧹 `npm lint`

Ejecuta ESLint para detectar errores y mantener la calidad del código.


<h2 id="english"><a href="#english"><img src="https://flagcdn.com/w20/gb.png" alt="English" /></a>🇬🇧</h2>

A mobile journaling app developed with React Native and Expo. This project began as a technical experiment to manage environments and modular architecture, and will evolve into a personal tool for daily writing and reflection.`

---

## 🚀 Main Technologies

- [Expo SDK 52](https://docs.expo.dev/)
- React Native
- TypeScript
- React Navigation
- dotenvx (`.env` por entorno)

---

## 📁 Architecture
The project follows a modular file and folder structure:

```
📦 Project root
├── app/               # Main navigation and screens
├── components/        # Reusable UI components
├── constants/         # Colors, fonts, helpers
├── hooks/             # Custom hooks
├── assets/            # Icons, splash, images
├── .env               # Default environment config
├── .env.dev           # Development environment
├── .env.production    # Production environment
├── app.config.js      # Global Expo config
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript config

```

---

## 📦 Installation

Run the following to install dependencies: `npm install` or `npm i`

---

## 🧾 Available Scripts


### ▶️ `npm start`

Starts the Expo development server. You can scan the QR code with Expo Go or run on emulator/devices.

### 🤖 `npm run android`

Builds and launches the app on an Android emulator (e.g., Android Studio) or a connected device in developer mode.

Requires a properly configured Android environment.

### 🍏 `npm run ios`

Launches the app in an iOS simulator or a connected physical device.

⚠️ Only works on macOS with Xcode installed.

### 🧹 `npm run lint`

Runs ESLint to check for issues and maintain code quality.