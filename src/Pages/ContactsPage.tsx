

const ContactsPage = () => {
	return ( 
		<main className="section">
			<div className="container">
					<h1 className="title-1">Contacts</h1>

					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Location</h2>
							<p>Ukrain, Riev</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Telegram / WhatsApp</h2>
							<p><a href="tel:+380730325033">+3 8(073)-032-50-33</a></p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Email</h2>
							<p><a href="mailto:koydano@gmail.com">koydano@gmail.com</a></p>
						</li>
					</ul>

			</div>
		</main>
	 );
}
 
export default ContactsPage;