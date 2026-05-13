// TODO: R2 presigned URL support requires @aws-sdk/client-s3 and @aws-sdk/s3-request-presigner.
// These packages have been removed to reduce bundle size. Re-add them and restore this file
// if private R2 objects need presigned URL access.
// Public R2 URLs are still supported via next.config.js remotePatterns.

export const r2Client = null as any;
export const R2_BUCKET_NAME = process.env.R2_EVENTS_BUCKET_NAME || 'drdubey-events-media';
