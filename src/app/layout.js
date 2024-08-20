// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import Rodape from "@/componentes/rodape";
import Cabecalho from "@/componentes/cabecalho";

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="pt-br">
         {/* <body /*className={inter.className}*/}
         <body suppressHydrationWarning = {true}>
            <Cabecalho />
            {children}
            <Rodape />
         </body>
      </html>
   );
}
