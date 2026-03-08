import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	[
		// 1. Base
		`border-background/50 inline-flex shrink-0 items-center justify-center gap-2 border whitespace-nowrap`,
		// 2. Form
		`text-body rounded-md transition-all outline-none`,
		// 3. Focus
		`focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`,
		//hover
		`hover:bg-secondary/80 hover:shadow-btn-on-dark hover:-translate-y-[0.2rem]`,

		//active
		`active:translate-y-0 active:shadow-none`,

		// 4. Ошибки
		`disabled:pointer-events-none disabled:opacity-50`,
		`aria-invalid:border-destructive aria-invalid:ring-destructive/20`,
		`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-2.5`,
	],
	{
		variants: {
			variant: {
				default: `bg-primary text-primary-foreground hover:bg-primary/90`,
				destructive: `bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white`,
				outline: `bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs`,
				secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
				ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
				link: `text-primary underline-offset-4 hover:underline`,
			},
			size: {
				default: `h-[4.5rem] px-4 py-2 has-[>svg]:px-3`,
				xs: `h-2 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,
				sm: `h-3 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,
				lg: `text-body h-4 rounded-md px-5 font-medium has-[>svg]:px-2`,
				icon: `size-9`,
				'icon-xs':
					"size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
				'icon-sm': 'size-8',
				'icon-lg': 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

function Button({
	className,
	variant = 'default',
	size = 'default',
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot.Slot : 'button'

	return (
		<Comp
			data-slot='button'
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
