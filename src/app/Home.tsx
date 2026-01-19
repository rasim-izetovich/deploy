'use client'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Home.module.css'

export function Home() {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	return (
		<div className={styles.wrapper}>
			{init && (
				<Particles
					id="tsparticles"
					options={{
						background: {
							color: {
								value: '#0d0d0d'
							}
						},
						fullScreen: { enable: true },
						fpsLimit: 60,
						interactivity: {
							events: {
								onHover: {
									enable: true,
									mode: 'repulse'
								}
							},
							modes: {
								repulse: {
									distance: 100
								}
							}
						},
						particles: {
							number: {
								value: 80,
								density: {
									enable: true,
									width: 800,
									height: 800
								}
							},
							color: {
								value: ['#00ffff', '#ff00ff']
							},
							shape: {
								type: 'circle'
							},
							opacity: {
								value: 0.2
							},
							size: {
								value: { min: 3, max: 12 }
							},
							move: {
								enable: true,
								speed: 1.2,
								direction: 'none',
								outModes: {
									default: 'bounce'
								}
							},
							twinkle: {
								particles: {
									enable: true,
									color: '#ffffff',
									frequency: 0.01,
									opacity: 0.8
								}
							}
						}
					}}
					className={styles.particles}
				/>
			)}

			<m.h1
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className={styles.title}
			>
				<span className={styles.gradientText}>Деплой проекта с нуля</span>
			</m.h1>
			<m.h2
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 1 }}
				className={styles.subtitle}
			>
				мастер-класс
			</m.h2>
			<m.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				className={styles.author}
			>
				by RED Group [htmllessons.io]
			</m.p>
		</div>
	)
}
