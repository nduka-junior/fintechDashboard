import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"
/>;

export const metadata = {
  title: "Payd",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-Montserrat  dark:bg-darkBlack ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          <div className="hidden xl:block">
            {children} <Toaster />
          </div>
          <div className="text-2xl flex justify-center items-center h-screen leading-7 tracking-widest px-10 max-sm:text-xl">
            {" "}
            Page is only Viewable on 💻 app, <br /> Kindly use your 💻 to view
            the page
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
