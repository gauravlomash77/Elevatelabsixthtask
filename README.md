# ElevateLab Task 6 — Deploy a Website Using GitHub Pages

##  Objective
Deploy a simple static **HTML/React website** directly from the **main branch** using **GitHub Pages**.

---

##  Tools Used
- GitHub  
- GitHub Pages  
- Node.js  
- Vite (for React build)

---

##  Steps Performed

### Access Live Website
https://gauravlomash77.github.io/Elevatelabsixthtask/

###  Install Dependencies
npm install

### Configure Vite for Relative Paths

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})


### Build the Project
npm run build

### Copy Build Files to Root Directory
cp -r dist/* .

### Configure GitHub Pages

1. Navigate to your **GitHub repository → Settings → Pages**
2. Under **Branch**, select:  
   - **Branch:** main 
   - **Folder:** / (root)
3. Click **Save**

