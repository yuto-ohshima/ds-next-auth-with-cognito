import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["app", "auth", "component", "lib"],
  },
  env: {
    authHost: process.env.AUTH_HOST,
    authSecret: process.env.AUTH_SECRET,
    authDebug: process.env.AUTH_DEBUG,
    cognitoUserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    cognitoClientId: process.env.AWS_COGNITO_CLIENT_ID,
    // cognitoClientSecret: process.env.AWS_COGNITO_CLIENT_SECRET,
    cognitoRegion: process.env.AWS_COGNITO_REGION,
  },
};

export default nextConfig;
