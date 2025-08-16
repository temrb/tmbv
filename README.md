# tmbv

> Personal site and blog for [tmbv.me](https://www.tmbv.me/) - Monorepo with shared configurations

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ftmbv.me)](https://tmbv.me)
[![Built with Mintlify](https://img.shields.io/badge/Built%20with-Mintlify-blue)](https://mintlify.com)

## 📖 About

This monorepo contains the source code for my personal website and blog, hosted at **[tmbv.me](https://www.tmbv.me/)**. It includes both a Mintlify-based content site and a Next.js web application with shared configurations.

## 🏗️ Architecture

```text
tmbv/
├── apps/             # Applications
│   ├── content/          # Documentation and content files (Mintlify site)
│   └── web/              # Next.js web application
├── packages/         # Shared packages and configurations
│   ├── eslint-config/    # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
├── package.json      # Root workspace configuration
└── ...
```

| Directory           | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| **`apps/content/`** | Contains all documentation and content files for the Mintlify site |
| **`apps/web/`**     | Next.js web application                                            |
| **`packages/`**     | Shared packages for ESLint, TypeScript, and other configurations   |

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) (recommended package manager)

### Local Development

1. **Clone the repository**

    ```bash
    git clone git@github.com:temrb/tmbv.git
    cd tmbv
    ```

2. **Install dependencies**

    ```bash
    bun install
    ```

3. **Start development servers**

    **For the web application:**

    ```bash
    bun run dev
    # or specifically: bun run --filter @tmbv/web dev
    ```

    **For the content site (Mintlify):**

    ```bash
    cd apps/content
    npx mint dev
    ```

4. **Available scripts**
    - `bun run dev` - Start web development server
    - `bun run build` - Build web application
    - `bun run lint` - Run ESLint across all workspaces
    - `bun run format` - Format code with Prettier
    - `bun run clean` - Clean all node_modules and build artifacts

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
