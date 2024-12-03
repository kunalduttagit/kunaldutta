import type { Metadata } from "next";
import "./globals.css";

export const viewport: Metadata = {
	metadataBase: new URL("https://kunal.tech"),
	title: {
		default: "Kunal Dutta | Developer & Designer",
		template: "%s | Kunal Dutta",
	},
	description:
		"Full-stack developer specializing in NextJS, Flutter, React, and Django. Creating innovative web and mobile solutions with a focus on user experience and performance.",
	keywords: [
		"Kunal Dutta",
		"Developer",
		"Designer",
		"NextJS",
		"Flutter",
		"React",
		"Django",
	],
	authors: [{ name: "Kunal Dutta", url: "https://kunal.tech" }],
	creator: "Kunal Dutta",
	publisher: "Kunal Dutta",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: [
			{ url: "/assets/icons2/favicon.ico" },
			{
				url: "/assets/icons2/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/assets/icons2/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
		apple: [{ url: "/assets/icons2/apple-touch-icon.png" }],
	},
	manifest: "/assets/icons2/site.webmanifest",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://kunal.tech",
		siteName: "Kunal Dutta Portfolio",
		title: "Kunal Dutta | Developer & Designer",
		description:
			"Portfolio of Kunal Dutta | Developer | Designer | NextJS | Flutter | React | Django",
		images: [
			{
				url: "/assets/preview.png",
				width: 1200,
				height: 630,
				alt: "Kunal Dutta - Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kunal Dutta | Developer & Designer",
		description:
			"Portfolio of Kunal Dutta | NextJS | Flutter | React | Django",
		creator: "@kunaldutta",
		images: ["/assets/preview.png"],
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://kunal.tech",
	},
	verification: {
		google: "rq5mebk7em7k",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Kunal Dutta",
						url: "https://kunal.tech",
						jobTitle: "Developer & Designer",
						description:
							"Full-stack developer specializing in NextJS, Flutter, React, and Django.",
						sameAs: [
							"https://www.linkedin.com/in/duttakunal13",
							"https://github.com/kunalduttagit",
							"https://x.com/_KunalDutta",
							"https://leetcode.com/u/kunaldutta",
							"https://www.instagram.com/_kunaldutta",
							"https://www.quora.com/profile/Kunal-Dutta-156",
						],
					})}
				</script>
			</head>
			<body
				className={`antialiased dark bg-[#f8f8f8] dark:bg-black text-black dark:text-white scroll-smooth`}
			>
				{children}
			</body>
		</html>
	);
}

// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Kunal Dutta",
//   description: "Portfolio of Kunal Dutta | Developer | Designer | NextJS | Flutter | React | Django",
//   icons: {
//     icon: [
//       { url: "/assets/icons2/favicon.ico" },
//       { url: "/assets/icons2/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//       { url: "/assets/icons2/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//     ],
//     apple: [
//       { url: "/assets/icons2/apple-touch-icon.png" }
//     ],
//   },
//   openGraph: {
//     title: "Kunal Dutta",
//     description: "Portfolio of Kunal Dutta | Developer | Designer | NextJS | Flutter | React | Django",
//     url: "https://kunal.tech",
//     siteName: "Kunal Dutta Portfolio",
//     images: [
//       {
//         url: "/assets/preview.png",
//         width: 1200,
//         height: 630,
//         alt: "Kunal Dutta - Portfolio",
//       }
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Kunal Dutta",
//     description: "Portfolio of Kunal Dutta",
//     images: ["/assets/preview.png"],
//   },
//   manifest: "/assets/icons2/site.webmanifest",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`antialiased dark bg-[#f8f8f8] dark:bg-black text-black dark:text-white scroll-smooth`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
