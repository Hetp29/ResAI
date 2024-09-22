// src/app/layout.tsx

import './globals.css';
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
