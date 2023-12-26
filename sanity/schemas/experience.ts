import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
		defineField({
			name: "key",
			title: "Key",
			type: "number",
		}),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
		defineField({
			name: "title",
			title: "Job Title",
			type: "string",
		}),
		defineField({
			name: "start",
			title: "Start Date",
			type: "date",
		}),
		defineField({
			name: "end",
			title: "End Date",
			type: "date",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: 'blockContent',
		}),
		defineField({
			name: "skills",
			title: "Skills",
			type: "array",
			of: [{type: "reference", to: [{type: "skill"}]}],
		})
  ],
});