import gitHubBlack from '../../assets/img/icons/gitHub-black.svg'
import { buttonVariants } from '@/components/ui/button'

type Props = {
	url: string
	text: string
}

const ExternalLinkButton = ({ url, text }: Props) => {
	return (
		<a
			href={
				url
				// || '#'
			}
			onClick={(e) => !url && e.preventDefault()}
			className={buttonVariants({
				variant: 'default',
				size: 'lg',
				// className: "!bg-[var(--chart-4)] !text-[var(--white)] hover:!bg-[var(--chart-3)]"
			})}
		>
			<img src={gitHubBlack} alt='GitHub icon' />
			{text}
		</a>
	)
}

export default ExternalLinkButton
