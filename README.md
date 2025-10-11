# Company Vault - Filter Fast Find Everything 🏢

A responsive web application for discovering companies across different industries and locations. Users can efficiently filter, search, and sort companies to find exactly what they're looking for.

## 📋 Features

- **Industry Filtering**: Browse companies by specific industry categories
- **Location-based Search**: Find companies in particular geographic locations  
- **Company Search**: Search for companies by name
- **Smart Sorting**: Sort company listings alphabetically
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with React and Material-UI for smooth user experience

## 🛠️ Tech Stack

### Frontend
- **React.js**: Modern JavaScript framework for building user interfaces
- **Material-UI**: Component library for consistent and beautiful styling
- **Responsive Design**: Mobile-first approach for all screen sizes

### Backend Options
- **JSON Server**: Currently used for rapid development with built-in REST API
- **Express.js**: Alternative backend option (previously implemented)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18.14.0 or later)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sravancipher/CompanyVault
cd company-vault
```

2. **Install dependencies**
```bash
npm install
```

3. **Install JSON Server globally** (if not already installed)
```bash
npm install -g json-server
```

### Running the Application

#### Start JSON Server (Backend)
```bash
json-server --watch db/db.json --port 5000
```
This will start the JSON Server on `http://localhost:5000` with the following API endpoints:

| HTTP Method | URL            | Description              |
| ----------- | -------------- | ------------------------ |
| GET         | `/companies`   | Get all companies        |
| GET         | `/companies/1` | Get company with id=1    |
| POST        | `/companies`   | Add a new company        |
| PUT/PATCH   | `/companies/1` | Update company with id=1 |
| DELETE      | `/companies/1` | Delete company with id=1 |

#### Start React Application (Frontend)
In a new terminal window:
```bash
npm start
```
This will start the React development server on `http://localhost:3000`.

**Alternative JSON Server Options:**
```bash

## 📦 Building for Production

Create a production build:
```bash
npm run build
```
This generates a `build` folder with production-ready files.

## 🌐 Deployment

### Frontend Deployment (Netlify) - Dashboard Method

1. **Build your project**
```bash
npm run build
```

2. **Deploy via Netlify Dashboard**
   - Visit [Netlify Dashboard](https://app.netlify.com)
   - Sign in to your account
   - Click "New site from Git" or drag & drop the `build` folder
   - If using Git integration:
     - Connect your GitHub/GitLab/Bitbucket repository
     - Set build command: `npm run build`
     - Set publish directory: `build`
     - Click "Deploy site"
   - Your React app will be live with a generated URL

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Backend Deployment (Vercel) - Dashboard Method

1. **Prepare for Vercel Deployment**
   - The `api/companies.js` file is already configured for Vercel deployment
   - This file serves as the serverless function endpoint

2. **Deploy via Vercel Dashboard**
   - Visit [Vercel Dashboard](https://vercel.com/dashboard)
   - Sign in to your account
   - Click "New Project"
   - Import your GitHub/GitLab/Bitbucket repository
   - Vercel will automatically detect the project settings
   - Click "Deploy"
   - Your JSON API will be available at `https://company-vault.vercel.app/api/companies`

3. **Automatic Deployments**
   - Every push to your main branch will trigger automatic redeployment
   - Monitor deployments in the Vercel dashboard

## 📁 Project Structure

```
company-vault/
├── public/
│   ├── index.html
│   └── ...
├── api/
│   └── companies.js     # Vercel serverless function
├── src/
│   ├── components/
│   │   ├── CompanyList.jsx
│   │   ├── FilterBar.jsx
│   │   └── SearchBar.jsx
│   └── App.js
├── db/
│   └── db.json          # JSON Server database
├── package.json
└── README.md
```

## 🗄️ Data Structure

The `db/db.json` file should follow this structure:
```json
{
  "companies": [
    {
      "id": 1,
      "name": "Company Name",
      "industry": "Technology",
      "location": "New York",
      "description": "Company description",
      "website": "https://example.com"
    }
  ]
}
```

## 🔧 API Endpoints

### Local Development (JSON Server)
When JSON Server is running locally:
- **GET** `/companies` - Retrieve all companies

### Production (Vercel)
When deployed on Vercel:
- **GET** `[https://company-vault.vercel.app/api/companies]` - All endpoints through serverless function

## ⚙️ Environment Configuration

### Development
- JSON Server runs on `http://localhost:5000`
- React development server runs on `http://localhost:3000`

### Production
- Frontend: Deployed on Netlify
- Backend API: Deployed on Vercel as serverless functions

## 🔄 Development Workflow

1. **Local Development**
   - Start JSON Server: `json-server --watch db/db.json --port 5000`
   - Start React app: `npm start`
   - Make your changes and test locally

2. **Deployment**
   - Push changes to your repository
   - Netlify automatically rebuilds and deploys frontend
   - Vercel automatically redeploys API functions

## 🆘 Support

If you encounter any issues:
1. **Local Development:**
   - Check that all dependencies are properly installed
   - Ensure JSON Server is running before starting the React app
   - Verify your `db/db.json` file structure matches the expected format
   - Configure frontend API calls to target local JSON Server endpoint (http://localhost:3000/companies) for development and testing
   - Switch frontend API configuration to point to deployed Vercel serverless function endpoint (https://company-vault.vercel.app/api/companies) in production

2. **Deployment Issues:**
   - **Netlify**: Check build logs in the Netlify dashboard
   - **Vercel**: Monitor deployment status in Vercel dashboard
   - Ensure all environment variables are properly configured


```bash
# Clone and setup
git clone <your-repository-url>
cd company-vault
npm install

# Development
json-server --watch db/db.json --port 5000    # Terminal 1
npm start                         # Terminal 2

# Build for production
npm run build
```

---

**Live Demo**: 
- Frontend: [https://company-vault.netlify.app/]
- API: [https://company-vault.vercel.app/api/companies]
