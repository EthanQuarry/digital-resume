import { defineType, defineField } from "sanity"

export default defineType({
	name: "menuItem",
	title: "Menu Items",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "string",
		}),
		defineField({
			name: "order",
			title: "Order Number",
			type: "number",
		})
	],
})