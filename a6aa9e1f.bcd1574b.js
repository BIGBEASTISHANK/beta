(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(91),m=t(97),c=t(23),i=t(93),o=t(103),s=t(94),g=t(55),E=t.n(g);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:g,isBlogPostPage:u=!1}=e,{date:p,permalink:v,tags:b,readingTime:_}=n,{author:N,title:h,image:f,keywords:k}=t,w=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,M=t.author_image_url||t.authorImageURL,P=Object(s.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:P}),f&&r.a.createElement("meta",{name:"twitter:image",content:P}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${h}`})),r.a.createElement("article",{className:u?void 0:"margin-bottom--xl"},(()=>{const e=u?"h1":"h2",a=p.substring(0,10).split("-"),t=a[0],n=d[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",E.a.blogPostTitle)},u?h:r.a.createElement(i.a,{to:v},h)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:E.a.blogPostDate},n," ",m,", ",t," ",_&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(_)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},M&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:M,alt:N})),r.a.createElement("div",{className:"avatar__intro"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},N)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},a)),(b.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),b.map((({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":`Read more about ${h}`},r.a.createElement("strong",null,"Read More"))))))}},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),m=t(96),c=t(100),i=t(93);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(102);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:i}}=Object(l.default)(),{blogDescription:g,blogTitle:E,permalink:d}=a,u="/"===d?i:E;return r.a.createElement(m.a,{title:u,description:g,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(o,{metadata:a})))))}}}]);