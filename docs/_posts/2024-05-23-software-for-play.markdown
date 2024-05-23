---
layout: post
title:  "Software for Play: Beyond games"
date:   2024-05-23
---

All software interactions fall into one of two categories: **Work** or **Play**. 

**Work** can be categorised as anything intended to leave a mark, with consequences in the 'real' world. An obvious example might be the tasks we carry out as part of our jobs - updating slides for the next team presentation, writing code to fix yet another bug and then slacking our coworkers to review aforementioned slides and code. Outside our jobs we might consider booking flights, ordering new socks, or responding to messages from 3 weeks ago. 

**Play** is anything that doesn't intend to leave a mark - play is blissful and ephemeral. Play ends when it ends and once it ends, it is almost as if it never happened. Not literally of course, but the fact that it happens in a bubble is critical. When the player is in a bubble - they are *playing*. As soon as the bubble bursts and there are consequences of the play in the real world - it ceases to be play. Play happens for play's sake and is self-contained. 

![sets.png](/assets/images/sets.png)
*A high-level map to envision the current state of Software for Work and Software for Play.*

**Software for Work** comprises almost entirely of **tools**. Tools are things that enable you to do a particular activity. Email tools help you send emails, IDEs help you write code, browsers help you scroll Twitter. Conveniently, there's almost no Work that isn't satisfied by a Tool.

**Software for Play** comprises almost entirely of **games**. Games can be better understood by three characterising features: rules, progression systems, and win-lose conditions. 

When you think of games, video games are an intuitive example but I’d encourage you to think broader. Social media for example fits the characterisation of Games more than that of Tools - take Instagram:
1. **Rules:** Only post images; interactions can be likes, comments, or shares.
2. **Progression:** Number of likes, comments, follows. 
3. **Win-lose condition:** Hopefully none, but Instagram isn't innocent of causing any drama.

***But while some Games are Play… not all Games are Play.*** An influencer using social media for her Work is not Playing. So if we know that Games are an abstraction higher than tools - what are the ‘things’ that we play with? If Tools enable Work, what enables Play? What are the things we play with?

Thinking back to my childhood (perhaps what most people associate with Play) - it is much easier to clearly map Work and Play onto all the things I did. 

School, chores, sleep - **Work**.

Hanging out with friends, art, video games - **Play**.

On a family road trip to Canada from 2006 (?), we spent a lot of time in campsites next to nature. My brother and I, wanting to play, went to find props - like a stick. What this particular stick was I could not tell you, but I know it could have been anything from a sword to a boom mic to a device to annoy my brother with. The stick is a *toy*.

![Holiday photo](/assets/images/stickboys.png)
*Younger me playing a hero holding Excalibur (stick version) next to my brother.*
## Design more Toys.

Here is where I propose to my fellow designers - **Design more Toys**. 

In the context of HCI, I define a Toy as a device or artefact that can be a prop for any playful interaction. It infuses the spirit of play into a user’s journey. A Toy can take on one or many roles when playing and does not necessarily 'serve a purpose'. A prop is never necessary for play, but its use unmistakably shapes the interaction space and its opportunities.

To me, this type of software is distinctly missing: software for play that is not designed to engage users strictly within their game, but which is designed to be a prop for a world created by the users themselves.
## The case for more Toy Software
Computers requires rules and constraints and that means that a lot of otherwise playful activities are turned into Games when ‘porting them.’ This saddens me and I am not so sure this Play->Game pipeline is always entirely unavoidable.

Let me paint a picture. My favourite toy is a pen and paper. The only Toy I still own as an adult. I always have pen and paper in my bag or desk. I use it for sketching, coding, remembering, and importantly, for journaling. I prefer my processes to start with play before they become work - it creates more opportunities and I can go a little crazier with the ideas and plans before applying the real world constraints to them. 

The digital alternatives for all these activities disappointingly always resort to toolifying or gamifying the entire stack too preemptively. I can’t ‘play around’ in VScode easily and ask any power user of a pen and paper - while Notion is an excellent product, it fails to replicate the flexibility, ease and ultimately, Play - that a toy like the Pen and Paper offers.

## Play for Play's sake on Amulet

To demonstrate my message, I started with journaling where the gap between Work and Play was particularly exaggerated.

[Amulet](https://noblank.space/work/amulet) is a journal developed by [No Blank Space](https://noblank.space/) that is designed to come as close to a Toy as possible. 

Instead of a series of questions on a series of screens like "Name 3 things you are grateful for today" to "Rate your day on a scale of sad face to happy face" there are no direct questions in the main interface. 

For each journal entry, there is an abstract shape which is the user’s 'Amulet' with a range of tuneable parameters that users can play with. This visual could represent anything from the their mood to their energy to how they feel about their day - it doesn't matter! 

Coming back to the three characterising features of Games - There are (a) no rules, (b) no progression and (c) definitely no evaluation, no "completeness" or streaks.

The idea is that it is a journal you play around with. The Amulet’s shape and story comes from asking yourself various different questions:

- Why does it feel like a blue day?
- Why is the amulet so small?
- Why does it feel more floral than "stone-like"?

Playing around with the purpose of each pose and parameter is where the enjoyment comes from. 

There's no stakes - you play for the sake of play.

![Amulet prototype.](/assets/images/amuletprototype.gif)
*Amulet, a "toyified" journal. (Please excuse the crash, I am still learning how to use SwiftData in XCode previews...)*

Nonetheless, Amulet is not currently in a release state. Even when it is, I do not believe it can truly be considered a Toy given it is constrained to the app itself. When I said I’d like Amulet to be *like* a Toy or as close to one as possible, it is precisely because of this - it is only a Toy if people enjoy Play with it. 

Instead, Amulet and other toyified software are perhaps better understood as visual and interactive props for Play - such as journaling.

In the future my plans involve: 
- Different visualisations as various toys to play with: water-based metaphors, engine or mechanical metaphors, battery metaphors, and many more.
- Toy-like interactions: I am aware sliders aren’t exactly fun. I would welcome any ideas for more toy-like interactions.

I believe there are plenty of Toy softwares that don't exist yet and will only become more possible and viable in the future. To encourage this future, I started No Blank Space with the following mission: 

<p style="text-align: center">Making human things a little more human.</p>



<hr>

# Acknowledgements
I do not believe I came up with any of the definitions used in this writing, I only use them to tell a story and apply them on a "good enough" basis. 

# Useful references 
- Berne, E. (1968). _Games people play: The psychology of human relationships_ (Vol. 2768). Penguin Uk.
- Ehrmann, J., Lewis, C., & Lewis, P. (1968). Homo ludens revisited. _Yale French Studies_, (41), 31-57.
- Staab, P. A., Williams, A. J., Robertson, M. D., & Slovak, P. (2024, May). “Can you be with that feeling?”: Extending Design Strategies for Interoceptive Awareness for the Context of Mental Health. In _Proceedings of the CHI Conference on Human Factors in Computing Systems_ (pp. 1-21).
- Lakoff, G., & Johnson, M. (2008). _Metaphors we live by_. University of Chicago press.