# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.55.0-jammy

# Set working directory
WORKDIR /app

# Copy package.json for caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Playwright browsers
RUN npx playwright install --with-deps

# Copy project files
COPY . .

# Create directories for reports
RUN mkdir -p test-results playwright-report

# Set environment variables
ENV NODE_ENV=staging
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

# Expose port for reports (optional)
EXPOSE 9323

# Default command to run tests
CMD ["npm", "run", "test:staging"]
