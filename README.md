# 🚀 TSC Business Intelligence Platform

AI-Powered business operations platform for The Solution Consulting FZCO, featuring autonomous project management, employee efficiency tracking, and comprehensive business process automation.

## 🎯 Platform Vision

A modular, AI-driven platform that covers the entire business lifecycle:

### **Current Modules:**
- ✅ **Employee Management** - Profiles, org chart, directory
- ✅ **Photo Management** - Microsoft Graph integration for profile photos
- 🔄 **AI Project Manager** - Autonomous task assignment and monitoring (in development)

### **Planned Modules:**
- 🔄 **Employee Efficiency Tracking** - Real-time performance analytics
- 🔄 **Pre-Sales** - Lead management, proposal generation
- 🔄 **Sales Pipeline** - CRM, forecasting, AI insights
- 🔄 **Project Management** - Planning, scoping, resource allocation
- 🔄 **Documentation** - AI-powered document generation
- 🔄 **Scoping & Estimation** - Requirements analysis, effort estimation

## 🏗️ Architecture

### **Frontend:**
- HTML/CSS/JavaScript (Static Web App)
- React (future migration)
- Deployed on Azure Static Web Apps
- Authentication: Azure AD / Microsoft Entra ID

### **Backend:**
- Azure Functions (Serverless APIs)
- RESTful architecture
- CI/CD via GitHub Actions

### **Data Layer (Hybrid - Cost Optimized):**
```
📊 Azure Cosmos DB (FREE TIER)
   ├── Employees (extended profiles)
   ├── Projects
   ├── Tasks
   └── AI Decisions

📝 Azure Table Storage ($1-2/month)
   ├── Work Logs
   ├── Activity Events
   └── Metrics History

📁 Blob Storage ($5/month)
   ├── Documents
   ├── Profile Photos (Microsoft Graph)
   └── Receipts

⚡ Redis Cache (FREE TIER)
   └── Real-time sessions
```

### **AI Engine:**
- **Claude API** (Anthropic) - Main AI brain
- Autonomous decision making
- Predictive analytics
- Natural language processing
- Document generation

### **Integrations:**
- Microsoft Dynamics 365 HR
- Microsoft Dynamics 365 F&O
- Microsoft Dynamics 365 CRM
- Microsoft 365 (Calendar, Teams, Email)
- Microsoft Graph API (profiles, photos)
- Azure DevOps
- GitHub

## 💰 Cost Estimate (Optimized)

| Service | Monthly Cost | Notes |
|---------|-------------|-------|
| Azure Static Web Apps | $0-9 | Free tier available |
| Azure Functions | $10-50 | Serverless, pay per use |
| **Cosmos DB** | **$0** | **FREE TIER!** |
| **Table Storage** | **$1-2** | **Super cheap** |
| **Blob Storage** | **$5** | Document storage |
| **Redis Cache** | **$0** | **FREE TIER!** |
| Claude API | $50-200 | AI operations |
| **Total** | **~$66-266/month** | |

**Per employee (50 users): ~$1.50-5/month** 🎉

**Cost Savings vs SQL Server: ~$50-100/month!**

## 🚀 Quick Start

### Prerequisites:
- Azure subscription
- Azure AD tenant (already configured)
  - Client ID: `68d7fcd3-6db4-427e-a2be-f1c8d914b555`
  - Tenant ID: `ce5c9e34-9906-4081-8a98-69ec394244f1`
- GitHub account
- Node.js 18+ (for local development)

### 1. Clone Repository
```bash
git clone https://github.com/SajeerAssiz/TSC_ExpenseSheet.git
cd TSC_ExpenseSheet
```

### 2. Current Deployment (GitHub Pages)
Currently deployed at: https://sajeerassiz.github.io/TSC_ExpenseSheet/

### 3. Deploy to Azure (Next Step)

#### Create Azure Static Web App:
```bash
az staticwebapp create \
  --name tsc-business-platform \
  --resource-group your-resource-group \
  --location "East US 2" \
  --source https://github.com/SajeerAssiz/TSC_ExpenseSheet \
  --branch main \
  --app-location "/" \
  --login-with-github
```

#### Create Cosmos DB (FREE TIER):
```bash
az cosmosdb create \
  --name tsc-platform-db \
  --resource-group your-resource-group \
  --default-consistency-level Session \
  --enable-free-tier true \
  --locations regionName="East US 2" failoverPriority=0
```

#### Create Storage Account:
```bash
az storage account create \
  --name tscplatformstorage \
  --resource-group your-resource-group \
  --location "East US 2" \
  --sku Standard_LRS
```

### 4. Update Azure AD Redirect URI

Add new redirect URI: `https://tsc-business-platform.azurestaticapps.net`

### 5. Configure GitHub Secrets

Add these secrets to GitHub repository Settings → Secrets:
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - From Azure Static Web Apps
- `COSMOS_DB_CONNECTION_STRING` - From Cosmos DB
- `STORAGE_CONNECTION_STRING` - From Storage Account
- `CLAUDE_API_KEY` - From Anthropic (future)

### 6. Auto-Deploy with GitHub Actions

✅ GitHub Actions workflow already configured!
- File: `.github/workflows/azure-static-web-apps.yml`
- Triggers: Push to main or any `claude/*` branch
- Auto-deploys to Azure Static Web Apps

```bash
git add .
git commit -m "Deploy to Azure"
git push origin main
```

## 📁 Project Structure

```
TSC_ExpenseSheet/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # CI/CD automation
├── data/
│   └── employees.json                    # Employee data (JSON storage)
├── src/                                  # React app (future)
├── api/                                  # Azure Functions (future)
├── index.html                            # Main employee directory
├── profile-v*.html                       # Profile page versions (iterative development)
│   ├── profile-v10.html                 # Latest stable version
│   └── profile-v11.html                 # Work in progress
└── README.md                             # This file
```

## 🤖 AI Capabilities (Planned)

### Autonomous Project Manager:
- ✅ Intelligent task assignment based on skills and workload
- ✅ Real-time workload balancing across team
- ✅ Predictive risk detection (deadline misses, overload)
- ✅ Automated decision making with explanation
- ✅ Performance coaching and recommendations

### Analytics & Insights:
- ✅ Employee efficiency scoring
- ✅ Team productivity trends
- ✅ Project health monitoring
- ✅ Resource optimization
- ✅ Predictive forecasting

### Natural Language:
- ✅ AI chatbot for HR questions
- ✅ Document generation (proposals, SOWs)
- ✅ Report summarization
- ✅ Policy interpretation

## 🔐 Security

- ✅ Azure AD authentication
- ✅ Microsoft Graph API (secure data access)
- ✅ Role-based access control (RBAC)
- ✅ Data encryption at rest and in transit
- ✅ API key management via Azure Key Vault (planned)
- ✅ Audit logging

## 📊 Development Roadmap

### ✅ Phase 1: Foundation (Completed)
- [x] Employee profiles
- [x] Organization hierarchy visualization
- [x] Photo upload (Microsoft Graph)
- [x] Azure AD authentication
- [x] GitHub Pages deployment
- [x] Multiple profile page iterations (v1-v11)

### 🔄 Phase 2: Azure Migration (Current - Week 1-2)
- [x] GitHub Actions CI/CD setup
- [ ] Deploy to Azure Static Web Apps
- [ ] Cosmos DB setup (FREE tier)
- [ ] Table Storage integration
- [ ] Blob Storage for documents
- [ ] Update redirect URIs

### 🔄 Phase 3: Data Architecture (Week 3-4)
- [ ] Migrate from JSON to Cosmos DB
- [ ] Employee extended profiles
- [ ] Project and task data models
- [ ] Work logging system
- [ ] Basic dashboards

### 🚀 Phase 4: AI Project Manager (Week 5-8)
- [ ] Claude API integration
- [ ] Task assignment algorithm
- [ ] Autonomous monitoring engine
- [ ] Risk detection system
- [ ] Performance analytics

### 🚀 Phase 5: Pre-Sales Module (Week 9-12)
- [ ] Lead management
- [ ] AI proposal generation
- [ ] Pipeline visualization
- [ ] Forecasting
- [ ] D365 CRM integration

### 🚀 Phase 6: Sales & PM (Week 13-20)
- [ ] Sales pipeline management
- [ ] Project planning & tracking
- [ ] Resource allocation
- [ ] Budget management
- [ ] D365 F&O integration

### 🚀 Phase 7: Documentation & Scoping (Week 21-24)
- [ ] Requirements gathering
- [ ] AI-powered SOW generation
- [ ] Effort estimation
- [ ] Documentation templates
- [ ] Knowledge base

## 🔄 Version History

### Current Profile Page Versions:
- **v1-v5**: Initial iterations, authentication fixes
- **v6**: Empty field validation
- **v7**: User.ReadWrite.All permission scope
- **v8**: Extended profile fields (birthday, skills, etc.)
- **v9**: Read-only field fixes, collapsible debug console
- **v10**: Only writable fields (latest stable)
- **v11**: JSON storage approach (in development)

## 🤝 D365 Integration Strategy

### Data Flow:
```
Employee Hub (Custom UI)
    ↓
Azure Functions (Integration Layer)
    ↓
┌─────────────┬──────────────┬─────────────┐
│  D365 HR    │  Cosmos DB   │  Claude AI  │
│  (Read)     │  (Read/Write)│  (Analyze)  │
└─────────────┴──────────────┴─────────────┘
```

### What Comes from D365:
- Employee master data (name, ID, email)
- Organization structure
- Position information
- Employment status

### What Stays in Platform:
- Extended profile fields
- Task assignments (AI-generated)
- Work logs and metrics
- AI decisions and insights
- Custom workflows

## 🛠️ Technologies

### Current:
- HTML/CSS/JavaScript
- Microsoft Graph API
- MSAL (Microsoft Authentication)
- GitHub Pages
- JSON data storage

### Planned:
- React (frontend framework)
- Azure Functions (Node.js/TypeScript)
- Azure Cosmos DB (NoSQL)
- Azure Table Storage
- Azure Blob Storage
- Claude API (Anthropic)
- Azure Static Web Apps

## 📞 Support

**Primary Contact**: assiz@thesolutionglobal.com

**Development Team**: The Solution Consulting FZCO

## 📝 License

Proprietary - The Solution Consulting FZCO

## 🎯 Current Status

**Version**: 0.2-alpha
**Last Updated**: October 31, 2025
**Current Branch**: `claude/react-office365-employees-011CUdjGWThHpxZ95PVjAdZM`
**Status**: Active Development
**Next Milestone**: Azure Static Web Apps deployment with Cosmos DB

## 🌟 Key Differentiators

1. **AI-First Approach**: Claude AI at the core, not just an add-on
2. **Hybrid Data Strategy**: Cost-optimized mix of Cosmos DB, Table Storage, Blob Storage
3. **Modular Architecture**: Each business area is a separate, scalable module
4. **D365 Integration**: Leverages existing Microsoft investments
5. **Autonomous Operations**: AI makes decisions, not just recommendations
6. **Cost Effective**: ~$1.50-5 per employee per month

---

**Built with ❤️ by The Solution Consulting FZCO**
**Powered by Claude AI 🤖**
**Deployed on Microsoft Azure ☁️**
