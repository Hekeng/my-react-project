// import { useEffect } from "react";
import { SocialsData } from "@/components/helpers/SocialsData";
import { Link } from "react-router";
interface socialsProps{
	className: string
}



const Socials = ({className}:socialsProps) => {

console.log("Mounted Socials", SocialsData);

  return(
		<>
			{SocialsData.map(s => {
			const Icon = s.icon
			return ((s.active)&&
				<li key={s.name} className="social__item">
					<Link  to={s.url} target="_blank" rel="noreferrer">
						<Icon className= {className} />
					</Link>
				</li>
			)
			})}
		</>
	); 


}

export default Socials;