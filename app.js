const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const CONTACTS={telegram:'',whatsapp:''}; // Add verified t.me username and wa.me number before launch
const track=(event,data={})=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,...data})};

const nav=$('.nav'),menu=$('.menu');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};$$('.nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.1});$$('.reveal,.method-list article,.lesson-cards article,.experience-list p').forEach(el=>reveal.observe(el));

const dialog=$('#contactDialog');$$('[data-open-contact]').forEach(b=>b.onclick=()=>{track('contact_open',{source:b.textContent.trim()});dialog.showModal()});$('.dialog-close').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close()};
$('#contactForm').onsubmit=e=>{e.preventDefault();const form=e.currentTarget;if(!form.checkValidity())return form.reportValidity();const data=Object.fromEntries(new FormData(form)),text=`Ciao, Заур! Меня зовут ${data.name}.\n\n${data.message}`;track('messenger_click',{channel:data.channel});let url;if(data.channel==='telegram'){url=CONTACTS.telegram?`${CONTACTS.telegram}?text=${encodeURIComponent(text)}`:`https://t.me/share/url?url=&text=${encodeURIComponent(text)}`}else{url=CONTACTS.whatsapp?`${CONTACTS.whatsapp}?text=${encodeURIComponent(text)}`:`https://wa.me/?text=${encodeURIComponent(text)}`}window.open(url,'_blank','noopener')};

const words=['Жить','Capire','Parlare','Sentire'];let word=0;setInterval(()=>{const el=$('.word-cycle');if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;el.classList.add('switching');setTimeout(()=>{word=(word+1)%words.length;el.textContent=words[word];el.classList.remove('switching')},260)},2600);

if(!matchMedia('(prefers-reduced-motion: reduce)').matches){let ticking=false;addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=scrollY;document.documentElement.style.setProperty('--scroll',y);const logo=$('.hero-logo img'),sun=$('.sun'),photo=$('.hero-image');if(logo)logo.style.transform=`rotate(${y*.025}deg)`;if(sun)sun.style.transform=`translateY(${y*.08}px)`;if(photo)photo.style.backgroundPosition=`center calc(50% + ${y*.035}px)`;ticking=false})},{passive:true});}

if(matchMedia('(pointer:fine)').matches){const cursor=$('.cursor');addEventListener('pointermove',e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`});$$('.cursor-media').forEach(el=>{el.addEventListener('pointerenter',()=>cursor.classList.add('active'));el.addEventListener('pointerleave',()=>cursor.classList.remove('active'))})}

const cookie=$('.cookie-banner');if(!localStorage.getItem('zaurino_cookie_consent'))cookie.hidden=false;const setCookie=v=>{localStorage.setItem('zaurino_cookie_consent',v);cookie.hidden=true;if(v==='accepted')track('analytics_consent')};$('[data-cookie-accept]').onclick=()=>setCookie('accepted');$('[data-cookie-reject]').onclick=()=>setCookie('necessary');$('[data-cookie-settings]').onclick=()=>cookie.hidden=false;
