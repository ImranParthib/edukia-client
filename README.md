# 🎓 Edukia College Management System - Frontend

> **Edukia** is a modern, comprehensive college management system designed specifically for **Mohammadpur Mohila College**. This frontend application provides a beautiful, responsive public interface for students, parents, and visitors to access college information, notices, admission details, and more.

## 🌟 **Features**

### **📊 Public Interface**

- ✅ **Modern Homepage** - Hero section with college information
- ✅ **About Section** - College history, mission, and vision
- ✅ **Academic Features** - Departments, curriculum, and programs
- ✅ **Notice & Events** - Real-time Firebase-powered notices
- ✅ **Photo Gallery** - Campus and event images
- ✅ **Admission Information** - Requirements, fees, and circulars
- ✅ **Contact Details** - Location, phone, and email

### **🎨 Design & UX**

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Mode** - Theme switching capability
- ✅ **Modern UI Components** - Shadcn/ui with Tailwind CSS
- ✅ **Smooth Animations** - Enhanced user experience
- ✅ **Fast Loading** - Next.js 15 with Turbopack

### **🔥 Firebase Integration**

- ✅ **Real-time Notices** - Dynamic content management
- ✅ **PDF Downloads** - Notice and circular downloads
- ✅ **Firestore Database** - Scalable cloud storage
- ✅ **Optimized Queries** - Fast data fetching

## 🚀 **Technology Stack**

| Technology       | Version | Purpose                      |
| ---------------- | ------- | ---------------------------- |
| **Next.js**      | 15.4.1  | React framework with SSR/SSG |
| **React**        | 19.1.0  | UI library                   |
| **Tailwind CSS** | Latest  | Utility-first CSS framework  |
| **Shadcn/ui**    | Latest  | Modern UI component library  |
| **Firebase**     | 12.1.0  | Backend services (Firestore) |
| **Turbopack**    | Latest  | Fast bundler for development |
| **Playwright**   | 1.54.1  | End-to-end testing           |

## 📁 **Project Structure**

```
edukia-client/
├── 📁 app/              # Next.js App Router
│   ├── 📄 page.js       # Homepage
│   ├── 📁 about/        # About page
│   ├── 📁 admission/    # Admission section
│   ├── 📁 academics/    # Academic information
│   ├── 📁 notice/       # Notice listing
│   └── 📁 contact/      # Contact page
├── 📁 components/       # Reusable React components
│   ├── 📄 HeroSection.jsx
│   ├── 📄 NoticeEventsSection.jsx
│   ├── 📁 ui/           # Shadcn/ui components
│   └── 📁 Header/       # Navigation components
├── 📁 lib/              # Utilities and services
│   ├── 📄 firebase.js   # Firebase configuration
│   └── 📁 services/     # API services
├── 📁 public/           # Static assets
│   ├── 📁 images/       # College images
│   ├── 📁 notices/      # Notice PDFs
│   └── 📁 circulars/    # Admission circulars
└── 📁 docs/             # Documentation
```

## 🛠️ **Development Setup**

### **Prerequisites**

- **Node.js** 20+
- **npm**, **yarn**, or **pnpm**
- **Git** for version control

### **1. Clone the Repository**

```bash
git clone https://github.com/ImranParthib/edukia.git
cd edukia/edukia-client
```

### **2. Environment Setup**

```bash
# Copy environment template
cp .env.example .env.local

# Add your Firebase configuration to .env.local:
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### **3. Install Dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

### **4. Start Development Server**

```bash
npm run dev        # Standard development
npm run dev:fast   # With Turbopack (faster)
```

### **5. Open in Browser**

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🧪 **Testing**

### **Run Tests**

```bash
npm run test:e2e       # End-to-end tests
npm run test:quick     # Skip slow tests
npm run test:e2e:ui    # Interactive test UI
```

### **Linting & Formatting**

```bash
npm run lint           # Check code quality
npm run lint:fix       # Auto-fix issues
```

## 📦 **Build & Deploy**

### **Local Build**

```bash
npm run build          # Production build
npm run start          # Start production server
```

### **Deployment**

This project is configured for deployment on **Vercel**:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables** in Vercel dashboard
4. **Deploy automatically**

**Live Site:** [https://www.mmc.ac.bd/](https://www.mmc.ac.bd/)

## 🤝 **Contributing**

We welcome contributions to improve the Edukia College Management System! This project is developed for **Mohammadpur Mohila College** with specific business requirements.

### **📋 How to Contribute**

#### **1. Fork & Clone**

```bash
# Fork the repository on GitHub
git clone https://github.com/YOUR-USERNAME/edukia.git
cd edukia/edukia-client
```

#### **2. Create Feature Branch**

```bash
git checkout -b feature/your-feature-name
# Examples:
# feature/notice-filtering
# feature/mobile-navigation
# bugfix/homepage-layout
```

#### **3. Development Guidelines**

**Code Standards:**

- ✅ Follow **React best practices**
- ✅ Use **TypeScript** for type safety (when applicable)
- ✅ Write **responsive CSS** (mobile-first)
- ✅ Add **proper comments** for complex logic
- ✅ Follow **conventional commits** format

**Component Guidelines:**

- ✅ Use **Shadcn/ui components** when possible
- ✅ Create **reusable components** for common UI patterns
- ✅ Implement **proper error boundaries**
- ✅ Add **loading states** for async operations
- ✅ Ensure **accessibility** (ARIA labels, keyboard navigation)

**File Naming:**

- ✅ **PascalCase** for React components (`NoticeCard.jsx`)
- ✅ **kebab-case** for pages and utilities (`notice-page.js`)
- ✅ **Descriptive names** that explain purpose

#### **4. Testing Requirements**

```bash
# Before submitting PR:
npm run lint:fix       # Fix linting issues
npm run build          # Ensure build succeeds
npm run test:quick     # Run tests
```

#### **5. Commit & Push**

```bash
git add .
git commit -m "feat: add notice filtering functionality"
git push origin feature/your-feature-name
```

#### **6. Create Pull Request**

- **Base branch:** `development`
- **Clear title:** Describe the change
- **Description:** Explain what, why, and how
- **Screenshots:** For UI changes
- **Testing:** How you tested the changes

### **🎯 Areas for Contribution**

#### **Frontend Improvements:**

- 🎨 **UI/UX Enhancements** - Better design patterns
- 📱 **Mobile Optimization** - Improved responsive design
- ⚡ **Performance** - Optimization and caching
- 🔍 **SEO** - Meta tags and structured data
- ♿ **Accessibility** - WCAG compliance
- 🌐 **Internationalization** - Bengali language support

#### **Feature Additions:**

- 🔍 **Search Functionality** - Notice and content search
- 📊 **Analytics** - User behavior tracking
- 🔔 **Notifications** - Push notifications for notices
- 📅 **Event Calendar** - Academic calendar integration
- 💬 **Contact Forms** - Inquiry and feedback forms
- 📚 **Resource Library** - Academic materials

#### **Technical Improvements:**

- 🧪 **Test Coverage** - Unit and integration tests
- 📚 **Documentation** - Code and API documentation
- 🔧 **CI/CD** - Improved deployment pipeline
- 🛡️ **Security** - Security best practices
- 🚀 **Performance** - Core Web Vitals optimization

### **📞 Getting Help**

- **Documentation:** Check `/docs` folder for guides
- **Issues:** Create GitHub issue for bugs/features
- **Discussions:** Use GitHub Discussions for questions
- **Contact:** Reach out to project maintainers

## 📄 **License & Ownership**

### **Business License**

This project is developed for **commercial/business purposes** for **Mohammadpur Mohila College**.

**© 2025 Mohammadpur Mohila College. All rights reserved.**

### **Authorized Personnel**

- **Owner:** Mohammadpur Mohila College
- **Project Lead:** ImranParthib
- **Institution:** Mohammadpur Mohila College, Dhaka, Bangladesh

### **Usage Rights**

- ✅ **Educational Institution Use** - Allowed for educational purposes
- ✅ **Non-commercial Use** - Allowed with attribution
- ❌ **Commercial Distribution** - Requires written permission
- ❌ **Competitive Use** - Not allowed for competing institutions

### **Contributing Agreement**

By contributing to this project, you agree that:

1. Your contributions will be used for the benefit of Mohammadpur Mohila College
2. The project owner retains all rights to the codebase
3. Your contributions are made voluntarily and without expectation of compensation
4. You grant permission for your code to be used in the production system

For commercial licensing or partnership inquiries, contact:
📧 **mmcdhaka91@gmail.com**
📞 **+01953-007320, +01710-078815**

## 🏢 **About Mohammadpur Mohila College**

**Established:** 1991  
**Location:** Nurjahan Road, Mohammadpur, Dhaka-1207, Bangladesh  
**Mission:** Empowering women through quality education since 1991

### **Key Statistics**

- 👩‍🎓 **1600+ Students** across various programs
- 👨‍🏫 **50+ Faculty** members with advanced degrees
- 🏛️ **10 Departments** covering Sciences, Arts, and Commerce
- 🏆 **30+ Years** of educational excellence

## 🔗 **Links**

- **🌐 Live Website:** [https://www.mmc.ac.bd/](https://www.mmc.ac.bd/)
- **🔧 Admin Dashboard:** [https://edukia-server.vercel.app/](https://edukia-server.vercel.app/)
- **📱 GitHub Repository:** [https://github.com/ImranParthib/edukia](https://github.com/ImranParthib/edukia)
- **📧 Contact:** mmcdhaka91@gmail.com

---

**Built with ❤️ for education | Empowering women through technology**
