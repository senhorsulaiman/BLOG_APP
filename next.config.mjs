/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://img.daisyui.com',
                pathname: '/**'


            },
            
        ]
    }
};
export default nextConfig;
