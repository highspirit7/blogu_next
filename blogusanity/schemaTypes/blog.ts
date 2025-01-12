import { defineType } from 'sanity'

export default defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required().min(8).max(64),
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    type: 'text',
                    name: 'alt',
                    title: 'Description',
                },
            ],
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    name: 'break',
                    type: 'object',
                    title: 'Break',
                    fields: [
                        {
                            name: 'style',
                            type: 'string',
                            options: {
                                list: ['break', 'doubleBreak', 'lineBreak'],
                            },
                        },
                    ],
                },
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        description: 'Read https://css-tricks.com/use-target_blank/',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    fields: [
                        {
                            title: 'Position',
                            name: 'position',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Center', value: 'center' },
                                    { title: 'Left', value: 'left' },
                                    { title: 'Right', value: 'right' },
                                ],
                                layout: 'radio',
                                isHighlighted: true,
                            },
                        },
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Description',
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                    options: {
                        hotspot: true,
                    },
                },
                // ! code 타입 없는 것으로 보인다. 리서치 필요.
                {
                    type: 'code',
                },
            ],
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
    ],
})
	
