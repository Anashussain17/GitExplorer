
# 🚀 Git Explorer

**Git Explorer** is a React-based web application that allows users to search for GitHub profiles and explore their public repositories using the GitHub REST API.  
It’s built with a modular component-based structure for scalability and easy maintenance.

---

## 🧭 Overview

Git Explorer provides a simple and interactive way to look up GitHub users and their repositories.  
Enter a GitHub username, and the app displays:

- 👤 Profile information (name, avatar, location, etc.)
- 📊 Follower and following counts
- 📦 Public repositories with links
- 🧭 Easy navigation between Home, About, and Contact pages

This project demonstrates **API integration**, **React component architecture**, and **responsive design** with modern frontend tools.

---

## ✨ Features

- 🔍 Search GitHub users by username  
- 👥 View followers, following, and public repo count  
- 📂 List user repositories with “View Repo” buttons  
- 🧩 Modular React components  
- 📱 Responsive Bootstrap design  
- 🧭 Multi-page navigation using React Router  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js (Vite or CRA) |
| **Styling** | CSS, Bootstrap |
| **Routing** | React Router DOM |
| **API** | [GitHub REST API v3](https://docs.github.com/en/rest) |
| **Build Tool** | npm / Node.js |
| **Version Control** | Git & GitHub |

---

## 📦 Folder Structure

```

06-github-users-app/
│
├── build/                     # Production build (after npm run build)
├── node_modules/              # Dependencies
├── public/                    # Static files
│
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Search.js
│   │   ├── Useritem.js
│   │   └── Users.js
│   │
│   ├── pages/                 # Main pages
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── UserPage.js
│   │
│   ├── styles/                # CSS files
│   │   ├── Navbar.css
│   │   └── App.css
│   │
│   ├── App.js                 # Root component
│   ├── App.css
│   ├── index.js               # Entry point
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/git-explorer.git
   cd git-explorer
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   or if you’re using Vite:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` (or the URL provided in terminal).

---

## 🔑 API Usage

This project uses the **GitHub REST API** for fetching user and repo data.

Endpoints used:

```bash
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos
```

No API key is needed for public data, but GitHub rate limits unauthenticated requests.

---

## 🧩 Components Summary

| Component     | Description                                               |
| ------------- | --------------------------------------------------------- |
| `Navbar.js`   | Top navigation bar with links to Home, About, and Contact |
| `Search.js`   | Input field for searching GitHub users                    |
| `Users.js`    | Displays list of fetched users                            |
| `Useritem.js` | Card layout for individual user profile                   |
| `UserPage.js` | Detailed user info with repositories                      |
| `Footer.js`   | Footer displayed on every page                            |

---

## 🖼️ Screenshots

### 🔹 Home Page

Displays a grid of GitHub users fetched from the API.

![Home Screenshot](<img width="1357" height="594" alt="image" src="https://github.com/user-attachments/assets/82d936cf-26d8-47d8-bb6b-ddf5ad931033" />
)

### 🔹 User Profile

Shows profile details and list of repositories.

![User Profile Screenshot](<img width="529" height="572" alt="image" src="https://github.com/user-attachments/assets/8968ba85-3af5-448a-a4e9-06587ffd64f6" />
)

---

## 🧠 Learning Goals

This project demonstrates:

* Fetching data from external APIs
* Handling async calls in React (`fetch` or `axios`)
* Props and state management
* Component composition
* React Router navigation
* Responsive layout using Bootstrap

---

## 🤝 Contributing

Contributions are welcome!
Follow these steps:

1. Fork this repo
2. Create a new branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Added new feature"
   ```
4. Push and open a Pull Request



## 👨‍💻 Author

**Anas Hussain**
💼 Frontend Developer
📧 [[anashussain1702@gmail.com](mailto:anashussain1702@gmail.com)]
🌐 [anashussain.xyz]


