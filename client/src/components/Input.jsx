const Input = ({ icon: Icon, errorIcon: ErrorIcon, isError, ...props }) => {
	return (
		<div className='relative mb-6'>
			{/* Left Icon */}
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-customRed-400' />
			</div>

			{/* Input Field */}
			<input
				{...props}
				className='w-full pl-10 pr-10 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 
				focus:border-customRed-400 focus:ring-2 focus:ring-customRed-500 text-white placeholder-gray-400 
				transition duration-200 outline-none'
			/>

			{/* Right Icon (Error) */}
			{isError && (
				<div className='absolute inset-y-0 right-0 flex items-center pr-3'>
					<ErrorIcon className='size-5 text-red-500' />
				</div>
			)}
		</div>
	);
};

export default Input;
