


const SkillCard = ({title, img}) => {
	return ( 
			<li className="project">
			
			<img src={img} alt="Project img" className="project__img"/>
			<h3 className="project__title">{title}</h3>
			
		</li>
	 );
}
 
export default SkillCard;
