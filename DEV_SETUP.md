# Development Setup Guide

## Running All Projects Locally

To test cross-site links during development, run each project on different ports:

### Port Configuration:
- **Prolder Company**: `http://localhost:5173` (default Vite port)
- **Patrik Portfolio**: `http://localhost:5174`
- **Reinalda Portfolio**: `http://localhost:5175`

### Commands:

```bash
# Terminal 1 - Prolder Company (Main site)
cd prolder-company
npm run dev

# Terminal 2 - Patrik Portfolio
cd portfolio-react
npm run dev -- --port 5174

# Terminal 3 - Reinalda Portfolio  
cd portfolio-rea
npm run dev -- --port 5175
```

### Link Behavior:

**Development (Local)**:
- Links point to localhost with different ports
- All sites accessible independently
- Cross-site navigation works between local instances

**Production (Deployed)**:
- Links point to production domains
- Prolder main site: `https://prolder.com`
- Patrik portfolio: `https://prolder.com/patrik-nasufi` (via proxy)
- Reinalda portfolio: `https://prolder.com/reinalda-radomi` (via proxy)

### Testing:

1. **Start all three dev servers** using the commands above
2. **Test navigation between sites** using the footer and header links
3. **Verify links work correctly** in both directions
4. **Check responsive design** on different screen sizes

### Environment Detection:

The link configuration automatically detects the environment:
- `import.meta.env.DEV` determines if running in development
- Development uses localhost URLs
- Production uses the deployed domain URLs

### Notes:

- Make sure each project runs on its designated port
- Links will automatically resolve to the correct environment
- No manual configuration needed when switching between dev/prod