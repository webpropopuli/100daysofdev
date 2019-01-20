---
slug: '/day17'
title: '100daysofcode: Day 17'
date: '2019-01-07'
category: '100days'
---

<SEO title="100daysofcode | Day17" />

Adding another green block to my fCC cert by finishing the Javascript Intermediate Algorithms section and "Make a Person"

Reminded me how shaky I am on JS objects (because I'm anti-OOP and I stupidly conflated objects in JS with OOP in C#). My bad.

Anyway, the problem is stupid simple, it's a syntax challenge mostly. Basic solution has things that look like:

```
var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.setLastName = function(name) {
    fullName = `${fullName.split(" ")[0]} ${name}`;
  };

};
```

Key takeaway is that I don't need to say `this.fullName` but just make it a normal variable in the new object.

---

Also, the Gatsby Blog is acting up a bit.

Occasionally, the linking between pages gets messed up and the 'prev/next' doesn't show correctly. I suspect this is something to do with the build process however as, if I run `gatsby develop` enough times, it seems to sort itself out.

I did fix a bug where I only queried the latest 10 posts in createPage - was probably reusing code from the Archive page, but create... needs to build \*all pages. Duh.
