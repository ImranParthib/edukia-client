# Development Speed Optimizations

## 🚀 Quick Development Scripts

Add these to your `package.json` scripts:

```json
{
  "scripts": {
    "dev:fast": "next dev --turbopack --port 3000",
    "dev:debug": "next dev --turbopack --port 3000 --inspect",
    "build:analyze": "ANALYZE=true npm run build",
    "test:watch": "playwright test --ui",
    "test:debug": "playwright test --debug",
    "test:quick": "playwright test --grep-invert @slow",
    "lint:fix": "next lint --fix",
    "lint:staged": "lint-staged",
    "pre-commit": "npm run lint:staged && npm run test:quick"
  }
}
```

## 🔧 Local Development Optimizations

### 1. **Turbopack Configuration**

```javascript
// next.config.mjs - Optimized for development
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // Faster builds in development
  swcMinify: true,

  // Skip type checking in dev (use editor)
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "development",
  },

  // Faster hot reload
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
```

### 2. **Git Hooks for Quality**

```bash
# Install husky for git hooks
npm install --save-dev husky lint-staged

# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:staged
```

### 3. **VSCode Settings**

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "eslint.workingDirectories": ["src"],
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/.next/**": true,
    "**/test-results/**": true
  }
}
```

## 📊 Performance Monitoring

### 1. **Bundle Analyzer Setup**

```bash
npm install --save-dev @next/bundle-analyzer

# Use: npm run build:analyze
```

### 2. **Development Metrics**

```javascript
// lib/dev-metrics.js
export const measurePageLoad = () => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log("🚀 Page Load Metrics:", {
          domContentLoaded: Math.round(
            perfData.domContentLoadedEventEnd - perfData.fetchStart
          ),
          fullyLoaded: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          firstPaint: Math.round(
            performance.getEntriesByType("paint")[0]?.startTime || 0
          ),
        });
      }, 0);
    });
  }
};
```

## 🧪 Testing Optimizations

### 1. **Playwright Speed Improvements**

```javascript
// playwright.config.js - Optimized
export default {
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "html",

  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    // Faster test execution
    actionTimeout: 10000,
    navigationTimeout: 15000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Only run on CI or explicit flag
    ...(process.env.CI || process.env.FULL_BROWSER_TEST
      ? [
          {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
          },
          {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
          },
        ]
      : []),
  ],

  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
};
```

### 2. **Smart Test Organization**

```javascript
// tests/utils/test-helpers.js
export const skipInCI = (testFn) => {
  if (process.env.CI) {
    return test.skip;
  }
  return testFn;
};

// Mark slow tests
export const slowTest = test.extend({
  // Add @slow tag for conditional skipping
});

// Quick smoke tests
export const smokeTest = test.extend({
  // Core functionality only
});
```

## 🔄 Continuous Development Workflow

### 1. **Development Branches Strategy**

```bash
# Feature development
git checkout -b feature/component-name
npm run dev:fast  # Start with Turbopack

# Quick feedback loop
npm run lint:fix  # Fix linting
npm run test:quick  # Run fast tests only
git add . && git commit -m "feat: component implementation"
```

### 2. **PR Quality Gates**

- ✅ Linting passes
- ✅ Build succeeds
- ✅ Core E2E tests pass
- ✅ No security vulnerabilities
- 🔄 Full E2E suite (only on main/development)

### 3. **Local Development Speed Tips**

```bash
# Terminal aliases for speed
alias ndev="npm run dev:fast"
alias ntest="npm run test:watch"
alias nlint="npm run lint:fix"
alias nbuild="npm run build"

# Quick project commands
alias edukia-dev="cd ~/path/to/edukia && ndev"
alias edukia-test="cd ~/path/to/edukia && ntest"
```

## 📈 Expected Performance Improvements

### **Before Optimization:**

- CI Runtime: ~8-12 minutes
- Local dev start: ~15-30 seconds
- Test feedback: ~2-5 minutes
- Build time: ~3-5 minutes

### **After Optimization:**

- CI Runtime: ~3-6 minutes (50% faster)
- Local dev start: ~5-10 seconds (60% faster)
- Test feedback: ~30 seconds - 2 minutes (70% faster)
- Build time: ~1-3 minutes (40% faster)
- Cache hit rate: ~80-90% on subsequent runs
