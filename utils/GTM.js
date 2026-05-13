// GTM is now loaded globally in app/layout.tsx — this component is a no-op
// kept only so the existing per-page <GTM gtmId="..." /> imports still build.
// Safe to delete after removing the imports.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GTM = (_props) => null;

export default GTM;
