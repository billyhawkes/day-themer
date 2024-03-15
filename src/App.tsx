import { For } from "solid-js";
import "./App.css";
import { cn } from "./utils/cn";

// User created
const activities = [
	{
		name: "Sleep",
		start: 0,
		end: 7,
		color: "bg-gray-600",
	},
	{
		name: "Morning Routine",
		start: 7,
		end: 8,
		color: "bg-green-600",
	},
	{
		name: "Creative",
		start: 8,
		end: 10,
		color: "bg-blue-600",
	},
	{
		name: "Work",
		start: 10,
		end: 14,
		color: "bg-yellow-600",
	},
	{
		name: "Lift",
		start: 14,
		end: 15,
		color: "bg-red-600",
	},
	{
		name: "Work",
		start: 15,
		end: 18,
		color: "bg-yellow-600",
	},
	{
		name: "Relax",
		start: 18,
		end: 22,
		color: "bg-purple-600",
	},
	{
		name: "Sleep",
		start: 22,
		end: 24,
		color: "bg-gray-600",
	},
];

const hours: Record<number, string> = {
	0: "",
	1: "1 AM",
	2: "2 AM",
	3: "3 AM",
	4: "4 AM",
	5: "5 AM",
	6: "6 AM",
	7: "7 AM",
	8: "8 AM",
	9: "9 AM",
	10: "10 AM",
	11: "11 AM",
	12: "12 PM",
	13: "1 PM",
	14: "2 PM",
	15: "3 PM",
	16: "4 PM",
	17: "5 PM",
	18: "6 PM",
	19: "7 PM",
	20: "8 PM",
	21: "9 PM",
	22: "10 PM",
	23: "11 PM",
};

const App = () => {
	const date = new Date();

	return (
		<main class="max-w-screen flex flex-col">
			<For each={Object.entries(hours)}>
				{(hour) => (
					<div
						style={{
							top: `${Number(hour[0]) * 80 - 10}px`,
						}}
						class="absolute h-[20px] w-full flex items-center"
					>
						<p class="w-14">{hour[1]}</p>
						<div class="h-0.5 w-full bg-gray-700" />
					</div>
				)}
			</For>
			<For each={activities}>
				{(activity) => (
					<div
						class="absolute w-full pl-14 p-1"
						style={{
							height: `${(activity.end - activity.start) * 80}px`,
							top: `${activity.start * 80}px`,
							opacity:
								activity.start < date.getHours() && activity.end > date.getHours()
									? 1
									: 0.7,
						}}
					>
						<div class={cn("h-full rounded-lg p-2", activity.color)}>
							{activity.name}
						</div>
					</div>
				)}
			</For>
			<span
				class="absolute bg-red-500 w-full h-2 z-100 rounded"
				style={{
					top: `${(date.getHours() + date.getMinutes() / 60) * 80}px`,
				}}
			/>
		</main>
	);
};

export default App;
