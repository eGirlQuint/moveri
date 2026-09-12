import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Keeps canonical URLs as /diensten/ (matching sitemap.ts, the metadata
  // `alternates.canonical` entries, and every existing external link) instead
  // of Next's default of dropping the trailing slash. Next also auto-redirects
  // the bare form to the slash form, so /diensten still resolves.
  trailingSlash: true,
}

export default nextConfig
