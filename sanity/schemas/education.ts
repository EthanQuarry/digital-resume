import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "school",
      title: "School",
      type: "string",
    }),
		defineField({
			name: "degree",
			title: "Degree",
			type: "string",
		}),
		defineField({
			name: "field",
			title: "Field",
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
  ],
});