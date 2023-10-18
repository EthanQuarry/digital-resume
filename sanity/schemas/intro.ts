import { defineField, defineType } from "sanity";

export default defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
		}),
		defineField({
			name: "phone",
			title: "Phone",
			type: "string",
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "string",
		}),
		defineField({
			name: "summary",
			title: "Summary",
			type: 'blockContent',
		}),
  ],
});