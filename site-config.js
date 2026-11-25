// Front Desk AI site settings. Nothing in this file is secret.
//
// PLACEHOLDERS: replace the three contact values below with your real details.
// Every red PLACEHOLDER tag on the page disappears by itself once its value is replaced.
window.FRONT_DESK_CONFIG = {
  email: "hello@example.com",       // PLACEHOLDER: contact email (Gmail)
  phone: "+27 00 000 0000",         // PLACEHOLDER: contact phone number
  whatsapp: "+27 00 000 0000",      // PLACEHOLDER: WhatsApp number that receives demo requests

  // The live demo line that visitors can call. Voice only. Shown in the header and in the "Talk to it yourself" section.
  demoLine: "+27872500978",

  // Stripe Payment Links, one per plan. Create them in the Stripe dashboard (Payment Links) and paste the
  // https://buy.stripe.com/... address here. A plan's "subscribe now by card" link only appears once its value is set.
  stripeLinks: {
    afterHours: "https://buy.stripe.com/28E5kFei45PO5xwfycdQQ04",   // After Hours plan, R999 a month
    frontDesk: "https://buy.stripe.com/7sY00l6PC1zy3pobhWdQQ05"     // Front Desk plan, R1,999 a month
  },

  // Where the voice demo backend lives. Leave empty when the backend serves this site itself
  // (Docker or "npm start"). On Netlify or Vercel this is filled in at build time from PUBLIC_API_BASE.
  apiBase: "",

  // A short line about VAT shown under the prices, for example "Prices exclude VAT." or
  // "We are not VAT registered, so no VAT is added." Leave empty to show nothing.
  vatNote: "",

  // Google Analytics 4 measurement ID. Analytics only loads once this is a real ID.
  googleAnalyticsId: "G-XXXXXXXXXX" // PLACEHOLDER
};
