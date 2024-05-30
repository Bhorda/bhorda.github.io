---
layout: posts
title: Posts
permalink: /posts
---

# posts

I share my writings here that cover topics such as design research, case studies, and software development - with the occasional miscellaneous. I adapt some of these into <a href="https://www.youtube.com/@Benjibo">Youtube</a> videos to promote accessibility and community. 



I use this space to send links to people, so I hope you find something interesting. If you do - and have any comments, questions, chat intentions - please do reach out at *ben (at) searle (dot) hu* ! Or sign up for an <a href="https:/benjibo.substack.com">off-schedule newsletter</a> for updates...

<!-- <div style="display: flex; flex-wrap: wrap;"> -->
{% for post in site.posts %}
  <div style="padding-bottom:10px; ">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
{% endfor %}
<!-- </div> -->



<!-- <span>{{ post.date | date: "%Y.%m.%d" }}</span>  -->