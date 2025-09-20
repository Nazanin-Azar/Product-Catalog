# E-commerce Store Project with Nuxt 3

This is a sample project for a modern e-commerce store built with Nuxt 3, TypeScript, and Tailwind CSS. The goal of this project is to demonstrate best practices in building a fast, responsive, and scalable web application.

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJkd2RobngydzZyOHd0Znk0ZmVsemg2Z3I5YTlpang1ejB4dnIzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HfGomEn75GwUv105Gv/giphy.gif" alt="Todo List GIF" width="300" height="300" style="display: block; margin: 0 auto;">

## ✨ Key Features

- **Dynamic Homepage**: Includes a main hero section, featured products list, an "About Us" section, and a feature bar.
- **Advanced Product Filtering**:
  - Filter by category, price, and rating.
  - Desktop sidebar for filters.
  - Full-screen filter modal on mobile for an optimized user experience.
- **Full Product Listing**: A dedicated page to display all products with advanced filtering capabilities.
- **Global Search**: Ability to search for products via a search bar in the header, available on all pages.
- **Product Detail Page:**: Displays complete information for each product, including an image gallery.
- **Fully Responsive Design**: Optimized for a great viewing experience on desktop, tablet, and mobile.
- **Global State Management**: Uses useState to manage shared state between components (like the search query).
- **Optimized Loading**: Implements Skeleton Loaders to improve the user experience while data is being fetched.
- **Toast Notification System**: Uses vue-sonner to display feedback messages to the user.
- **SWR** : Handle data fetching and caching efficiently.

## 🛠️ Tech Stack

- Adding a Task: Type your task into the input box and hit the add button (plus icon). Your task will appear in the list.
- Deleting a Task: Click the trash can icon next to a task to remove it from your list.
- Marking a Task as Completed: Click the check icon to toggle a task between completed and uncompleted.
- Filtering Tasks: Use the dropdown menu to filter your tasks based on their status (all, completed, uncompleted).

In this project, we have utilized a significant number of functions, each handling a specific aspect of the application. These functions are designed to keep the code modular and maintainable, with each function managing a distinct piece of functionality. This approach allows for easier debugging, testing, and future enhancements.

## 📂 Project Structure

- ### Framework: ![Nuxt 3](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
- ### Language: ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ### Styling: ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ### Data: ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🚀 Getting Started

### Clone the Repository:

```bash
  https://github.com/Nazanin-Azar/Product-Catalog.git

```

## 📁 Project Structure

- `components/` : Contains all Vue components.
  - `ui/` : The custom UI component library.
- `composables/` : Contains reusable functions.
- `layouts/` : Contains the main site layouts
- `pages/` : Contains the application's pages and routing system.
- `plugins/` : For registering Vue plugins.
- `types/` : Contains TypeScript type definitions and interfaces.
- `assets/` : Contains images.

## 🎨 UI Component Library

This project includes a small library of custom UI components located in the `components/ui/` directory. The most important component is `AppButton`.vue, which provides consistent and customizable buttons throughout the site.
