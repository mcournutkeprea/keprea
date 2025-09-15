import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-zoom': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(180deg)'
					}
				},
				'drift': {
					'0%': {
						transform: 'translateX(-50px) translateY(0px)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(50px) translateY(-20px)',
						opacity: '0'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'sway': {
					'0%, 100%': {
						transform: 'scale(1.02) translateX(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'scale(1.03) translateX(-2px) rotate(-0.5deg)'
					},
					'75%': {
						transform: 'scale(1.03) translateX(2px) rotate(0.5deg)'
					}
				},
				'pan-up': {
					'0%': {
						transform: 'scale(1.05) translateY(10px)'
					},
					'25%': {
						transform: 'scale(1.06) translateY(5px)'
					},
					'50%': {
						transform: 'scale(1.05) translateY(0px)'
					},
					'75%': {
						transform: 'scale(1.06) translateY(-5px)'
					},
					'100%': {
						transform: 'scale(1.05) translateY(-10px)'
					}
				},
				'slow-zoom': {
					'0%': {
						transform: 'scale(1)',
						filter: 'brightness(1) contrast(1)'
					},
					'50%': {
						transform: 'scale(1.1)',
						filter: 'brightness(1.05) contrast(1.1)'
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'brightness(1) contrast(1)'
					}
				},
				'water-drop': {
					'0%': {
						transform: 'translateY(-20px) scaleY(1)',
						opacity: '0'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(0px) scaleY(1.2)'
					},
					'90%': {
						opacity: '1',
						transform: 'translateY(100vh) scaleY(1.5)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(100vh) scaleY(1.5)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1.5)',
						opacity: '0.4'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				},
				'flip': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateY(180deg)'
					}
				},
				'flip-back': {
					'0%': {
						transform: 'rotateY(180deg)'
					},
					'100%': {
						transform: 'rotateY(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-zoom': 'gentle-zoom 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out both',
				'float': 'float 3s ease-in-out infinite',
				'drift': 'drift 4s linear infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'sway': 'sway 8s ease-in-out infinite',
				'pan-up': 'pan-up 12s ease-in-out infinite',
				'slow-zoom': 'slow-zoom 30s ease-in-out infinite',
				'water-drop': 'water-drop 6s linear infinite',
				'ripple': 'ripple 3s ease-out infinite',
				'pan-left': 'pan-left 15s ease-in-out infinite',
				'pan-right': 'pan-right 15s ease-in-out infinite',
				'slow-pan-left': 'slow-pan-left 20s ease-in-out infinite',
				'slow-pan-right': 'slow-pan-right 20s ease-in-out infinite',
				'camera-sweep': 'camera-sweep 25s ease-in-out infinite',
				'flip': 'flip 0.6s ease-in-out forwards',
				'flip-back': 'flip-back 0.6s ease-in-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
