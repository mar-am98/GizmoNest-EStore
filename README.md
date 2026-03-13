# Next15 E-commerce Studio - Architecture & Features

This project is a high-performance e-commerce and product management studio built with **Next.js 15**, **Supabase**, **Prisma**, and **Clerk**. It explores modern architecture patterns, specifically focusing on **Server Actions** for all data mutations and fetching, moving away from traditional API routes.

## 🏗️ Technical Architecture

### Core Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) for optimized server-side rendering and client-side interactivity.
- **ORM & Database**: [Prisma](https://www.prisma.io/) to manage a [Supabase](https://supabase.com/)-hosted PostgreSQL database.
- **Authentication**: [Clerk](https://clerk.com/) for secure, scalable user management and session control.
- **Style System**: [Tailwind CSS 4](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) for a premium, custom-branded interface.

### The "How": Server Actions Focus
Instead of exposing REST endpoints, this project leverages **Next.js Server Actions** (`'use server'`). This architecture provides:
- **Type Safety**: End-to-end type safety between the form/UI and the database.
- **Simplified State**: Automatic integration with `revalidatePath` to refresh the UI immediately after data mutations.
- **Enhanced Security**: Middleware-level route protection and server-side validation using **Zod**.

## ✨ Implemented Features

### 🛒 Product & Store Management
- **Smart Storefront**: Advanced product browsing with client-side searching and server-side filtering.
- **Admin Dashboard**: A secure control center where administrators can manage the entire catalog, including product details and imagery.
- **Image Infrastructure**: Robust integration with **Supabase Storage** for high-performance product image hosting.

### ⭐ Review & Rating System
- **Dynamic Feedback**: Users can leave ratings and detailed reviews for products.
- **Intelligent Aggregation**: Real-time calculation of average ratings and total review counts using Prisma's `groupBy` and aggregation features.
- **User Constraints**: Logic-enforced rules ensuring each user can only leave one review per product, preventing duplicate feedback.

### 🛍️ Premium Shopping UI
- **Favorites System**: A personalized space for users to save products for later, built with high-speed Prisma queries.
- **Cart Architecture**: A responsive, aesthetics-focused Shopping Cart UI featuring real-time total calculations and quantity management.
- **Orders History**: A professionally designed table view for tracking previous orders, complete with formatted currencies and dates.

### 🎨 Design Philosophy
The UI follows a **premium, dark-mode-first aesthetic** utilizing:
- **Glassmorphism**: Subtle translucent effects on interactive elements.
- **Micro-animations**: Smooth transitions for clicks, hovers, and data loading states.
- **Responsive Layouts**: A mobile-first approach ensuring the storefront looks stunning on every device.

---
*Created as part of a course study curriculum.*
