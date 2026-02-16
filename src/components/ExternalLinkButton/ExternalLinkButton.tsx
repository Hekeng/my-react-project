import gitHubBlack from '../../assets/img/icons/gitHub-black.svg'

type Props = {
  url: string,
  text: string,
}

const ExternalLinkButton = ({url, text}: Props) => {
    return ( 

		<a href={url} className="btn-outline">
			<img src={gitHubBlack} alt="GitHub icon"/>
			{text}
		</a>

     );
}
 
export default ExternalLinkButton;