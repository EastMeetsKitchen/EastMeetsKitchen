(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1wty":function(t,e,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("Wbzz"),s=r("9eSz"),c=r.n(s);r("ELO7");var p=function(t){var e,r;function a(){return t.apply(this,arguments)||this}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var s=a.prototype;return s.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.path||e.node.fields.slug,tags:e.tags||e.node.frontmatter.tags,cover:e.cover||e.node.frontmatter.image.feature.childImageSharp.fluid,title:e.title||e.node.frontmatter.title,date:e.date||e.node.fields.date,src:e.src})})),t},s.render=function(){var t=this.getPostList();return n.a.createElement("div",{className:"postContainer"},t.map((function(t){return n.a.createElement(o.Link,{to:t.path,key:t.title},n.a.createElement("div",{className:"postBox"},t.src?n.a.createElement("div",{className:"postImage",style:{background:"url("+t.src+") center center"}}):n.a.createElement(c.a,{fluid:t.cover,className:"postImage"}),n.a.createElement("h2",null,t.title)))})))},a}(n.a.Component);e.a=p},RQfs:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l})),r.d(e,"pageQuery",(function(){return d}));var a=r("q1tI"),n=r.n(a),o=r("TJpk"),s=r.n(o),c=r("hpys"),p=r("1wty"),i=r("IpnI"),u=r.n(i);var l=function(t){var e,r;function a(){return t.apply(this,arguments)||this}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return n.a.createElement(c.a,null,n.a.createElement("div",{className:"tag-container"},n.a.createElement(s.a,{title:"Featured Posts | "+u.a.siteTitle}),n.a.createElement(p.a,{postEdges:t})))},a}(n.a.Component),d="1291126810"}}]);
//# sourceMappingURL=component---src-templates-featured-jsx-7b4effc3d75f24ddea60.js.map