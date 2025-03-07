# Optimizely SaaS CMS + Next.js 15 Masterclass

A comprehensive starter template for building modern websites with Optimizely SaaS CMS and Next.js 15 App Router. This template serves as an excellent starting point for projects integrating with Optimizely SaaS CMS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fszymonuryga%2FOptimizely-Masterclass&env=OPTIMIZELY_API_URL,OPTIMIZELY_SINGLE_KEY,OPTIMIZELY_PREVIEW_SECRET,OPTIMIZELY_REVALIDATE_SECRET,NEXT_PUBLIC_CMS_URL)

## Features

- ⚡ **Next.js 15** with App Router
- 🔄 **On-Demand Revalidation** via webhooks
- 👁️ **Draft Mode** for content previews
- 🌐 **Multi-language Support** with automatic language detection
- 🧩 **Block Factory Mapper** for dynamic content rendering
- 🎨 **Visual Builder Integration** for intuitive content editing
- 🔍 **SEO Optimized** with metadata support
- 💅 **Tailwind CSS & shadcn/ui** for beautiful, responsive designs
- 📊 **TypeScript** for type safety
- 📝 **GraphQL Codegen** for type-safe API calls

## Important Note

This repository includes an `ExportedFile.episerverdata` file in the root folder which contains all content for Optimizely SaaS CMS. You can import this file into your Optimizely instance to get started with pre-configured content.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- An Optimizely SaaS CMS instance
- Optimizely Content Graph API key

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/szymonuryga/Optimizely-Masterclass.git
   cd Optimizely-Masterclass
   ```

````
2. Install dependencies:

```shellscript
npm install
````

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```plaintext
OPTIMIZELY_API_URL="https://cg.optimizely.com/content/v2"
OPTIMIZELY_SINGLE_KEY=""
OPTIMIZELY_PREVIEW_SECRET=""
OPTIMIZELY_REVALIDATE_SECRET=""
NEXT_PUBLIC_CMS_URL="https://app-{your-data}.cms.optimizely.com"
```

4. Generate GraphQL types:

```shellscript
npm run gen-types
```

5. Start the development server:

```shellscript
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

This project includes comprehensive documentation on various aspects of integrating Next.js with Optimizely SaaS CMS:

- [Project Setup](docs/project-setup.md) - Basic setup instructions
- [Block Factory Mapper](docs/block-factory-mapper.md) - Pattern for dynamically rendering content blocks
- [Fetching Data](docs/fetch-data.md) - How to fetch data from Optimizely Graph
- [Cache Revalidation](docs/cache-revalidation.md) - Implementing cache revalidation with webhooks
- [Visual Builder](docs/visual-builder.md) - Integration with Optimizely's Visual Builder
- [Draft Mode](docs/draft-mode.md) - Setting up preview/draft mode
- [Multi-language Support](docs/multi-language.md) - Implementing localization

## Importing Content to Optimizely

1. Log in to your Optimizely SaaS CMS instance
2. Go to Admin > Tools > Import Data
3. Upload the `ExportedFile.episerverdata` file from the root of this project
4. Follow the import wizard to complete the process

## Environment Variables

- `OPTIMIZELY_API_URL`: The base URL for the Optimizely Content Graph API (typically "[https://cg.optimizely.com/content/v2](https://cg.optimizely.com/content/v2)")
- `OPTIMIZELY_SINGLE_KEY`: Your Optimizely Content Graph API key
- `OPTIMIZELY_PREVIEW_SECRET`: Generated base64 string based on your AppKey and AppSecret credentials
- `OPTIMIZELY_REVALIDATE_SECRET`: A secret key used for revalidating cached content
- `NEXT_PUBLIC_CMS_URL`: The URL of your SaaS CMS instance

## Future Enhancements

This template is actively maintained and will be updated to support new features and improvements in Optimizely SaaS CMS as they become available. Stay tuned for future enhancements!

## License

[MIT](LICENSE)
