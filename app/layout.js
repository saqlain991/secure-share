"use client";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Toast from "./_components/Toast";
import { useState } from "react";
import ToastContext from "./../context/ToastContext";
const inter = Outfit({ subsets: ["latin"] });

const metadata = {
  title: "SecureShare",
  description:
    "A Secure File Share website which allows users to send thier file via Email and Password Protection!",
};

export default function RootLayout({ children }) {
  const [toast, setToast] = useState("");
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
