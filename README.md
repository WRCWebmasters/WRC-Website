# WRC-Website
## General
Hello webmasters! 
- A checklist of things to check before the start of each semester can be found in the checklist.txt document. Please update it as requirements change.
- For information on how to use to dynamic name updating system, read the README in `pages/config`.

## 2019 Dynamic JS Name System Update
To address issues of stale names floating around random pages on the site, as well as to facilitate yearly updates to fellows/paas/leadership/etc, a system to transform CSVs of information into dynamically inserted HTML element via JS has been developed. Read more about it in the README doc in the `pages/config` directory.

## 2017 Redesign of the Will Rice College Website

**Why?**

Erica and I became webmasters, and decided that the current code structure is too convoluted, and the organizational structure of the website could use some updating. Furthermore, the current site suffers from:
- Strange responsive bugs
- Poor design
- Too much un-useful information
- Bloat

**Goals**

Codewise, make it as light and simple as possible. This means sticking to pure HTML/CSS as much as possible. We've allowed ourselves Bootstrap for speed, consistency, and ease, and there are some tricks that are pulled off via JQuery, but we're trying to keep JS use to a minimum. 

Final-product wise, there are a few. 
- Make the organizational structure understandable, so that no one is guessing where information is located. This means simplifying the menu layout and consolidating some current pages.
- Providing more value. Some pages just list a description and some names, with no actionable content. We want a visitor to find all the information they need (and none that they don't) on this site, instead of some vague, placeholder-like content.
- More mobile responsiveness and prettier looks. 
- Reducing large text blocks. Pretty much all current content is a huge wall of text. We want to reduce the size and prevelence of these walls of text by replacing them with captioned pictures and short videos that convey the same information in a more plesant manner. 

