echo "Installing packages..."
npm i

echo "Building production web build..."
npm run build

echo "Restarting pm2 service..."
pm2 restart 0

echo "Deployed!"