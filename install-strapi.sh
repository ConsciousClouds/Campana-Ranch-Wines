#!/bin/bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Switch to Node 20
echo "Switching to Node.js v20..."
nvm use 20

# Verify Node version
echo "Current Node version:"
node -v

# Create Strapi app
echo "Creating Strapi application..."
npx create-strapi-app@latest strapi --quickstart

echo "Strapi installation complete!"
echo "To access Strapi:"
echo "  1. cd strapi"
echo "  2. npm run develop"
echo "  3. Open http://localhost:1337/admin"