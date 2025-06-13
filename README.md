# AI Tools Directory

A comprehensive React-based directory featuring 110+ AI tools with advanced search, filtering, and categorization. Built with modern web technologies and optimized for performance.

## Features

- **Comprehensive Database**: 110+ AI tools across 12 categories
- **Advanced Filtering**: Search by name, category, AI type, and pricing
- **Authentic Logos**: Real company logos for major AI platforms
- **Mobile Responsive**: Perfect experience on all devices
- **Social Sharing**: Built-in sharing for all platforms
- **Comments System**: User reviews and ratings
- **SEO Optimized**: Complete meta tags and structured data
- **Google Analytics**: Integrated tracking and analytics

## Categories

- Writing & Content
- Design & Art
- Development & Code
- Video Generation
- Business & Marketing
- Productivity
- Health & Fitness
- Audio & Music
- Research & Analysis
- Automation
- Legal & Compliance
- And more...

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel, Netlify, Railway ready

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-tools-directory
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Environment Variables

Create a `.env` file in the root directory:

```env
# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
```

## Deployment

### Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Railway

1. Push code to GitHub
2. Connect to Railway
3. Add environment variables
4. Deploy with one click

### Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── data/          # AI tools database
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and helpers
├── server/                # Express server
├── shared/                # Shared types and schemas
├── package.json
└── vite.config.ts
```

## Features in Detail

### Search & Filtering
- Real-time search across tool names and descriptions
- Filter by AI type (Generative, Agents, Traditional)
- Category-based filtering
- Pricing model filters (Free, Freemium, Paid)

### Tool Information
- Comprehensive tool descriptions
- Authentic company logos
- Pricing and usage limits
- API availability
- User ratings and reviews
- Founded dates and user counts

### User Experience
- Mobile-first responsive design
- Fast loading with optimized assets
- Semantic HTML structure
- Accessibility compliance
- Social sharing integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ for the AI community