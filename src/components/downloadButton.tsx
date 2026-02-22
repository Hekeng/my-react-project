import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button' // Импортируем сам компонент
import { DownloadIcon } from 'lucide-react'

type Props = {
    url?: string
    text?: string
}

const DownloadButton = ({ url = '#', text = 'Download' }: Props) => {
    return (
        <Button asChild variant="default" size="lg">
            <Link to={url} onClick={(e) => url === '#' && e.preventDefault()}>
                <DownloadIcon /> {/* Иконка сама подхватит размер из buttonVariants */}
                {text}
            </Link>
        </Button>
    )
}

export default DownloadButton
