export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body>
              <nav>
                  <a href="/">Home</a>
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </nav>
              {children}
          </body>
      </html>
  );
}
