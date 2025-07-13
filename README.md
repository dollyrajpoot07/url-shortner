# 🔗 Custom URL Shortener (Frontend + Backend with API)

This is a full-stack URL shortener built with **Next.js**, which allows users to input long URLs and get shortened versions. It uses a custom API endpoint (`/api/shorten`) and handles redirection via dynamic routing (`/[id]`).

---

## 📁 Project Structure

src/
├── pages/
│ ├── api/
│ │ └── shorten.js // POST API to generate short ID
│ ├── [id].js // Dynamic route to handle redirection
│ └── index.js // Home page with input + result
├── components/
│ └── homes.js // Input box, button, result display
├── styles/
│ └── homes.module.css // Basic CSS for layout

---

## 🚀 Features

- ✅ Shortens any valid `http(s)` URL
- ✅ Redirects to the original link when you visit the shortened URL
- ✅ Built-in API via `/api/shorten`
- ✅ Uses `nanoid` for unique ID generation
- ✅ Stores mappings in memory (for now)

---

## 🧪 Local Development

### 1. Install dependencies
```bash
npm install
```
API Endpoints
POST /api/shorten

Request Body
{
  "url": "https://example.com"
}
Response
{
  "short": "http://localhost:3000/abc123"
}
<img width="668" height="150" alt="Screenshot 2025-07-13 at 11 57 09 PM" src="https://github.com/user-attachments/assets/dfe7b46d-16cf-4040-a584-c3daa86918ca" />
<img width="646" height="187" alt="Screenshot 2025-07-13 at 11 57 28 PM" src="https://github.com/user-attachments/assets/f099cdbd-ec5f-4d17-8a64-3282d4cc0a44" />

