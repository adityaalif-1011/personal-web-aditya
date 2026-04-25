import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const space = Space_Grotesk({
subsets:["latin"],
variable:"--font-heading"
});

const inter = Inter({
subsets:["latin"],
variable:"--font-body"
});

export default function RootLayout({children}){
return(
<html lang="en">
<body className={`${space.variable} ${inter.variable}`}>
{children}
</body>
</html>
)
}