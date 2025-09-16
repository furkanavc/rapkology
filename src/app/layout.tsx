import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { Post } from "@/utils/types/index";
import { PostsProvider } from "@/context/PostContext";
const getData = async (): Promise<Post[]> => {
  const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
    cache: "no-store",
    // next: { revalidate: 60 }, yenilemek için
  });
  if (!res.ok) {
    throw new Error("Veri Çekilemedi");
  }
  return res.json();
};
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const saira_condensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Rapkology - Your Ultimate Rap Music Companion",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${saira_condensed.variable} antialiased`}
      >
        <PostsProvider posts={data}>{children}</PostsProvider>
      </body>
    </html>
  );
}
