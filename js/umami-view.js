const website_id=CONFIG.web_analytics.umami.website_id,request_url=`${CONFIG.web_analytics.umami.api_server}/websites/${website_id}/stats`,start_time=new Date(CONFIG.web_analytics.umami.start_time).getTime(),end_time=(new Date).getTime(),token=CONFIG.web_analytics.umami.token;if(!website_id)throw new Error("Umami website_id is empty");if(!request_url)throw new Error("Umami request_url is empty");if(!start_time)throw new Error("Umami start_time is empty");if(!token)throw new Error("Umami token is empty");const params=new URLSearchParams({startAt:start_time,endAt:end_time}),request_header={method:"GET",headers:{"Content-Type":"application/json","x-umami-api-key":"oZKCH3msvqt10VlXKwoJvHclmaS4bVx0"}};async function siteStats(){try{const e=await fetch(`${request_url}?${params}`,request_header),t=await e.json(),i=t.uniques.value,a=t.pageviews.value;let r=document.querySelector("#umami-site-pv-container");if(r){let e=document.querySelector("#umami-site-pv");e&&(e.textContent=a,r.style.display="inline")}let n=document.querySelector("#umami-site-uv-container");if(n){let e=document.querySelector("#umami-site-uv");e&&(e.textContent=i,n.style.display="inline")}}catch(e){return console.error(e),"-1"}}async function pageStats(e){try{const t=await fetch(`${request_url}?${params}&url=${e}`,request_header),i=(await t.json()).pageviews.value;let a=document.querySelector("#umami-page-views-container");if(a){let e=document.querySelector("#umami-page-views");e&&(e.textContent=i,a.style.display="inline")}}catch(e){return console.error(e),"-1"}}siteStats();let viewCtn=document.querySelector("#umami-page-views-container");if(viewCtn){let e=window.location.pathname;pageStats(decodeURI(e.replace(/\/*(index.html)?$/,"/")))}