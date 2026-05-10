export const metadata = {
  title: "My Vercel App",
  description: "Simple Next.js app for Vercel deployment"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
