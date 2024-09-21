import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className="bg-white">
          {children}
        </body>
      </html>
    </SessionWrapper>
  )
}
