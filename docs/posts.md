---
layout: default
title: Posts
permalink: /posts
---

# Posts

I share my writings here that cover topics such as design research, case studies, and software development - with the occasional miscellaneous. I adapt some of these into [**Youtube**](https://www.youtube.com/@Benjibo) videos to promote accessibility and community. 

I use this space to send links to people, so I hope you find something interesting. If you do - and have any comments, questions, chat intentions - please do reach out at *ben (at) searle (dot) hu*! 

{% for post in site.posts %}
  <div style="padding-bottom:10px">
    <span>{{ post.date | date: "%Y.%m.%d" }}</span> <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
{% endfor %}