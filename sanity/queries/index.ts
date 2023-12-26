import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getSite() {
  return client.fetch(groq`*[_type == "site"][0] {
    _id,
    title,
    description,
    favicon,
    logo
  }`);
}

export async function getPosts() {
  return client.fetch(groq`*[_type == "post"] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`);
}

export async function getPost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug] {
      _id,
      title,
      metadata,
      slug,
      tags,
      author->{
        _id,
        name,
        slug,
        image,
        bio
      },
      mainImage,
      publishedAt,
      body
    }[0]`,
    { slug }
  );
}

export async function getCategories() {
  return client.fetch(groq`*[_type == "category"] {
    _id,
    title,
    description
  }`);
}

export async function getCategory(slug: string) {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug] {
      _id,
      title,
      description
    }[0]`,
    { slug }
  );
}

export async function getAuthors() {
  return client.fetch(groq`*[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio
  }`);
}

export async function getAuthor(slug: string) {
  return client.fetch(
    groq`*[_type == "author" && slug.current == $slug] {
      _id,
      name,
      slug,
      image,
      bio
    }[0]`,
    { slug }
  );
}

export async function getEducation() {
  return client.fetch(groq`*[_type == "education"] {
    _id,
    school,
    degree,
    field,
    start,
    end,
    description
  }`);
}

export async function getExperiences() {
  return client.fetch(groq`*[_type == "experience"] {
    _id,
    key,
    company,
    title,
    start,
    end,
    description,
    skills[]->{
      _id,
      title,
      category->{
        _id,
        title
      }
    }
  }`);
}

export async function getExperience(slug: string) {
  return client.fetch(
    groq`*[_type == "experience" && slug.current == $slug] {
      _id,
      key,
      company,
      title,
      start,
      end,
      description,
      skills[]->{
        _id,
        title,
        category->{
          _id,
          title
        }
      }
    }[0]`,
    { slug }
  );
}

export async function getSkills() {
  return client.fetch(groq`*[_type == "skill"] {
    _id,
    title,
    category->{
      _id,
      title
    }
  }`);
}

export async function getSkill(slug: string) {
  return client.fetch(
    groq`*[_type == "skill" && slug.current == $slug] {
      _id,
      title,
      category->{
        _id,
        title
      }
    }[0]`,
    { slug }
  );
}

export async function getSkillByCategory(slug: string) {
  return client.fetch(
    groq`*[_type == "skill" && category->slug.current == $slug] {
      _id,
      title,
      category->{
        _id,
        title
      }
    }`,
    { slug }
  );
}

export async function getSkillCategories() {
  return client.fetch(groq`*[_type == "category"] {
    _id,
    title,
    description
  }`);
}

export async function getProjects() {
  return client.fetch(groq`*[_type == "project"] {
    _id,
    name,
    slug,
    image,
    url,
    description,
  }`);
}

export async function getProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug] {
      _id,
      name,
      slug,
      image,
      url,
      description,
    }[0]`,
    { slug }
  );
}

export async function getPages() {
  return client.fetch(groq`*[_type == "page"] {
    _id,
    title,
    slug,
    content
  }`);
}

export async function getPage(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug] {
      _id,
      title,
      slug,
      content
    }[0]`,
    { slug }
  );
}

export async function getIntro() {
  return client.fetch(groq`*[_type == "intro"] {
    _id,
    name,
    location,
    email,
    phone,
    website,
    summary
  }[0]`
  );
}

export async function getMenuItems() {
  return client.fetch(groq`*[_type == "menuItem"] {
    _id,
    name,
    link,
    order
  }`);
}
