# Next.js Pages Router Blog App with MongoDB

A modern blog application built with **Next.js Pages Router** and **MongoDB**, featuring dynamic routes, markdown posts, and server-side data fetching.

---

## 🚀 Features

- Built with **Next.js Pages Router**
- **Markdown-based posts** rendering with `react-markdown`
- **MongoDB integration** for storing posts and contact messages
- Dynamic routes for blog posts: `/posts/[slug]`
- Responsive design with CSS modules
- Syntax highlighting for code blocks via `react-syntax-highlighter`
- Contact form connected to MongoDB
- Image optimization using Next.js `<Image>` component

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yuriiforge/NextJS_Blog-App
cd nextjs-pages-router-blog
```

2. Install dependencies:

```bash
npm install
```

3. Create .env.local file with MongoDB connection:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog?retryWrites=true&w=majority

4. Run the development server:

```bash
npm run dev
```
