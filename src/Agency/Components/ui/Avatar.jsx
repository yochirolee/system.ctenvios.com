export default function Avatar({ avatarUrl }) {
	return (
		<>
			<div className="flex -space-x-1 overflow-hidden">
				<img
					className={`inline-block aspect-auto   rounded-full ring-2 ring-white  m-2 h-20 w-auto`}
					src={avatarUrl}
					alt="Avatar"
				/>
			</div>
		</>
	);
}
