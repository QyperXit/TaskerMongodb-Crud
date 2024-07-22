# Full-Stack Tasker Application

## Overview

This project is a full-stack tasker application built to practice and familiarize myself with Prisma and MongoDB for CRUD operations. It utilizes Next.js, Tailwind CSS, and TypeScript to create a modern, efficient, and type-safe web application.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, TypeScript
- **Backend**: Next.js API routes, Server Actions
- **Database**: MongoDB
- **ORM**: Prisma

## Features

- Create, Read, Update, and Delete (CRUD) operations for tasks
- Server-side rendering with Next.js
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Efficient database operations with Prisma ORM
- Server Actions for enhanced performance and user experience

## Purpose

This project serves as a learning exercise to:

1. Gain hands-on experience with Prisma as an ORM
2. Practice working with MongoDB in a full-stack application
3. Implement and utilize Next.js Server Actions
4. Enhance skills in Next.js, Tailwind CSS, and TypeScript

## Quick Start

1. Clone and install:
2. Set up Prisma: `npx prisma init`
3. Create MongoDB database (use Atlas or local installation)
4. Add to `.env`: `DATABASE_URL="your_mongodb_connection_string"`
5. Update `prisma/schema.prisma` for MongoDB and add models
6. Setup Prisma: `npx prisma generate && npx prisma db push`
7. Run: `npm run dev`

Visit `http://localhost:3000` to view the app.

## Contributing

This is a personal learning project, but suggestions and feedback are welcome!

## License

[Include your chosen license information]
