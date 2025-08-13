# tmbv-site

> Personal site and blog for [tmbv.me](https://www.tmbv.me/) built with Mintlify

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ftmbv.me)](https://tmbv.me)
[![Built with Mintlify](https://img.shields.io/badge/Built%20with-Mintlify-blue)](https://mintlify.com)

## 📖 About

This repository contains the source code for my personal website and blog, hosted at **[tmbv.me](https://www.tmbv.me/)**. The site is built using [Mintlify](https://mintlify.com/), a modern documentation platform that provides beautiful, fast, and customizable documentation experiences.

## 🏗️ Architecture

```text
tmbv/
├── content/          # Documentation and content files (Mintlify site)
├── app/              # App-level logic and components
├── README.md         # Project documentation
└── ...
```

| Directory      | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| **`content/`** | Contains all documentation and content files for the Mintlify site |
| **`app/`**     | Contains app-level logic and components                            |

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**

    ```bash
    git clone git@github.com:temrb/tmbv.git
    cd tmbv
    ```

2. **Install Mintlify** (choose one option)

    **Option A: Global installation**

    ```bash
    npm install -g mint
    ```

    **Option B: Use npx (no installation required)**

    ```bash
    # Skip to step 3 and use `npx mint dev` instead
    ```

3. **Start the development server**

    ```bash
    cd content
    mint dev
    # or if using npx: npx mint dev
    ```

4. **Open your browser**

    The site will automatically open at `http://localhost:3000/` with hot-reload enabled for real-time editing.

5. **Start editing**

    Make changes to files in the `content/` directory and see them reflected instantly in your browser.

## 🌐 Deployment

The site is automatically deployed to **[tmbv.me](https://www.tmbv.me/)** through Mintlify's hosting platform.

### Deploy Your Own

1. Create a [Mintlify account](https://mintlify.com/)
2. Connect your GitHub repository
3. Follow the onboarding instructions to deploy your site

## 📚 Resources

- **[Mintlify Documentation](https://mintlify.com/docs)** - Complete guide for Mintlify features and configuration
- **[Mintlify GitHub](https://github.com/mintlify/mint)** - Source code and community discussions
- **[Live Site](https://tmbv.me)** - Visit the deployed website

---
