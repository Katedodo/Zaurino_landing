const nextConfig={
  turbopack:{root:process.cwd()},
  output:'export',
  basePath:'/Zaurino_landing',
  assetPrefix:'/Zaurino_landing/',
  images:{unoptimized:true,formats:['image/avif','image/webp']}
};
export default nextConfig;
