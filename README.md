# AppNep Landing Page

A modern, fast, and fully responsive landing page for **AppNep** (`appnep.com`). This webpage is optimized for conversion, encouraging visitors to download the app and watch the official YouTube tutorial videos.

## 🚀 Features

- **Modern SaaS Aesthetics**: Styled with clean gradients (indigo to cyan), soft glassmorphic navbar effects, rounded cards, and smooth hover micro-animations.
- **Mobile-First Responsive Design**: Works seamlessly across desktops, tablets, and smartphones.
- **Easy Link Customization**: Unified configuration at the top of the JS file updates all download CTAs and YouTube redirects automatically.
- **Interactive Contact Form**: A beautiful popup contact modal with form validation and custom success animations.
- **SEO & Social Optimization**: Built-in OpenGraph and Twitter card meta tags for link preview optimization.

## 📂 Repository Structure

```text
appnep.com/
├── index.html         # Core webpage structure, semantic sections, and SEO tags
├── styles.css         # Modern styling layout (Flexbox/Grid), tokens, and transitions
├── app.js             # Configuration, modal transitions, and mobile menu script
└── assets/
    └── hero-mockup.png # AI-generated smartphone mockup displaying the app UI
```

## ⚙️ Configuration & Customization

To update the destination URLs for the app download or the YouTube channel:
1. Open [app.js](file:///d:/Bishnu/Onedrive/App%20Dev/appnep.com/app.js).
2. Change the links inside the `CONFIG` object at the top:
   ```javascript
   const CONFIG = {
       APP_LINK: "https://appnep.com/app",    // Your destination App URL
       YOUTUBE_LINK: "https://youtube.com/"   // Your destination YouTube URL
   };
   ```
3. Save the file. All references in the header, body, cards, and footer will update automatically.

## 💻 Local Development

Simply double-click `index.html` to open it in your browser, or start a local static server:
```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx http-server
```
Then navigate to `http://localhost:8080` in your web browser.
