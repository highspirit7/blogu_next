# Next.js + Sanity Blog Project

This project is a blog application built with [**Next.js**](https://nextjs.org/) and [**Sanity**](https://www.sanity.io/). It includes a Sanity Studio for managing blog content and a Next.js to render and display blog posts.


## How to run

### Next.js
You can run the Next.js development server in root directory:

```bash
npm run dev
```

You do not need to set up any environment variables and open [http://localhost:3000](http://localhost:3000) with your browser. 

### sanity studio
There is a 'blogusanity' folder in a root directory.
This 'blogusanity' folder was created for [sanity stuio](https://www.sanity.io/docs/sanity-studio). This project contains configuration, schemas(blog, category in my case) for sanity studio.
Can't run dev server without environment variables. Even if you manage to run, you can't see anythinng without logging in with my sanity account.


## Page structure
- Home page
- Each blog page
- Search page


## Features
- support themes(light, dark, system)
- infinite scrolling on a home page
- search : search by blogs' title
- comment : powered by utterances
- each blog page
  - code highlight

## References
At the early stage of development, I got a lot of help from [this video](https://www.youtube.com/watch?v=Lydgf-Hvla4d).


## Tech Stack
Next.js, TypeScript, Sanity, Zustand, shacdn/ui, tailwindcss, vitest
   
## Deployed URL
https://blogu-next.vercel.app/
