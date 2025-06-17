# The Forum 2025 – Final Setup Instructions

## Install Dependencies
```bash
cd client
npm install
```

## Development Mode
```bash
npm run dev
```

## Production Build
```bash
npm run build
```

## Environment Variables
Copy `.env.example` to `.env` and add your API keys.

## Notes
- All components are inside `src/components/`
- Images go under `public/images/[branch]/`
- OracleAI folder (legacy) is included in case you want to re-enable Oracle logic
