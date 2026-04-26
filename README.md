# Meetupbase: Creator Collaboration Platform

Meetupbase is a premium, real-time marketplace designed to connect digital creators, influencers, and brands. It facilitates collaboration through a dynamic auction-based bidding system, seamless project management, and real-time communication.

## 🌟 Key Features

### 1. Real-Time Auction & Bidding System
- **Dynamic Discover Feed**: Browse top creators and available collaborations with powerful search and category filters.
- **Live Auctions**: 72-hour auction windows with real-time countdown timers.
- **Instant Bidding**: Place bids using platform credits. The UI updates instantly across all connected clients via WebSockets when a new highest bid is placed.

### 2. Collaboration Management
- **Centralized Dashboard**: Track all Outgoing Requests, Incoming Requests, and Active Projects in one place.
- **Workflow Automation**: One-click Accept/Decline logic for incoming requests. Accepted requests automatically transition to "Active Projects."
- **Credit Protection**: Smart escrow system that locks credits during the pending phase and manages atomic deductions and refunds based on request outcomes.

### 3. Real-Time Messaging
- **Contextual Chat Threads**: Every active collaboration gets a dedicated messaging thread.
- **Deep Linking**: Seamlessly navigate from the Collaborations dashboard directly into a specific project's chat.
- **Live Sync**: Messages are delivered and displayed in real-time, ensuring smooth communication between partners.

### 4. Premium Aesthetic & UX
- **"Forest Green" Design System**: A cohesive, vibrant, and highly polished UI featuring deep greens, amber accents, and clean typography.
- **Glassmorphism & Micro-animations**: Modern UI touches including backdrop blurs, soft shadows, hover scaling, and rounded organic shapes (no harsh boxy borders).

## 🛠 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS (`index.css`)
- **Database**: PostgreSQL (hosted on [Supabase](https://supabase.com/))
- **ORM**: [Prisma](https://www.prisma.io/)
- **Real-Time Engine**: [Pusher](https://pusher.com/) (WebSockets)
- **Authentication**: Next-Auth v5
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

First, install the dependencies:
```bash
npm install
```

Set up your `.env` file with the necessary credentials:
```env
DATABASE_URL="your_supabase_postgres_url"
NEXT_PUBLIC_PUSHER_APP_KEY="your_pusher_key"
PUSHER_APP_ID="your_pusher_id"
PUSHER_SECRET="your_pusher_secret"
NEXT_PUBLIC_PUSHER_CLUSTER="your_pusher_cluster"
# Add Next-Auth secrets...
```

Push the database schema:
```bash
npx prisma db push
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Core Architecture

- `/app/(dashboard)/discover` - The marketplace and live auction feed.
- `/app/(dashboard)/collaborations` - Project management and request handling.
- `/app/(dashboard)/messages` - Real-time chat interface.
- `/app/api/...` - RESTful API routes handling Prisma transactions and Pusher event triggers.
- `/lib/pusher.ts` - WebSocket client/server initialization.
- `/lib/store.ts` - Global state management for user sessions and credits.
- `/prisma/schema.prisma` - Database models (User, Auction, Bid, Collaboration, Message).
