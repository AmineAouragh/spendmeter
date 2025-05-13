/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		fontFamily: {
    			BebasNeue: [
    				'Bebas Neue',
    				'sans-serif'
    			],
    			Inter: [
    				'Inter',
    				'sans-serif'
    			],
				Nunito: ['Nunito', 'system-ui', 'sans-serif'],
    			Cairo: [
    				'Cairo',
    				'sans-serif'
    			],
    			Poppins: [
    				'Poppins',
    				'sans-serif'
    			],
    			Anton: [
    				'Anton',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
        brand: '#4CAF50',       // primary green
        accent: '#2962FF',      // deep blue
        lime: '#AEEA00',        // bright lime (success)
        amber: '#FFB300',       // warning
        danger: '#FF5252',      // danger (over-budget)
        bgsoft: '#FAFAFA',      // light background
        textdark: '#212121',    // primary text
        textlight: '#616161',   // secondary text
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
};