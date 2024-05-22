---
layout: post
title:  "Software for Play: Beyond games"
date:   2024-05-22
---

In a simplified world, all software interactions fall into one of two categories: **Work** and **Play**. 

**Work** is anything that intends to leave a mark on the real world - interactions that are part of our jobs are obvious examples, such as updating the slides for the next presentation, writing code to fix a bug, and messaging our colleagues to ask them to review the slides and the code. Outside our jobs we might consider booking flights, ordering new socks, or responding to messages from 3 weeks ago. 

**Play** is anything that doesn't intend to leave a mark - play is ethereal. Play ends when it ends and its as if it never happened. Not literally of course, but the fact that it happens in a bubble is critical. As soon as the bubble bursts (and there's a real world effect), play is over - like when your friend fell over when playing tag. Play happens for its own sake. 

**Software for Work** comprises almost entirely of **tools**. Tools are things that help or enable you to do a particular activity. Email clients help you send emails, IDEs help you write code, browsers enable you to scroll Twitter. Conveniently, there's barely anything that would constitute a work interaction that isn't satisfied by a tool - its a complete set. 

**Software for Play** comprises almost entirely of **games**. Games are most often characterised by a set of rules, a progression system (eg scores), and win-lose conditions. Video games are obvious examples, but social media resemble games more than tools (and they are definitely for play in a majority of cases) - take Instagram:
- **Rules:** Only post images; interactions can be likes, comments, or shares.
- **Progression:** Number of likes, comments, follows. 
- **Win-lose condition:** Hopefully none, but Instagram isn't innocent of causing any drama.
But there's something very distinctly missing from play that isn't fully satisfied by games. What is play without rules and progression and winning? 

<div style="align-items: center; text-align: center; padding: 12px; color: #a1a1a1">
<img src="/assets/images/sets.png" alt="Software for Work and Play" width="100%"/>
<p>An oversimplified grouping of Software for Work and Software for Play. Perhaps better as a spectrum...</p>
</div>

Reflecting on my childhood, its easy to map work and play onto all the things I did. School, chores, and sleep is work; hanging out with friends, art, and video games is play... 

...*But not all forms of play involves a game*. Its clear that games are an abstraction higher than tools - so what are the 'things' that we play with? 

On a family road trip to Canada from 2006 (?), we spent a lot of time in campsites next to nature. My brother and I, wanting to play, went to find props - like a stick. What this particular stick was I could not tell you, but I know it could have been anything from a sword to a boom mic to a device to annoy my brother with. The stick is a **toy**. 

<div style="align-items: center; text-align: center; padding: 12px; color: #a1a1a1">
<img src="/assets/images/stickboys.png" alt="My brother and I camping" width="100%"/>
<p>Younger me playing a hero holding Excalibur (stick version) next to my brother.</p>
</div>

Here is where I propose my grand and egoistic new terminology for future designers: **Design more toys**. In the context of HCI, I define a **toy** as a device or artefact (or thing) that can be a prop for any playful interaction. A toy can take on one or many roles when playing and does not necessarily 'serve a purpose'. A prop is never necessary for play, but rather its use shapes the interaction space and its opportunities. 

To me, this type of software is distinctly missing: software for play that is not designed to engage users strictly within their game, but which is designed to be a prop for a world created by the users themselves. 

## What might toy softwares look like? 

Seeing how so many playful activities have been turned into games when 'porting' them to software saddens me - even though its inevitable given the way computers require rules and constraints. In particular, I would like to talk about my favourite toy: pen and paper. 

Perhaps the only toy I still own as an adult, I always have pen and paper in my bag or desk. I use it for sketching, coding, remembering, and importantly, for journalling. I prefer my processes to start with play before they become work - it creates more opportunities and I can go a little more crazy with the ideas and plans before applying the real world constraints to them. 

Looking at the digital alternatives for each of these scenarios, I feel that they frequently resort to toolifying or gamifying the entire stack. I can't really 'play around' in VSCode easily, nor does taking notes in Notion feel particularly playful. However, to demonstrate my message I started with **journalling**. 

<a href="https://noblank.space/work/amulet">Amulet</a> is a journal I am working in through <a href="https://noblank.space">No Blank Space</a> designed to be *like* a toy. Instead of asking a series of questions on a series of screens like "Name 3 things you are grateful for today" to "Rate your day on a scale of sad face to happy face" there are no direct questions in the main interface. There is an abstract shape which I call the 'Amulet' which has various tuneable parameters that users can play with. This visual represents the users' mood / energy / day - it doesn't matter! There are no rules, there is no progression or evaluation, no "completeness" or streaks. 

The idea is that its a journal you play around with. The story comes from asking yourself various different questions: 
- Why does it feel like a blue day? 
- Why is the amulet so small? 
- Why does it feel more floral than "stone-like"?

Playing around with the purpose of each pose and parameter is where the enjoyment comes from. There's no stakes - you play for the sake of play. 

<div style="align-items: center; text-align: center; padding: 12px; color: #a1a1a1">
<img src="/assets/images/amuletprototype.gif" alt="Amulet prototype" width="80%"/>
<p>Amulet, a "toyified" journal. (Please excuse the crash, I am still learning how to use SwiftData in XCode previews 😌)</p>
</div>

**IMPORTANTLY**, Amulet is not even in a release state and, even when it will be, I don't think it can truly be considered a toy given its constrained to the app itself. Earlier I said its *like* a toy for this reason: its a toy is only true if people see it as one.  Instead, I describe it as a "toyified" journal - a visual and interactive prop for journalling. The future plans involve different visualisations as various toys to play with: water-based metaphors, engine or mechanical metaphors, battery metaphors, and many more. I am aware sliders aren't exactly fun - I am also working on making the interactions more toy-like as well...

I believe there are plenty of toy softwares that don't exist yet and will only become more possible and viable in the future. To not just say, but to actually do, I started **No Blank Space** with the following tenet:

<p style="text-align: center;">
	Making human things a little more human.
</p>


<hr>

# Acknowledgements
I do not believe I came up with any of the definitions used in this writing, I only use them to tell a story and apply them on a "good enough" basis. 

# Useful references 
- Berne, E. (1968). _Games people play: The psychology of human relationships_ (Vol. 2768). Penguin Uk.
- Ehrmann, J., Lewis, C., & Lewis, P. (1968). Homo ludens revisited. _Yale French Studies_, (41), 31-57.
- Staab, P. A., Williams, A. J., Robertson, M. D., & Slovak, P. (2024, May). “Can you be with that feeling?”: Extending Design Strategies for Interoceptive Awareness for the Context of Mental Health. In _Proceedings of the CHI Conference on Human Factors in Computing Systems_ (pp. 1-21).
- Lakoff, G., & Johnson, M. (2008). _Metaphors we live by_. University of Chicago press.