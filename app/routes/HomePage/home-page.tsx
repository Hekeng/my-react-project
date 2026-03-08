import Hero from '../../components/hero/Hero'

export default function HomePage() {
    return (
		<main className='flex flex-1 flex-col'>
			<Hero />

			<div className='bg-background relative z-[500] flex flex-1'>
				<div className='flex-1'>
					<p className='text-body'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus nulla, corporis possimus eius ex error rem fuga
						nostrum sequi, quae praesentium inventore sint aut
						voluptate, quod debitis! Accusamus, corporis vitae!
					</p>
				</div>
			</div>
		</main>
    );
}
