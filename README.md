# Office 365 Employee Directory

A React web application that displays images and information of all employees from your Microsoft Office 365 tenant using Microsoft Graph API.

## Features

- Microsoft authentication using MSAL (Microsoft Authentication Library)
- Display all employees with their profile photos
- Show employee information including:
  - Display name
  - Job title
  - Department
  - Email address
  - Office location
- Responsive grid layout
- Automatic fallback to initials when photo is unavailable
- Beautiful gradient design with hover effects

## Prerequisites

Before you begin, ensure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- A Microsoft 365 tenant (Office 365)
- Administrator access to Azure AD to register an application

## Azure AD Application Setup

### Step 1: Register a new application in Azure AD

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in the following:
   - **Name**: Office 365 Employee Directory (or any name you prefer)
   - **Supported account types**: Select "Accounts in this organizational directory only"
   - **Redirect URI**: Select "Single-page application (SPA)" and enter `http://localhost:5173`
5. Click **Register**

### Step 2: Configure API permissions

1. In your app registration, go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Select **Delegated permissions**
5. Add the following permissions:
   - `User.Read` (should be added by default)
   - `User.Read.All` (required to read all users)
6. Click **Add permissions**
7. Click **Grant admin consent** for your organization (requires admin privileges)

### Step 3: Get your Application (client) ID and Tenant ID

1. In your app registration, go to **Overview**
2. Copy the **Application (client) ID**
3. Copy the **Directory (tenant) ID**

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TSC_ExpenseSheet
```

2. Install dependencies:
```bash
npm install
```

3. Configure authentication:
   - Open `src/authConfig.js`
   - Replace `YOUR_CLIENT_ID` with your Application (client) ID
   - Replace `YOUR_TENANT_ID` with your Directory (tenant) ID

```javascript
export const msalConfig = {
  auth: {
    clientId: "your-client-id-here",
    authority: "https://login.microsoftonline.com/your-tenant-id-here",
    redirectUri: window.location.origin,
  },
  // ...
};
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the application:

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
TSC_ExpenseSheet/
├── src/
│   ├── components/
│   │   ├── EmployeeDirectory.jsx    # Main employee display component
│   │   └── EmployeeDirectory.css    # Employee directory styles
│   ├── services/
│   │   └── employeeService.js       # Microsoft Graph API service
│   ├── App.jsx                      # Main app component with auth
│   ├── App.css                      # App styles
│   ├── authConfig.js                # MSAL configuration
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global styles
├── package.json
└── README.md
```

## Usage

1. Open the application in your browser
2. Click "Sign In with Microsoft"
3. Authenticate with your Office 365 credentials
4. Grant consent for the required permissions (if prompted)
5. View all employees in your organization with their photos

## Troubleshooting

### Authentication Issues

- **Error: "AADSTS50011: The reply URL specified in the request does not match"**
  - Make sure the redirect URI in Azure AD matches your application URL exactly
  - For development, use `http://localhost:5173`

- **Error: "Insufficient privileges to complete the operation"**
  - Ensure `User.Read.All` permission is granted
  - Make sure admin consent has been granted for your organization

### No Photos Displayed

- Some users may not have profile photos in Office 365
- The application will display initials as a fallback
- Administrators can upload photos in the Microsoft 365 admin center

### Rate Limiting

- Microsoft Graph API has rate limits
- If you have many users, the application fetches photos in parallel
- Consider implementing pagination for very large organizations

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and development server
- **MSAL** (@azure/msal-browser, @azure/msal-react) - Microsoft authentication
- **Microsoft Graph Client** (@microsoft/microsoft-graph-client) - API client
- **CSS** - Styling with modern flexbox and grid layouts

## Security Considerations

- Access tokens are stored in session storage
- The application only requests necessary permissions
- All API calls are made client-side using the user's credentials
- No sensitive data is stored locally

## License

MIT

## Support

For issues and questions:
- Check Azure AD application configuration
- Review browser console for error messages
- Ensure all required permissions are granted
- Verify your Office 365 tenant is properly configured

## Future Enhancements

Potential improvements:
- Add search and filter functionality
- Implement pagination for large organizations
- Add department-based filtering
- Include org chart visualization
- Export employee list to CSV
- Dark mode support
