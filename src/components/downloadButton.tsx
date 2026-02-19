import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'

type Props = {
	url: string
	text: string
}

const DownloadButton = ({ url, text }: Props) => {
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
				// className: "!bg-[var(--chart-4)] !text-[var(--white)] hover:!bg-[var(--chart-3)]"
			})}
		>
			<DownloadIcon />
			{/* <img src={DownloadIcon} alt='Download' /> */}
			Download CV
		</Link>
	)
}

export default DownloadButton
