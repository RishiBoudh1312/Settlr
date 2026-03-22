# 💰 Settlr - Split Bills, Stay Friends

<div align="center">

![Settlr](https://img.shields.io/badge/Settlr-v0.1.0-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-cyan?style=for-the-badge&logo=react)
![Convex](https://img.shields.io/badge/Convex-1.23.0-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern expense-splitting application that makes managing shared bills effortless and transparent.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

**Settlr** is a beautifully designed web application that simplifies expense splitting and settlement tracking among friends, roommates, and groups. Instead of playing mental math games and keeping track of complex debts, Settlr handles all the calculations automatically, letting you focus on what matters—enjoying time with people you care about.

Whether you're splitting rent with roommates, managing shared trip expenses, or tracking debts between friends, Settlr provides an intuitive interface and intelligent settlement suggestions to make financial management stress-free.

---

## ✨ Features

### 💳 Smart Expense Tracking
- **Flexible Split Types**: Divide expenses equally, by percentage, or with exact amounts
- **Multiple Categories**: Organize expenses (Food, Utilities, Entertainment, etc.)
- **Real-time Sync**: All changes sync instantly across devices
- **Date Tracking**: Keep historical records of all transactions

### 👥 Group Management
- **Create Groups**: Organize expenses with roommates, friend groups, or trip participants
- **Role-Based Access**: Admin and member roles for better control
- **Group Analytics**: View spending patterns and balance summaries per group
- **Member Management**: Easy add/remove members from groups

### 📊 Balance & Settlement
- **Smart Debt Calculation**: Automatically calculates who owes whom using optimized algorithms
- **One-to-One Settlements**: Quickly settle debts between two users
- **Group Settlements**: Manage contributions within groups
- **Payment Tracking**: Mark payments as complete and track settlement history

### 💭 Intelligent Dashboard
- **Balance Summary**: See your net balance at a glance
- **Expense Overview**: Visualize spending patterns with interactive charts
- **Recent Activity**: Track recent expenses and settlements
- **Quick Actions**: Fast-access buttons for common tasks

### 📱 Contacts & Friends
- **Contact Management**: Keep track of people you frequently split with
- **Quick Add**: Create expenses with saved contacts instantly
- **Group Contacts**: View contact details and settlement status

### ⏰ Smart Notifications
- **Payment Reminders**: Get reminded of pending settlements
- **Spending Insights**: Weekly summaries of your spending habits
- **Email Notifications**: Get important updates via email

### 🎨 Modern UI/UX
- **Beautiful Design**: Modern, clean interface with smooth animations
- **Dark Mode Support**: Eye-friendly theme switching
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility First**: Built with accessibility standards in mind

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.2.3](https://nextjs.org/) - React framework with server components
- **UI Library**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Styling**: 
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Tailwind Merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes
- **Component Library**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon system
- **Charts**: [Recharts](https://recharts.org/) - Visualization library
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form validation
- **Animations**: [Lenis](https://lenis.darkroom.dev/) - Smooth scrolling, [tw-animate-css](https://github.com/themesberg/tw-animate-css) - TailwindCSS animations
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Date Handling**: [date-fns](https://date-fns.org/) - Modern date utility library
- **Loading States**: [React Spinners](https://www.react-spinners.com/) - Loading indicators

### Backend & Database
- **Backend**: [Convex](https://www.convex.dev/) - Realtime TypeScript backend-as-a-service
  - Real-time database synchronization
  - Server-side functions (mutations & queries)
  - Built-in authentication support
  - Optimized indexing for fast queries

### Authentication & Security
- **Auth Solution**: [Clerk](https://clerk.dev/) - Modern authentication platform
  - Multi-factor auth support
  - Magic link authentication
  - Social login integration
  - User management dashboard

### External Services
- **Email**: [Resend](https://resend.com/) - Developer-first email API
- **Webhooks**: [Svix](https://www.svix.com/) - Webhooks as a service
- **Background Jobs**: [Inngest](https://www.inngest.com/) - Serverless event-driven processing
  - Payment reminders
  - Spending insights
  - Scheduled notifications
- **AI Integration**: [Google Generative AI](https://ai.google.dev/) - AI-powered features

### Development Tools
- **ESLint**: Code quality and style enforcement
- **PostCSS**: CSS processing for TailwindCSS
- **Turbopack**: Next.js high-performance bundler (in dev)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager (comes with Node.js)
- **Git**: For version control

### Required Accounts
Create free accounts on these platforms:
1. [Clerk](https://dashboard.clerk.com/) - Authentication
2. [Convex](https://dashboard.convex.dev/) - Database & Backend
3. [Resend](https://resend.com/) - Email service (optional, for notifications)
4. [Inngest](https://app.inngest.com/) - Background jobs (optional)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/RishiBoudh1312/Settlr.git
cd Settlr
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory with your credentials:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Backend
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
CONVEX_DEPLOYMENT=your_convex_deployment_name

# Resend Email (Optional)
RESEND_API_KEY=your_resend_api_key

# Inngest (Optional)
INNGEST_API_KEY=your_inngest_api_key
NEXT_PUBLIC_INNGEST_EVENT_KEY=your_inngest_event_key

# Google AI (Optional)
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_generative_ai_key
```

### 4. Set Up Convex

```bash
# Login to Convex
npx convex auth

# Initialize Convex in your project
npx convex dev
```

This command will:
- Authenticate with your Convex account
- Sync the database schema
- Start the development server
- Open Convex dashboard

### 5. Configure Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your publishable and secret keys
4. Add to `.env.local`
5. Configure your sign-up/sign-in URLs in Clerk settings

### 6. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
Settlr/
├── app/                          # Next.js app directory (pages and layouts)
│   ├── (auth)/                   # Authentication routes (sign-in, sign-up)
│   ├── (main)/                   # Protected application routes
│   │   ├── dashboard/            # Main dashboard with balance summary
│   │   ├── expenses/
│   │   │   └── new/              # Create new expense with category selector
│   │   ├── groups/               # Group management
│   │   ├── contacts/             # Friends/contacts management
│   │   ├── person/[id]/          # Individual user settlement page
│   │   └── settlements/[type]/[id]/  # Settlement management
│   ├── api/
│   │   └── inngest/              # Inngest background job handler
│   ├── globals.css               # Global styles and animations
│   └── layout.js                 # Root layout
│
├── components/                   # Reusable React components
│   ├── ui/                       # Radix UI based components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── select.jsx
│   │   ├── tabs.jsx
│   │   └── ...                   # Other UI components
│   ├── header.jsx                # Navigation header
│   ├── expense-list.jsx          # Expense display component
│   ├── group-balances.jsx        # Group balance visualization
│   ├── settlement-list.jsx       # Settlement history
│   └── convex-client-provider.jsx # Convex context provider
│
├── convex/                       # Convex backend (TypeScript)
│   ├── schema.js                 # Database schema definition
│   ├── users.js                  # User queries and mutations
│   ├── expenses.js               # Expense management logic
│   ├── settlements.js            # Settlement calculations
│   ├── groups.js                 # Group management
│   ├── dashboard.js              # Dashboard data aggregation
│   ├── contacts.js               # Contact management
│   ├── inngest.js                # Background job integration
│   ├── auth.config.js            # Clerk authentication config
│   └── _generated/               # Auto-generated API (don't edit)
│
├── hooks/                        # Custom React hooks
│   ├── use-convex-query.js       # Convex query helper
│   └── use-store-user.jsx        # User context hook
│
├── lib/                          # Utility functions and configurations
│   ├── utils.js                  # General utilities
│   ├── expense-categories.js     # Expense category definitions
│   ├── landing.js                # Landing page content
│   └── inngest/
│       ├── client.js             # Inngest client configuration
│       ├── payment-reminders.js  # Reminder job definition
│       └── spending-insights.js  # Analytics job definition
│
├── public/                       # Static assets
│   ├── logos/                    # Brand logos
│   └── testimonials/             # Testimonial images
│
├── middleware.js                 # Clerk authentication middleware
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # TailwindCSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── components.json               # shadcn/ui config
├── jsconfig.json                 # JavaScript path aliases
└── package.json                  # Dependencies and scripts
```

---

## 🎯 Getting Started

### Creating Your First Expense

1. **Sign Up/Login**: Create your account using Clerk authentication
2. **Go to Dashboard**: See your current balance overview
3. **Create Expense**: Click "New Expense" in the expenses section
4. **Fill Details**:
   - Description: What was the expense for?
   - Amount: Total amount
   - Category: Choose from predefined categories
   - Split Type: Select how to divide (Equal, Percentage, Exact)
   - Participants: Select who shares this expense
   - Amounts: Define how much each person owes
5. **Save**: Click submit and the expense is recorded

### Setting Up a Group

1. **Go to Groups**: Navigate to the groups section
2. **Create New Group**: Click "Create Group"
3. **Add Members**: Invite friends/roommates by email
4. **Share Expenses**: Add group expenses and they're automatically split
5. **Track Balance**: See individual balances within the group

### Recording Settlements

1. **Navigate to Settlements**: Go to the person or group's settlement page
2. **View Balances**: See who owes whom
3. **Create Settlement**: Record a payment
4. **Mark as Paid**: Confirm once payment is received

---

## 🔑 Key Features Explained

### Smart Split Types

- **Equal Split**: Divide amount equally among participants
  ```
  Expense: $100 dinner with 3 people
  Each person owes: $33.33
  ```

- **Percentage Split**: Divide based on percentage contributions
  ```
  Expense: $1000 trip
  Person A: 50% = $500
  Person B: 30% = $300
  Person C: 20% = $200
  ```

- **Exact Amount Split**: Custom amounts for each person
  ```
  Expense: $600 apartment supplies
  Person A: $250
  Person B: $200
  Person C: $150
  ```

### Debt Settlement Algorithm

Settlr uses an intelligent algorithm to calculate optimal settlements:
- Nets out mutual debts between users
- Suggests minimal transactions to clear all debts
- Works within groups and one-to-one relationships
- Real-time recalculation as expenses are added/modified

### Background Jobs

**Inngest Integration** powers:
- **Payment Reminders**: Automated email reminders for pending payments
- **Spending Insights**: Weekly summaries of spending habits
- **Smart Notifications**: Event-triggered alerts for important transactions

---

## 🔐 Authentication & Security

- **Clerk Integration**: Enterprise-grade authentication
- **Protected Routes**: Middleware automatically protects dashboard routes
- **Server-Side Auth**: User verification on all database operations
- **Row-Level Security**: Users can only access their own data

Protected routes include:
- `/dashboard/*` - Dashboard and analytics
- `/expenses/*` - Expense management
- `/groups/*` - Group pages
- `/settlements/*` - Settlement pages
- `/contacts/*` - Contact management

---

## 📊 Database Schema

### Users Table
```
{
  name: string
  email: string
  tokenIdentifier: string (Clerk ID)
  imageUrl: optional string
}
```

### Expenses Table
```
{
  description: string
  amount: number
  category: string
  date: number (timestamp)
  paidByUserId: reference to user
  splitType: "equal" | "percentage" | "exact"
  splits: [{userId, amount, paid}]
  groupId: optional reference to group
  createdBy: reference to user
}
```

### Settlements Table
```
{
  amount: number
  note: optional string
  date: number (timestamp)
  paidByUserId: reference to user
  receivedByUserId: reference to user
  groupId: optional reference to group
  relatedExpenseIds: optional array of expense references
  createdBy: reference to user
}
```

### Groups Table
```
{
  name: string
  description: optional string
  createdBy: reference to user
  members: [{userId, role: "admin"|"member", joinedAt}]
}
```

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Convex development server (in separate terminal)
npx convex dev
```

### Code Quality

- **ESLint**: Run `npm run lint` to check code style
- **Prettier**: Code is automatically formatted
- **Zod Validation**: Type-safe data validation
- **TypeScript**: Full type support in Convex functions

### Making API Calls

All database operations go through Convex:

```typescript
// Example: Creating an expense
const expenseId = await mutation(api.expenses.createExpense, {
  description: "Dinner",
  amount: 100,
  paidByUserId: userId,
  splitType: "equal",
  splits: [{ userId: friend1, amount: 50, paid: false }],
});

// Example: Getting user expenses
const expenses = await query(api.expenses.getExpensesBetweenUsers, {
  userId: friendId,
});
```

---

## 📱 Responsive Design

Settlr is fully responsive and works beautifully on:
- 📱 **Mobile**: 320px - 640px (phones)
- 🍎 **Tablet**: 640px - 1024px (tablets)
- 🖥️ **Desktop**: 1024px+ (laptops, desktops)

Leverages:
- Responsive TailwindCSS utilities
- Mobile-first design approach
- Touch-friendly UI elements
- Optimized images and lazy loading

---

## 🎨 Customization

### Theming

The app supports light and dark modes via `next-themes`:

```tsx
// components/theme-provider.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

### Colors & Styles

Customize in `globals.css` and TailwindCSS config:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    /* Add custom colors */
  }
}
```

### UI Components

All components use Radix UI and can be customized in `components/ui/`.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Configure Clerk**:
   - Add production redirect URLs in Clerk dashboard
   - Set up custom domains if needed

4. **Convex Production**:
   - Run `npx convex deploy` to deploy your backend
   - Update `NEXT_PUBLIC_CONVEX_URL` in production env vars

### Environment Variables for Production

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=prod_key
CLERK_SECRET_KEY=prod_secret
NEXT_PUBLIC_CONVEX_URL=https://prod-deployment.convex.cloud
CONVEX_DEPLOYMENT=prod_deployment_name
RESEND_API_KEY=prod_api_key
```

---

