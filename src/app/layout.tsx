import { domAnimation, LazyMotion } from 'framer-motion'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import './globals.css'

const fontNext = Unbounded({
	variable: '--font-next',
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Деплой проекта с нуля',
	description: 'Мастер-класс от RED Group'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${fontNext.className} antialiased`}>
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			</body>
		</html>
	)
}
