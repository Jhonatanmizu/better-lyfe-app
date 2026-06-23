# **React Native New Architecture Template**

## **Goal**

Create a robust and scalable React Native template leveraging the New Architecture with a curated set of tools and best practices to build performant and maintainable applications.

---

## **Project Structure**

```text
├── android/                # Android native code (SDK 36, NDK 27.1.12297006)
├── ios/                    # iOS native code
├── src/
│   ├── infrastructure/     # Theme definitions (restyle)
│   │   └── theme/
│   ├── modules/
│   │   ├── example/        # Example module (screens + routes)
│   │   ├── routes/         # Navigation configuration
│   │   └── shared/         # Shared components, hooks, storage, types
│   ├── services/           # API and business logic services
│   └── store/              # State management (Zustand)
├── __mocks__/              # Jest manual mocks
├── __tests__/              # Integration tests
├── babel.config.js         # Babel configuration with module-resolver
├── jest.config.js          # Jest configuration (@react-native/jest-preset)
├── tsconfig.json           # TypeScript configuration
└── tsconfig.test.json      # TypeScript config for tests
```

---

## **License**

MIT

---

## **Features**

- New React Native Architecture (Fabric + TurboModules)
- Path Aliases (@, @shared, @modules, etc.)
- Jest + React Native Testing Library + ts-jest
- TypeScript
- Multi-environment builds (development, staging, production)
- Zustand state management
- MMKV storage
- @shopify/restyle theming

---

## **Core Libraries**

### **Framework**

- **React 19**
- **React Native 0.85** (New Architecture enabled)

### **Navigation**

- **@react-navigation/native** v7
- **@react-navigation/native-stack** v7
- **react-native-screens**
- **react-native-safe-area-context**

### **State & Storage**

- **Zustand** v5
- **react-native-mmkv** v4

### **Styling**

- **@shopify/restyle** v2

### **Testing**

- **Jest** v29
- **ts-jest** v29
- **@testing-library/react-native** v13
- **@react-native/jest-preset**

### **Dev & Build**

- **TypeScript** v5.8
- **ESLint** v8
- **Prettier** v3.8
- **Babel** v7.28
- **Metro** (@react-native/metro-config)
- **react-native-dotenv** (env config per scheme)

---

## **Getting Started**

### **Prerequisites**

To run this project, you will need:

- A drink (highly recommend coffee for best performance)
- [Node.js](https://nodejs.org/) (v20+)
- [Yarn](https://yarnpkg.com/) as package manager
- A code editor ([Visual Studio Code](https://code.visualstudio.com/))
- [Android Studio](https://developer.android.com/studio) for Android development
  - Android SDK Platform 36
  - Android NDK 27.1.12297006 (specific version required)
  - Kotlin 2.1.20
- [Xcode](https://developer.apple.com/xcode/) (14+) for iOS development (Mac only)
- [CocoaPods](https://cocoapods.org/) for iOS dependencies (Mac only)
- [Watchman](https://facebook.github.io/watchman/docs/install) for file system watching

---

### **Run Project**

1. Clone this repository to your local machine.
2. Install the project dependencies:
   ```bash
   yarn install
   ```
3. For iOS (Mac only), install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```
4. To enable the New Architecture for Android, create or update `android/local.properties` with your SDK and NDK paths:
   ```
   sdk.dir=/path/to/your/Android/sdk
   ndk.dir=/path/to/your/Android/sdk/ndk/27.1.12297006
   ```
5. Run the project:

   ```bash
   # For iOS
   yarn ios:dev

   # For Android
   yarn aos:dev
   ```

6. For development:
   ```bash
   # Start Metro bundler
   yarn start
   ```

---

## **Available Environments**

The project supports three build configurations via `APP_ENV`:

| Env | iOS Scheme | Android Build Type | Command |
|-----|-----------|-------------------|---------|
| Development | development | developmentDebug | `yarn aos:dev` / `yarn ios:dev` |
| Staging | staging | stagingDebug | `yarn aos:staging` / `yarn ios:staging` |
| Production | production | productionDebug | `yarn aos:prod` / `yarn ios:prod` |

---

## **Contributing**

Want to contribute? Here's how you can help:

1. Create a new branch for your changes:
   ```bash
   git checkout -b your-branch-name
   ```
2. Implement your changes and commit them with a meaningful message:
   ```bash
   git commit -m ":sparkles: feat: Your message here"
   ```
3. Push your branch to the remote repository:
   ```bash
   git push
   ```
4. Open a pull request and request a code review.

---

## **Git Workflow**

### Common Commands:

- **Create a new branch**:
  ```bash
  git checkout -b your-branch-name
  ```
- **Switch to a branch**:
  ```bash
  git checkout branch-name
  ```
- **Commit your changes**:
  ```bash
  git commit -m "Your commit message"
  ```
- **Push changes to remote**:
  ```bash
  git push
  ```
- **Pull updates from remote**:
  ```bash
  git pull
  ```

---

## **Development Setup**

### **Path Aliases**

This project uses path aliases for cleaner imports. Instead of relative paths like `../../../components/Button`, you can use:

```javascript
// Before
import Button from '../../../components/Button';

// After
import Button from '@/components/Button';
```

Available aliases:

| Alias | Path |
|-------|------|
| `@/` | `src/` |
| `@shared/` | `src/modules/shared/` |
| `@modules/` | `src/modules/` |
| `@services/` | `src/modules/services/` |
| `@hooks/` | `src/modules/hooks/` |
| `@utils/` | `src/modules/utils/` |
| `@assets/` | `src/assets/` |
| `@navigation/` | `src/navigation/` |
| `@infrastructure/` | `src/modules/infrastructure/` |
| `@config/` | `src/modules/config/` |

Path aliases are configured in:

- `tsconfig.json` - For TypeScript resolution
- `babel.config.js` - For Babel transpilation
- `jest.config.js` - For testing with Jest

---

## **Troubleshooting**

If VS Code or Jest doesn't recognize path aliases:

- Restart TypeScript server: Ctrl+Shift+P → "TypeScript: Restart TS Server"
- Ensure `tsconfig.json` has correct `baseUrl` and `paths` configurations
- Run `npx tsc --noEmit` to verify TypeScript configuration

### **Android Issues**

- Ensure NDK version 27.1.12297006 is installed through Android Studio
- Check that `local.properties` points to the correct SDK and NDK paths
- Try cleaning the project with `cd android && ./gradlew clean && cd ..`

### **iOS Issues**

- Make sure CocoaPods is installed and pods are up to date: `cd ios && pod install && cd ..`
- Try cleaning the build: `cd ios && xcodebuild clean && cd ..`

---

## **Starting a Pull Request**

1. Create a branch based on the `main` branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit to your branch.
3. Push your branch to the remote repository.
4. Create a pull request and ensure it is reviewed before merging.

---
