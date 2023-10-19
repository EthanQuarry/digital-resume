"use client"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
	name: z.string().min(1, {
		message: "Please enter your name.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	subject: z.string().min(1, {
		message: "Please enter a subject.",
	}),
	message: z.string().min(1, {
		message: "Please enter a message.",
	}),
	file: z.string().optional(),
})

export function ContactForm() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
			file: "",
		},
	})

	// 2. Define a submit handler.
	// function onSubmit(values: z.infer<typeof formSchema>) {
	// 	// Do something with the form values.

	// 	// ✅ This will be type-safe and validated.
	// 	console.log(values)
	// }

	return (
		<div className="flex flex-col w-full items-center">
			<Form {...form}>

				<form action={`https://formbold.com/s/${process.env.NEXT_PUBLIC_FORM_ID}`} method="POST" className="space-y-8 w-full max-w-xl">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name{" "}<span className="text-destructive">*</span></FormLabel>
								<FormControl>
									<Input type="text" placeholder="Your name" {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email{" "}<span className="text-destructive">*</span></FormLabel>
								<FormControl>
									<Input type="email" placeholder="Your email address" {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject{" "}<span className="text-destructive">*</span></FormLabel>
								<FormControl>
									<Input type="text" {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message{" "}<span className="text-destructive">*</span></FormLabel>
								<FormControl>
									<Textarea {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="file"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Attach File</FormLabel>
								<FormControl>
									<Input type="file" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>
					<Button type="submit">Submit</Button>
				</form>

			</Form>
			<p className="mt-4 text-muted-foreground text-sm">
				<span className="text-destructive">*</span>{" "}Required
			</p>
		</div>
	)
}
