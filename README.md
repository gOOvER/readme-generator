# Pelican Eggs README Generator

A simple, modern web-based tool to generate professional README.md files for [Pelican Eggs](https://github.com/pelican-eggs).

## 🚀 Features

- **Easy-to-use Interface**: Clean, modern UI for generating READMEs
- **Live Preview**: See your README in real-time as you type
- **Markdown & Rendered View**: Toggle between raw markdown and rendered preview
- **GitHub Alerts Support**: Built-in support for `[!IMPORTANT]`, `[!NOTE]`, `[!TIP]`, `[!WARNING]` alerts
- **Port Table Generator**: Easily add server ports in table format
- **Custom Sections**: Add unlimited custom sections to your README
- **Copy & Download**: One-click copy to clipboard or download as file
- **Responsive Design**: Works on desktop and mobile devices

## 📦 Deployment

### Cloudflare Pages

1. Fork or clone this repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Create a new project and connect your repository
4. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root)
5. Deploy!

### Manual Deployment

Simply upload the following files to any static web hosting:
- `index.html`
- `style.css`
- `app.js`

## 🛠️ Development

No build process required! Just open `index.html` in your browser.

```bash
# Clone the repository
git clone https://github.com/gOOvER/readme-generator.git

# Open in browser
cd readme-generator
# Open index.html in your browser
```

## 📝 Usage

1. Fill in the **Egg Name** and **Description**
2. Add **Server Ports** as needed
3. Optionally add **Recommended Settings**, **Custom Sections**, and **Notes**
4. Add **Additional Links** if needed
5. Click **"README Generieren"** to generate
6. Copy to clipboard or download the README.md file

## 📄 Output Format

The generated README follows the Pelican Eggs format:

```markdown
# [Egg Name](https://example.com)

Description of the egg...

## Recommended server settings

### Minimum RAM

This server requires about 4096M to run.

## Server Ports

> [!IMPORTANT]
> Port warning message here

| Port    | Default |
|---------|--------|
| Game    | 25565  |
| Query   | 27015  |

## Additional Links

- [Wiki](https://example.com/wiki)
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Pelican Panel](https://pelican.dev/)
- [Pelican Eggs Repository](https://github.com/pelican-eggs)