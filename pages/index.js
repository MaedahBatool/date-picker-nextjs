import { Inter } from 'next/font/google';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="pb-20 	">
				<h1 className="uppercase text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
					Date Range Picker
				</h1>
			</div>
			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] w-1/6">
				<Datepicker
					placeholder={'Select Date'}
					showShortcuts={true}
					showFooter={true}
					primaryColor={'cyan'}
					value={value}
					onChange={handleValueChange}
				/>
			</div>
		</main>
	);
}
