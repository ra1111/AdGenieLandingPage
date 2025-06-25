// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  blogPosts;
  userCurrentId;
  blogPostCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.blogPosts = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.blogPostCurrentId = 1;
    this.addSampleBlogPosts();
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Blog post methods
  async getAllBlogPosts() {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }
  async getBlogPostById(id) {
    return this.blogPosts.get(id);
  }
  async getBlogPostBySlug(slug) {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  async createBlogPost(insertBlogPost) {
    const id = this.blogPostCurrentId++;
    const blogPost = { ...insertBlogPost, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  async updateBlogPost(id, blogPostUpdate) {
    const blogPost = this.blogPosts.get(id);
    if (!blogPost) return void 0;
    const updatedBlogPost = { ...blogPost, ...blogPostUpdate };
    this.blogPosts.set(id, updatedBlogPost);
    return updatedBlogPost;
  }
  async deleteBlogPost(id) {
    return this.blogPosts.delete(id);
  }
  // Helper method to add sample blog posts
  addSampleBlogPosts() {
    const samplePosts = [
      {
        slug: "how-to-create-effective-facebook-ads",
        title: "How to Create Effective Facebook Ads for Your Shopify Store",
        summary: "Learn the proven strategies to create high-converting Facebook ads that drive traffic and sales to your Shopify store.",
        content: `# How to Create Effective Facebook Ads for Your Shopify Store

## Introduction

Facebook remains one of the most powerful advertising platforms for e-commerce businesses. With billions of active users and sophisticated targeting options, it offers Shopify store owners an incredible opportunity to reach potential customers. However, creating effective Facebook ads requires strategy, creativity, and an understanding of the platform's best practices.

## Understanding Your Audience

Before creating any ad, you need to know who you're trying to reach. Facebook's detailed targeting options let you narrow down your audience based on:

- Demographics (age, gender, location)
- Interests and behaviors
- Past interactions with your brand
- Lookalike audiences based on your best customers

Take time to develop detailed buyer personas and use these to inform your targeting strategy.

## Compelling Ad Creative

The visual component of your Facebook ad is critical for stopping users as they scroll through their feeds. Here are some tips for creating scroll-stopping ad creative:

- Use high-quality images or videos that showcase your products
- Ensure your visuals are consistent with your brand
- Test different formats (single image, carousel, video)
- Keep text on images minimal to avoid reduced delivery
- Include people using your products whenever possible

## Crafting Effective Ad Copy

Your ad copy should complement your visuals and compel users to take action. Effective ad copy typically:

- Addresses a pain point or desire
- Communicates your unique value proposition
- Creates urgency or scarcity when appropriate
- Includes a clear call-to-action
- Stays concise and easy to read

## Setting Up Proper Tracking

To measure the effectiveness of your ads, proper tracking is essential:

- Install the Facebook pixel on your Shopify store
- Set up conversion events for key actions (add to cart, purchase)
- Create custom audiences based on site visitors
- Use UTM parameters for additional analytics insights

## Testing and Optimization

No ad strategy is complete without testing and optimization:

- A/B test different ad elements (headlines, images, audience segments)
- Monitor performance metrics closely
- Adjust budgets based on performance
- Scale successful campaigns gradually

## Conclusion

Creating effective Facebook ads for your Shopify store is both an art and a science. By understanding your audience, creating compelling creative, crafting persuasive copy, setting up proper tracking, and continuously testing and optimizing, you can develop a Facebook advertising strategy that drives meaningful results for your business.`,
        coverImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
        publishedAt: /* @__PURE__ */ new Date("2025-04-15T10:00:00Z"),
        author: "Sarah Johnson",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        readTime: "8 min read",
        tags: ["Facebook Ads", "Marketing", "E-commerce", "Shopify"]
      },
      {
        slug: "ai-powered-product-descriptions",
        title: "Using AI to Generate Compelling Product Descriptions",
        summary: "Discover how artificial intelligence can help you create engaging, SEO-friendly product descriptions that convert browsers into buyers.",
        content: `# Using AI to Generate Compelling Product Descriptions

## Introduction

In the competitive world of e-commerce, compelling product descriptions can make the difference between a sale and a bounce. With advances in artificial intelligence technology, Shopify merchants now have powerful tools to create engaging, SEO-friendly product content at scale. This guide explores how to leverage AI for product descriptions that convert.

## The Challenge of Product Descriptions

Many Shopify store owners struggle with product descriptions because:

- Writing unique descriptions for dozens or hundreds of products is time-consuming
- Maintaining a consistent brand voice across all listings can be difficult
- Optimizing descriptions for both SEO and conversions requires expertise
- Regularly refreshing content to keep it current is an ongoing challenge

AI tools offer a solution to these pain points by automating much of the process while maintaining quality.

## How AI Transforms Product Description Writing

Modern AI writing tools can:

- Generate complete product descriptions from basic product attributes
- Adapt to your brand voice and style guidelines
- Incorporate relevant keywords for SEO purposes
- Create variations for A/B testing
- Translate content for international markets

## Best Practices for AI-Generated Product Descriptions

While AI can do much of the heavy lifting, human oversight and strategy remain essential:

### 1. Provide Quality Inputs

The quality of AI outputs depends heavily on your inputs. Be sure to:

- Include detailed product specifications and features
- Specify target keywords and phrases
- Define your ideal customer and their pain points
- Provide examples of your brand voice and style

### 2. Edit and Enhance AI Outputs

AI-generated content typically benefits from human refinement:

- Review for accuracy and factual correctness
- Ensure the emotional appeal matches your brand
- Add nuance and authenticity where needed
- Check that all key selling points are emphasized

### 3. Optimize for Conversions

Beyond just describing the product, ensure descriptions:

- Focus on benefits, not just features
- Address common objections
- Include social proof elements
- Create urgency when appropriate
- Have clear calls-to-action

## Tools for AI-Powered Product Descriptions

Several platforms offer AI capabilities specifically designed for e-commerce:

- AdGenie AI: Specialized in creating multi-platform ready content
- OpenAI's GPT models: Highly adaptable for various content needs
- Shopify's built-in description generators: Integrated with your store data
- Specialized e-commerce content platforms: Offering industry-specific features

## Measuring Success

To ensure your AI-generated descriptions are performing well:

- Track conversion rates before and after implementation
- Analyze time-on-page and bounce rate metrics
- Conduct A/B tests between different AI-generated versions
- Monitor search ranking improvements for target keywords

## Conclusion

AI technology has revolutionized how Shopify merchants create product descriptions, offering significant time savings while potentially improving conversion rates. By combining the efficiency of AI with strategic human oversight, merchants can create compelling product stories that engage customers and drive sales.`,
        coverImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
        publishedAt: /* @__PURE__ */ new Date("2025-04-10T14:30:00Z"),
        author: "Michael Chang",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        readTime: "6 min read",
        tags: ["AI", "Product Descriptions", "Copywriting", "E-commerce"]
      },
      {
        slug: "instagram-shopping-integration",
        title: "Maximizing Sales Through Instagram Shopping Integration",
        summary: "Learn how to seamlessly connect your Shopify store with Instagram Shopping to create a frictionless social commerce experience.",
        content: `# Maximizing Sales Through Instagram Shopping Integration

## Introduction

As social media continues to blur the line between content and commerce, Instagram Shopping has emerged as a powerful sales channel for Shopify merchants. By allowing users to discover and purchase products without leaving the app, Instagram Shopping removes friction from the buying process and creates new opportunities for brand exposure.

## The Power of Visual Commerce

Instagram's visual nature makes it particularly effective for showcasing products:

- 83% of users discover new products on Instagram
- 80% of users say Instagram helps them decide whether to buy a product
- The average order value from Instagram traffic often exceeds that of other social channels

For Shopify store owners, integrating with Instagram Shopping capitalizes on these behaviors by creating a seamless path to purchase.

## Setting Up Instagram Shopping with Shopify

### Prerequisites

Before you can set up Instagram Shopping, ensure you have:

- A Shopify store with products that comply with Instagram's commerce policies
- A business Instagram account connected to a Facebook page
- A Facebook catalog connected to your Shopify store
- An audience in a country where Instagram Shopping is available

### Implementation Steps

1. Connect your Shopify store to your Facebook business account
2. Set up the Facebook sales channel in Shopify
3. Enable Instagram Shopping in your Facebook Commerce Manager
4. Wait for approval (typically 2-3 business days)
5. Start tagging products in Instagram posts and stories

## Creating Effective Instagram Shopping Posts

Once your integration is live, focus on creating content that drives engagement and sales:

### Content Strategy

- Mix product-focused posts with lifestyle and educational content
- Use a consistent visual aesthetic that aligns with your brand
- Create Instagram-exclusive offers to reward followers
- Leverage user-generated content to build social proof

### Product Tagging Best Practices

- Tag multiple products when they appear in a single image
- Use Instagram Stories with product tags for limited-time promotions
- Create collection posts to showcase complementary products
- Tag products in Reels to capture attention with video content

## Measuring Performance

Track these key metrics to evaluate your Instagram Shopping success:

- Traffic from Instagram to your Shopify store
- Conversion rate from Instagram visitors
- Average order value from Instagram purchases
- Engagement rate on shoppable posts vs. non-shoppable posts
- Return on ad spend for any promoted shoppable posts

## Advanced Strategies

Once you've mastered the basics, implement these advanced tactics:

### Influencer Collaborations

Partner with influencers who can tag your products in their posts, expanding your reach to relevant audiences.

### Instagram Checkout

If available in your region, enable Instagram Checkout to allow customers to complete purchases without leaving the app.

### Live Shopping Events

Host Instagram Live sessions featuring product demonstrations and special offers, with product tags that viewers can click to purchase.

### Strategic Retargeting

Create custom audiences based on Instagram engagement and retarget these users with ads featuring products they've shown interest in.

## Conclusion

Instagram Shopping integration offers Shopify merchants a powerful opportunity to connect with customers where they're already spending their time. By creating a frictionless shopping experience that blends discovery, consideration, and purchase, merchants can drive meaningful revenue growth through this increasingly important sales channel.`,
        coverImage: "https://images.unsplash.com/photo-1611262588024-d12430b98920",
        publishedAt: /* @__PURE__ */ new Date("2025-04-05T09:15:00Z"),
        author: "Emma Rodriguez",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        readTime: "10 min read",
        tags: ["Instagram", "Social Media", "Social Commerce", "Shopify"]
      }
    ];
    samplePosts.forEach((post) => this.createBlogPost(post));
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  coverImage: varchar("cover_image", { length: 255 }).notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  authorImage: varchar("author_image", { length: 255 }).notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  tags: text("tags").array().notNull()
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "AdGenie AI service is running" });
  });
  app2.post("/api/subscribe", (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Valid email is required"
      });
    }
    return res.json({
      success: true,
      message: "Successfully subscribed to newsletter"
    });
  });
  app2.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }
    return res.json({
      success: true,
      message: "Message received. We'll get back to you soon!"
    });
  });
  app2.get("/api/blog", async (req, res) => {
    try {
      const blogPosts2 = await storage.getAllBlogPosts();
      return res.json({ success: true, data: blogPosts2 });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch blog posts"
      });
    }
  });
  app2.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const blogPost = await storage.getBlogPostBySlug(slug);
      if (!blogPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      return res.json({ success: true, data: blogPost });
    } catch (error) {
      console.error(`Error fetching blog post with slug ${req.params.slug}:`, error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch blog post"
      });
    }
  });
  app2.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const newBlogPost = await storage.createBlogPost(validatedData);
      return res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        data: newBlogPost
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog post data",
          errors: error.errors
        });
      }
      console.error("Error creating blog post:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to create blog post"
      });
    }
  });
  app2.put("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog post ID"
        });
      }
      const existingPost = await storage.getBlogPostById(id);
      if (!existingPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      const updatedPost = await storage.updateBlogPost(id, req.body);
      return res.json({
        success: true,
        message: "Blog post updated successfully",
        data: updatedPost
      });
    } catch (error) {
      console.error(`Error updating blog post with ID ${req.params.id}:`, error);
      return res.status(500).json({
        success: false,
        message: "Failed to update blog post"
      });
    }
  });
  app2.delete("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog post ID"
        });
      }
      const existingPost = await storage.getBlogPostById(id);
      if (!existingPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      await storage.deleteBlogPost(id);
      return res.json({
        success: true,
        message: "Blog post deleted successfully"
      });
    } catch (error) {
      console.error(`Error deleting blog post with ID ${req.params.id}:`, error);
      return res.status(500).json({
        success: false,
        message: "Failed to delete blog post"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig(async ({ command }) => ({
  base: command === "serve" ? "/" : "/AdGenieLandingPage/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
}));

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const resolvedConfig = await vite_config_default({
    command: "serve",
    mode: "development"
  });
  const vite = await createViteServer({
    ...resolvedConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
