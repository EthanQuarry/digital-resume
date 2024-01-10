"use client"
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
	onDateChange: (date: string) => void
}

export function DatePicker({ onDateChange }: DatePickerProps) {
	const [date, setDate] = useState<Date | undefined>(new Date())
	const [formattedDate, setFormattedDate] = useState<string | undefined>(format(date || new Date(), 'yyyy-MM-dd'))

	useEffect(() => {
		if (date) {
			const newFormattedDate = format(date, 'yyyy-MM-dd');
			setFormattedDate(newFormattedDate);
			onDateChange(newFormattedDate);
		}
	}, [date, formattedDate, onDateChange]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal border-highlight hover:bg-highlight hover:text-highlight-foreground focus:bg-highlight focus:text-highlight-foreground",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{formattedDate}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0 border-highlight shadow">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					disabled={(date) =>
						date > new Date() || date < new Date("1995-06-16")
					}
					initialFocus
					className="text-highlight"
				/>
			</PopoverContent>
		</Popover>
	)
}
