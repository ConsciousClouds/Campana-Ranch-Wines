#!/bin/bash

echo "🔧 Fixing Node.js version issues for your project..."
echo ""

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Switch to Node 20
echo "📦 Switching to Node.js v20 LTS..."
nvm use 20

# Verify version
echo ""
echo "✅ Current versions:"
node -v
npm -v

# Clean and reinstall dependencies
echo ""
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json

echo ""
echo "📦 Reinstalling dependencies with Node 20..."
npm install

echo ""
echo "✅ Everything is fixed!"
echo ""
echo "To start your Next.js app:"
echo "  npm run dev"
echo ""
echo "To install and run Strapi:"
echo "  npx create-strapi@latest strapi --quickstart --skip-cloud"
echo "  cd strapi && npm run develop"
echo ""
echo "💡 Tip: Always run 'nvm use' when you open a new terminal in this project!"