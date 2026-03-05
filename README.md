# Resume Generator

Full-stack resume builder app with React frontend and Express/MongoDB backend.  
Users can create accounts, build resumes, generate PDF templates, save resumes, and manage deleted resumes.

## Tech Stack
- Frontend: React + Vite + Chakra UI
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- PDF: @react-pdf/renderer

## Features
- User signup/login
- Resume builder form
- Multiple resume templates
- PDF preview/download/save
- Dashboard for saved resumes
- Soft delete + restore resumes

## Project Structure
- `frontend/` React app
- `backend/` Express API
- `render.yaml` Render deployment blueprint

## Prerequisites
- Node.js 20+
- npm
- MongoDB connection string

## Environment Variables
Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## Run Locally
```bash
npm ci
npm --prefix frontend ci
npm --prefix frontend run build
npm start
```

App/API runs on `http://localhost:3000`.

## Scripts
- `npm run dev` - run backend with nodemon
- `npm run build` - install frontend deps + build frontend
- `npm start` - run production server (`backend/server.js`)

## Deployment on Render
### Option A: Using `render.yaml` (Blueprint)
- Push repo to GitHub
- In Render: New + > Blueprint
- Select repo
- Add env var: `MONGO_URI`
- Deploy

### Option B: Manual Web Service
- Build Command: `npm ci && npm run build`
- Start Command: `npm start`
- Add env var: `MONGO_URI`
- (Recommended) set Node version to 20

## API Routes (summary)
- `POST /api/createlogin`
- `POST /api/verifylogin`
- `POST /api/resume/save`
- `GET /api/resume/getallactive/:user_id`
- `PATCH /api/resume/tempdelete/:resumeId`
- `GET /api/resume/getalldeleted/:user_id`
- `PATCH /api/resume/restore/:resumeId`
- `DELETE /api/resume/delete/:resumeId`

## Health Check
- `GET /health` -> `{ "ok": true }`

## Troubleshooting
- `ERR_MODULE_NOT_FOUND: express` on Render:
  - Ensure build command is `npm ci && npm run build`
- Blank screen after build changes:
  - Rebuild and hard refresh browser cache
- Mongo connection errors:
  - Verify `MONGO_URI` is set correctly in Render env vars
