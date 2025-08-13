# Deployment Guide for PGDCS Landing Page

This application can be deployed to various hosting platforms. Here are the deployment instructions for popular platforms.

## Prerequisites

Before deployment, ensure you have:
- A PostgreSQL database (recommended: Neon, Railway, or Heroku Postgres)
- Environment variables configured
- A domain name (optional)

## Environment Variables

Set these environment variables in your hosting platform:

```
NODE_ENV=production
DATABASE_URL=postgresql://username:password@host:port/database
```

## Platform-Specific Deployment Instructions

### 1. Heroku Deployment

#### Files included:
- `Procfile` - Defines how to start the application
- `app.json` - Heroku app configuration

#### Steps:
1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create a new app: `heroku create your-app-name`
4. Add PostgreSQL addon: `heroku addons:create heroku-postgresql:mini`
5. Deploy: `git push heroku main`

#### One-click Deploy:
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### 2. Vercel Deployment

#### Files included:
- `vercel.json` - Vercel configuration for serverless deployment

#### Steps:
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`
4. Add environment variables in Vercel dashboard

### 3. Netlify Deployment

#### Files included:
- `netlify.toml` - Netlify build and redirect configuration

#### Steps:
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### 4. Railway Deployment

#### Steps:
1. Visit [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add PostgreSQL service
4. Deploy automatically from GitHub

### 5. Digital Ocean App Platform

#### Steps:
1. Create new app in Digital Ocean
2. Connect GitHub repository
3. Configure build command: `npm run build`
4. Configure run command: `npm start`
5. Add PostgreSQL database component

## Database Setup

### Using Neon (Recommended)
1. Sign up at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set as `DATABASE_URL` environment variable

### Using Railway PostgreSQL
1. Add PostgreSQL service in Railway
2. Copy the connection string from Railway dashboard
3. Set as `DATABASE_URL` environment variable

## Build Process

The application uses a two-step build process:
1. Frontend build: `vite build` - Builds React frontend
2. Backend build: `esbuild` - Bundles Node.js server

## Production Considerations

### Performance
- The app is optimized for production with:
  - Minified JavaScript and CSS
  - Compressed assets
  - Efficient database queries

### Security
- Ensure `DATABASE_URL` is kept secure
- Use HTTPS in production
- Keep dependencies updated

### Monitoring
- Monitor server logs for errors
- Set up health checks
- Monitor database performance

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires Node 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Database Connection Issues**
   - Verify `DATABASE_URL` format
   - Check database server availability
   - Ensure database migrations are run

3. **PDF Generation Issues**
   - PDFKit requires server-side rendering
   - Ensure adequate memory allocation
   - Check file system permissions

### Environment-Specific Notes

- **Heroku**: Uses ephemeral filesystem, files are lost on restart
- **Vercel**: Serverless functions have timeout limits
- **Netlify**: Static hosting, requires functions for API routes

## Post-Deployment

After successful deployment:
1. Test all download functionalities
2. Verify contact form submissions
3. Check database connectivity
4. Test responsive design on mobile devices
5. Set up monitoring and alerts

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review application logs
3. Verify environment variables
4. Test locally first with production build

## Cost Estimates

### Free Tier Options:
- **Vercel**: Free for personal projects
- **Netlify**: Free tier with build limits
- **Railway**: $5/month for small apps
- **Heroku**: $7/month basic plan

### Database Costs:
- **Neon**: Free tier with limits
- **Railway PostgreSQL**: Included in plan
- **Heroku Postgres**: $9/month mini plan