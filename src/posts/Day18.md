---
slug: '/day18'
title: '100daysofcode: Day 18'
date: '2019-01-08'
category: '100days'
---

<SEO title="100daysofcode | Day18, oh, StackBlitz" />

Part of learning to code - or getting good at anything really - is trying things that don't work out.

Starting and abandoning projects, recognizing that you shoulda gone left when you went right.

Fail fast anyone?

The important thing is not what you _accomplished_ but rather what you _learned_.

Today's foray into "what was I thinking?" introduced me to [StackBlitz](https://stackblitz.com/)

O. M. G. StackBlitz might be the coolest thing I've seen this year. Check this out...

It is an online editor that looks and feels like VS Code and

- can import packages directly from NPM with auto prompting
- handles hot-reloading
- is React (and more) -aware out of the box - no more CRA magic
- Manages your codebase 'kinda' like Github (and GH is coming soon)
- Delploys to a Firebase URL with a single click
- Let's you work offline and handles the sync when you reconnect.

I built _and_ deployed a React app in three minutes. With a real URL on Firebase. No magic duct-tape, no mysterious webpacking, no hosting hijinks, no tears.

Did I "OMG" at you already?

### Ruh Roh...

So I added a simple image to my home page.

```
import myImg from './img/daves-face.jpg'
...
<img src={myImg}>
```

Not rocket science, but no image. Being somewhat new to React, I'm thinking this is _my_ fault. And spent two hours searching and StackExchange-ing until I start to believe it isn't actually my problem.

Well, it _is_ my problem, since I can't put up a simple image, but it isn't my _fault_. Turns out StatckBlitz is broken and can't handle static assets.

To be fair, you can see how this might be a challenge for the dev team, since the IDE lives in the browser, where is the right place to store assets that normally live in local storage or get served?

###But I'm still kinda sadface..

This was gonna be sooooo cool but since I'm creating a particular app and I need my stupid pictures, I had to bid StackBlitz a tearful farewell for now. It's not you StackBlitz, it's me.

### Awesome takeaways

First, SB is kinda awesome, and once they have native Github, I'm sure I'll be back because it really is that cool.

Second, searching for alternatives, helped me find [React Static](https://github.com/nozzle/react-static) and [Next.js](https://nextjs.org/)

I decided to use Next as I need to explore the SSR part of static sites and it _feels_ like the right choice for now.

Another detour from the **real** work of actually writing my app, but this kind of learning is irreplaceable and I'm glad for everything that went wrong.
