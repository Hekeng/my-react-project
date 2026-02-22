import Hero from '../components/Hero/Hero'

const HomePage = () => {
	return (
		<>
			<Hero />

			<div className="relative z-[500] flex-1 bg-background flex">
				<div className="flex-1">
					<p className="text-body ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla, corporis possimus eius ex error rem fuga nostrum sequi, quae praesentium inventore sint aut voluptate, quod debitis! Accusamus, corporis vitae!
					</p>
				</div>
			</div>
		</>
	)
}

export default HomePage
