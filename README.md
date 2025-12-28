# Pelican Eggs README Generator

A modern, web-based tool to generate professional README.md files for [Pelican Eggs](https://github.com/pelican-eggs).

Built with **Vue 3 + Vite** for a fast, reactive experience.

## 🚀 Features

- **Live Preview**: See your README in real-time as you type
- **Markdown & Rendered View**: Toggle between raw markdown and rendered preview
- **GitHub Alerts**: Built-in support for `[!IMPORTANT]`, `[!NOTE]`, `[!TIP]`, `[!WARNING]`
- **Port Table Generator**: Easily add server ports in table format
- **Custom Sections**: Add unlimited custom sections
- **Copy & Download**: One-click copy or download

## 📦 Deployment on Cloudflare Pages

### Automatic Deployment

1. Fork/clone this repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Create a new project and connect your repository
4. Configure build settings:
   - **Framework preset**: Vue
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy!

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📝 Usage

1. Fill in the **Egg Name** and **Description**
2. Add **Server Ports** as needed
3. Optionally add **Recommended Settings**, **Custom Sections**, and **Notes**
4. Add **Additional Links** if needed
5. Click **Copy** or **Download** to get your README.md

## 🔗 Links

- [Pelican Panel](https://pelican.dev/)
- [Pelican Eggs Repository](https://github.com/pelican-eggs)

## 📜 License

MIT License
