# Frontend Assignment – Reusable Components with Storybook

This project is part of my frontend assignment.  
It demonstrates how to build **reusable, styled components** (using **React, TypeScript, TailwindCSS**) and document them with **Storybook**.

---

## Tech Stack
- [React](https://react.dev/) – UI Library  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  
- [Vite](https://vitejs.dev/) – Fast bundler/dev server  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- [Storybook v9](https://storybook.js.org/) – Component explorer & documentation  

---

## Components Implemented

### 1. InputField
- Variants: **outlined, filled, ghost**  
- Sizes: **sm, md, lg**  
- States: **default, error, disabled, required**  
- Password toggle  
- Helper text & error messages  
- Accessible (label linked with input)  

### 2. DataTable
- Shows tabular data with dynamic headers  
- Supports empty state  
- Loading state  
- Row selection  
- Responsive layout  

##  My Approach

1. **Component-driven development**  
   - I followed a component-driven approach where I created reusable UI components (`InputField` and `DataTable`) in isolation.  
   - Each component is styled using TailwindCSS and strongly typed with TypeScript.  

2. **Storybook for documentation**  
   - I integrated Storybook v9 with Vite and Tailwind to showcase components.  
   - I created multiple stories for each component covering different states and variants.  
   - This allows interactive testing and easy visualization of props.  

3. **Clean structure & scalability**  
   - Each component lives inside component folder with `.tsx` and `.stories.tsx` files.  
   - This makes the project modular and scalable for future enhancements.  

4. **Deployment**  
   - Storybook is deployed to Chromatic for preview.  
   - The GitHub repo contains complete setup instructions so anyone can run the project locally or view it online.


