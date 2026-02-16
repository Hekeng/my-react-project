import { Link } from "react-router-dom";

const Page404 = () => {
	return ( 
		<div className="btn-outline">
		
			<h2>404 — Страница не найдена </h2>

			<span>Упс. Похоже, вы свернули не туда.
			Страница, которую вы ищете, не существует, была перемещена
			или никогда не существовала.</span>
			<strong>
			Но не переживайте — всё под контролем.
			Вернитесь на главную страницу или выберите раздел в меню.
			</strong>

			<Link to="/"> To Main Page </Link>

		
		</div>
	 );
}
 
export default Page404;