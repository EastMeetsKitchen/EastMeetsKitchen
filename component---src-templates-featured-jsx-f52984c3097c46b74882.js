(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1wty":function(t,e,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),s=a.n(r),o=a("Wbzz"),c=a("9eSz"),i=a.n(c),l=(a("ELO7"),function(t){function e(){return t.apply(this,arguments)||this}Object(n.a)(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.path||e.node.fields.slug,tags:e.tags||e.node.frontmatter.tags,cover:e.cover||e.node.frontmatter.image.feature.childImageSharp.fluid,title:e.title||e.node.frontmatter.title,date:e.date||e.node.fields.date,src:e.src})})),t},a.render=function(){var t=this.getPostList();return s.a.createElement("div",{className:"postContainer"},t.map((function(t){return s.a.createElement(o.Link,{to:t.path,key:t.title},s.a.createElement("div",{className:"postBox"},t.src?s.a.createElement("div",{className:"postImage",style:{background:"url("+t.src+") center center"}}):s.a.createElement(i.a,{fluid:t.cover,className:"postImage"}),s.a.createElement("h2",null,t.title)))})))},e}(s.a.Component));e.a=l},ELO7:function(t,e,a){},RQfs:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return d}));var n=a("9Hrx"),r=a("q1tI"),s=a.n(r),o=a("TJpk"),c=a.n(o),i=a("hpys"),l=a("1wty"),u=a("IpnI"),p=a.n(u),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return s.a.createElement(i.a,null,s.a.createElement("div",{className:"tag-container"},s.a.createElement(c.a,{title:"Featured Posts | "+p.a.siteTitle}),s.a.createElement(l.a,{postEdges:t})))},e}(s.a.Component)}}]);
//# sourceMappingURL=component---src-templates-featured-jsx-f52984c3097c46b74882.js.map