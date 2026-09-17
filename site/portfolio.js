const tabs=[...document.querySelectorAll('[role="tab"]')];
function activate(tab){tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;});}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();activate(tabs[n]);tabs[n].focus();}});});
const viewer=document.querySelector('.image-dialog');let opener;
document.querySelectorAll('.image-open').forEach(link=>link.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();opener=link;viewer.querySelector('img').src=link.href;viewer.querySelector('img').alt=link.querySelector('img').alt;viewer.querySelector('.viewer-caption').textContent=link.closest('figure').querySelector('figcaption').textContent;viewer.showModal();document.body.classList.add('viewer-active');}));
viewer.querySelector('.viewer-close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});viewer.addEventListener('close',()=>{document.body.classList.remove('viewer-active');opener?.focus();});

const toolkit=document.querySelector('.toolkit-marquee');
const motionToggle=document.querySelector('.marquee-toggle');
motionToggle?.addEventListener('click',()=>{
 const paused=toolkit.classList.toggle('is-paused');
 motionToggle.setAttribute('aria-pressed',String(paused));
 motionToggle.setAttribute('aria-label',paused?'Resume toolkit animation':'Pause toolkit animation');
 motionToggle.textContent=paused?'Resume motion':'Pause motion';
});
