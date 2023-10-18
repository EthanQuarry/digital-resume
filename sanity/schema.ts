import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import education from './schemas/education'
import experience from './schemas/experience'
import intro from './schemas/intro'
import skill from './schemas/skill'
import project from './schemas/project'
import page from './schemas/page'
import menuItem from './schemas/menuItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, education, experience, intro, skill, project, page, menuItem],
}
