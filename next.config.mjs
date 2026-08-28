const nextConfig={
  turbopack:{root:process.cwd()},
  output:'export',
  images:{unoptimized:true,formats:['image/avif','image/webp']}
};
export default nextConfig;
