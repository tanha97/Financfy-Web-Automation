# Use the official Playwright image with Node.js
FROM mcr.microsoft.com/playwright:v1.55.0-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Install Playwright browsers
RUN npx playwright install --with-deps

# Copy project files
COPY . .

# Create directories for test results and reports
RUN mkdir -p test-results playwright-report

# Set environment variables
ENV NODE_ENV=production
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

# Expose port for reports (optional)
EXPOSE 9323

# Default command to run tests
CMD ["npm", "run", "test:staging"]
