const Ready = () => {
  return (
    	<div className='bg-lemon-green container mx-auto rounded-xl mb-4'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col justify-center items-center min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] py-8 sm:py-12 lg:py-16 text-center'>
					<h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold mb-4 sm:mb-6 lg:mb-8 px-2 leading-tight'>
						Ready to Join the Future of
						Innovation in Ikeja?
					</h1>

					{/* Description with responsive sizing and max width */}
					<p className='max-w-[280px] sm:max-w-[500px] lg:max-w-[650px] xl:max-w-[700px] text-white text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 px-4 leading-relaxed'>
						Discover flexible workspaces,
						premium retail zones, and
						unmatched amenities, all at
						Awolowo Tech Hub
					</p>

					<button
						// title='Request info'
						className='bg-lemon-green px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 rounded-xl border border-white text-white text-sm sm:text-base lg:text-lg font-medium hover:bg-white hover:text-lemon-green transition-colors duration-300 min-w-[140px] sm:min-w-[160px]'
					>Request info</button>
				</div>
			</div>
		</div>
  )
}
export default Ready