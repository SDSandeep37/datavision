# DataVision

DataVision is a CSV analytics app built with Next.js on the frontend and an Express API in the sibling `datavision_backend` folder. Users can upload a `.csv` file, preview tabular data, generate initial AI insights, and ask natural-language questions that return chart-ready results.

## What It Does

- Uploads CSV files from the dashboard
- Stores the uploaded file ID in session storage
- Fetches and displays up to 500 rows in a data table
- Generates initial dataset insights after upload
- Accepts natural-language questions about the uploaded data
- Uses Gemini to turn user questions into structured analysis operations
- Renders chart output with Recharts

## Project Structure

```text
Project-3/
+-- datavision/                 # Next.js frontend
|   +-- app/
|   |   +-- page.tsx            # Landing page
|   |   +-- dashboard/page.tsx  # Upload + query workspace
|   |   `-- about/page.tsx
|   +-- components/
|   |   +-- UploadForm/
|   |   +-- Output/
|   |   +-- DataTable/
|   |   +-- Charts/
|   |   `-- Dashboard/
|   `-- Contexts/FileContext.tsx
`-- datavision_backend/         # Express backend
    +-- index.js
    `-- src/
        +-- controllers/
        +-- routes/
        +-- services/
        `-- utils/
```

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript
- UI/Data display: `react-data-table-component`, `recharts`
- Backend: Express 5, Multer, CSV Parser
- AI: Google Gemini via `@google/generative-ai`

## Prerequisites

- Node.js 18+
- npm
- A Gemini API key

## Environment Variables

### Frontend: `datavision/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/
```

This value should include the trailing `/api/` because the frontend calls:

- `upload`
- `upload/data/:fileId`
- `query`

### Backend: `datavision_backend/.env`

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

## Getting Started

### 1. Install dependencies

Frontend:

```bash
cd datavision
npm install
```

Backend:

```bash
cd datavision_backend
npm install
```

### 2. Start the backend

```bash
cd datavision_backend
npm run dev
```

The API will start on `http://localhost:5000`.

### 3. Start the frontend

```bash
cd datavision
npm run dev
```

The app will start on `http://localhost:3000`.

## Available Scripts

### Frontend

- `npm run dev` - start the Next.js development server
- `npm run build` - build the production app
- `npm run start` - run the production build
- `npm run lint` - run ESLint

### Backend

- `npm run dev` - start the API with Nodemon
- `npm run start` - start the API with Node

## User Flow

1. Open the landing page and navigate to `/dashboard`.
2. Upload a CSV file.
3. The backend returns a `fileId`.
4. The frontend stores that `fileId` in session storage.
5. The dashboard fetches dataset columns, the first 500 rows, and initial AI insights.
6. Enter a natural-language question such as "top 5 products by sales".
7. The backend asks Gemini to convert the question into structured operations.
8. The backend analyzes the CSV and returns result data plus chart metadata.
9. The frontend renders the returned visualization and explanation.

## API Overview

Base URL: `http://localhost:5000/api`

- `POST /upload` - upload a CSV file
- `GET /upload/data/:fileId` - fetch table data, columns, and initial insights
- `POST /query` - analyze uploaded data from a natural-language query
- `GET /health` - health check on the backend root server

## Key Frontend Modules

- `components/UploadForm/UploadForm.tsx` handles CSV selection and upload
- `components/Output/Output.tsx` sends user queries and displays chart output
- `components/DataTable/DataTable.tsx` loads uploaded data and renders initial insights
- `components/Charts/Chart.tsx` renders bar, line, and pie charts
- `Contexts/FileContext.tsx` shares the active `fileId` across the dashboard

## Key Backend Modules

- `src/controllers/uploadControllers.js` handles CSV upload and dataset preview
- `src/controllers/userQueryController.js` handles user query analysis
- `src/services/geminiAiService.js` turns user prompts into structured JSON operations
- `src/services/insightGenerator.js` generates first-pass dataset insights
- `src/utils/dataAnalyser.js` applies parsed operations to CSV data
- `src/utils/getCSVSchema.js` extracts CSV column names
- `src/utils/loadCsvData.js` loads CSV rows for analysis and preview

## Current Notes

- The frontend expects the backend to be running before uploads or queries will work.
- Chart rendering is currently tied to the structure returned by backend analysis.
- Some backend files include commented-out dashboard/insight experiments, so the current active flow is upload -> preview -> query -> chart.
- There are no automated tests configured yet.

## Sample Query Ideas

- `Top 5 products by sales`
- `Average revenue by region`
- `Count customers by city`
- `Show distribution of orders by category`
- `Show monthly sales trend`

## Future Improvements

- Add automated tests for upload, parsing, and analysis flows
- Improve chart field mapping for dynamic datasets
- Add stronger validation and better upload/query error states
- Support larger datasets and server-side pagination
- Expand dashboard generation features
