import { Link } from 'react-router'
import gitHubBlack from '../../assets/img/icons/gitHub-black.svg'
import { buttonVariants } from '@/components/ui/button'

type Props = {
	url: string
	text: string
}

const ExternalLinkButton = ({ url, text }: Props) => {
	return (
		<Link
			to={
				url
				// || '#'
			}
			onClick={(e) => !url && e.preventDefault()}
			className={buttonVariants({
				variant: 'default',
				size: 'lg',
			})}
		>
			<img src={gitHubBlack} alt='GitHub icon' />
			{text}
		</Link>
	)
}

export default ExternalLinkButton
