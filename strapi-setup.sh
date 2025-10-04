#!/bin/bash

# Load nvm and use Node 20
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

# Create Strapi with SQLite database (simplest setup)
npx create-strapi@latest strapi \
  --quickstart \
  --no-run \
  --skip-cloud

echo "✅ Strapi created successfully!"
echo ""
echo "To start Strapi:"
echo "  cd strapi && npm run develop"
echo ""
echo "Then access:"
echo "  Admin panel: http://localhost:1337/admin"
echo "  API: http://localhost:1337"