'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const principles=[
  ['01','VIVO','Живой язык с самого начала','Вы изучаете в первую очередь слова и выражения, которые действительно используются в повседневной речи. Меньше лишнего — больше того, что можно сразу применить.'],
  ['02','MEMORIA','Запоминание без бессмысленной зубрёжки','Новые слова связываются с образами, ассоциациями и знакомыми звуками. Так лексика легче закрепляется и быстрее вспоминается в разговоре.'],
  ['03','SUONO','Правильное произношение с первых занятий','Мы не откладываем фонетику «на потом». С самого начала формируется привычка слышать и воспроизводить итальянскую речь естественно.'],
  ['04','PARLARE','Сначала говорить — потом усложнять','Вместо долгого изучения правил в отрыве от жизни вы сразу используете язык в диалогах и реальных ситуациях. Грамматика объясняется через практику и становится понятной в контексте.'],
  ['05','ITALIA','Подготовка к реальной Италии','Кафе, магазин, поездка, знакомство, документы, разговор с коллегами — занятия строятся вокруг ситуаций, с которыми вы действительно столкнётесь.'],
  ['06','PENSARE','Язык перестаёт быть переводом в голове','Постепенно вы начинаете связывать итальянские слова сразу со смыслом, а не сначала переводить каждую фразу на русский.'],
  ['07','CAPIRE','Развивается не только речь, но и понимание','Метод тренирует способность слышать живую итальянскую речь, улавливать контекст, интонацию и значение выражений, которые невозможно понять только по учебнику.'],
  ['08','SISTEMA','Система вместо набора правил','Задача — не заставить вас запомнить сотни исключений, а показать логику языка. Когда вы понимаете, как он устроен, новые конструкции осваиваются значительно легче.']
];

export default function Experience(){
  const root=useRef(null);const [meaning,setMeaning]=useState(null);const [methodIndex,setMethodIndex]=useState(0);const [form,setForm]=useState({name:'',contact:'',message:''});const [status,setStatus]=useState('idle');
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    // Mobile browsers constantly resize the visual viewport while the URL bar
    // opens/closes. Ignore those tiny resize events so pinned story scenes keep
    // their measured positions instead of being rebuilt mid-scroll.
    ScrollTrigger.config({ignoreMobileResize:true});
    const ctx=gsap.context(()=>{
    const hero=gsap.timeline({scrollTrigger:{trigger:'.hero-wrap',start:'top top',end:'bottom bottom',scrub:1,onUpdate:self=>{const header=document.querySelector('.om-nav');if(header)header.setAttribute('data-tone',self.progress>.72?'beige':'hero')}}});
    hero.to('.ciao-letter:nth-child(1)',{x:'-65vw',rotation:-8,ease:'power2.in'},0)
      .to('.ciao-letter:nth-child(3)',{x:'18vw',y:'-90vh',rotation:10,ease:'power2.in'},0)
      .to('.ciao-letter:nth-child(4)',{x:'66vw',rotation:8,ease:'power2.in'},0)
      .to('.ciao-letter:nth-child(5)',{x:'30vw',y:'90vh',ease:'power2.in'},0)
      .to('.hero-sub,.hero-scroll,.cover-meta',{opacity:0},0)
      .to('.ciao-title',{'--cover-lines':0},0)
      .to('.ciao-i-glyph',{rotation:90,transformOrigin:'50% 50%',ease:'power2.inOut'},.22)
      .to('.ciao-i-glyph',{scaleY:8,ease:'power3.inOut'},.45)
      .to('.ciao-i',{ '--i-open-x':1,duration:.01},.69)
      .to('.ciao-i-glyph',{opacity:0,duration:.01},.69)
      .to('.ciao-i',{ '--i-open-y':1,ease:'power3.inOut'},.7)
      .to('.hero-stage',{backgroundColor:'#ef5c1a',duration:.01},.78);
    const portrait=gsap.timeline({scrollTrigger:{trigger:'.portrait-wrap',start:'top top',end:'bottom bottom',scrub:1}});
    portrait.set('.zaur-thought--one',{opacity:1,y:0},0)
      .to('.zaur-thought--one',{opacity:1,duration:.24},0)
      .to('.zaur-thought--one',{opacity:0,y:-45,duration:.12},.24)
      .fromTo('.zaur-thought--two',{opacity:0,y:55},{opacity:1,y:0,duration:.16},.34)
      .to('.zaur-thought--two',{opacity:1,duration:.16},.48)
      .to('.zaur-thought--two',{opacity:0,y:-35,duration:.1},.64)
      .to('.zaur-page-sheet',{backgroundColor:'#f4efe5',duration:.18},.58)
      .fromTo('.zaur-story-photo',{opacity:0,scale:1.06,clipPath:'inset(0% 0% 0% 100%)'},{opacity:1,scale:1,clipPath:'inset(0% 0% 0% 0%)',duration:.28},.58)
      .fromTo('.zaur-story-shade',{opacity:0},{opacity:.82,duration:.2},.64)
      .fromTo('.zaur-identity',{opacity:0,y:45},{opacity:1,y:0,duration:.18},.68)
      .to('.zaur-identity',{opacity:1,duration:.28},.86)
      .to('.zaur-story-photo img',{scale:1.04},.7);
    const mobileChapter=window.matchMedia('(max-width: 720px)').matches;
    const chapter=gsap.timeline({scrollTrigger:{trigger:'.newchapter-wrap',start:'top top',end:'bottom bottom',scrub:1}});
    chapter.fromTo('.projects-illustration',{opacity:0,clipPath:'inset(0 0 0 100%)',scale:1.08},{opacity:1,clipPath:'inset(0 0 0 0%)',scale:1,duration:.18},.02)
      .fromTo('.diplomacy-photo-main',{objectPosition:'center center',x:mobileChapter?0:0,scale:mobileChapter?1:1.12},{objectPosition:'center center',x:mobileChapter?'-80vw':0,scale:mobileChapter?1:1.04,ease:'none',duration:.25},.03)
      .to('.diplomacy-photo',{opacity:0,duration:.1},.25)
      .fromTo('.projects-portrait',{opacity:0,scale:1.06},{opacity:1,scale:1,duration:.16},.25)
      .to('.newchapter-stage',{backgroundColor:'#f4efe5',color:'#171914',duration:.01},.27)
      .to('.projects-veil',{opacity:1,duration:.12},.26)
      .fromTo('.chapter-statement--second',{opacity:0,y:45},{opacity:1,y:0,duration:.12},.31)
      .to('.chapter-statement--second',{opacity:0,y:-40,duration:.1},.49)
      .fromTo('.chapter-statement--third',{opacity:0,y:45},{opacity:1,y:0,duration:.12},.57)
      .to('.chapter-statement--third',{opacity:0,y:-35,duration:.1},.74)
      .to('.projects-illustration,.projects-portrait,.projects-veil',{opacity:0,duration:.12},.75)
      .to('.newchapter-stage',{backgroundColor:'#26382d',color:'#f4efe5',duration:.12},.76)
      .fromTo('.chapter-statement--fourth',{opacity:0,y:35},{opacity:1,y:0,duration:.16},.82);
    const understand=gsap.timeline({scrollTrigger:{trigger:'.understand-wrap',start:'top top',end:'bottom bottom',scrub:1}});
    understand.fromTo('.method-question',{opacity:0,y:50},{opacity:1,y:0,duration:.35},0)
      .fromTo('.meaning-demo',{opacity:0,y:60},{opacity:1,y:0,duration:.35},.42);
    gsap.to('.method-scroll-marquee',{xPercent:-28,ease:'none',scrollTrigger:{trigger:'.method-scroll',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.utils.toArray('.method-principle').forEach(item=>{
      const number=item.querySelector('.method-principle-number');const copy=item.querySelector('.method-principle-copy');
      gsap.fromTo(number,{scale:.45,opacity:.08},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:item,start:'top 85%',end:'center 55%',scrub:.8}});
      gsap.fromTo(copy,{opacity:0,y:55},{opacity:1,y:0,ease:'power2.out',scrollTrigger:{trigger:item,start:'top 78%',end:'center 58%',scrub:.7}});
    });
    const methodTrack=document.querySelector('.method-principles');
    if(methodTrack){
      const cards=methodTrack.querySelectorAll('.method-principle');
      gsap.to(methodTrack,{x:()=>-(methodTrack.scrollWidth-window.innerWidth+window.innerWidth*.08),ease:'none',scrollTrigger:{trigger:methodTrack,start:'top top',end:()=>`+=${Math.max(900,methodTrack.scrollWidth-window.innerWidth+window.innerWidth*.08)}`,pin:true,anticipatePin:1,scrub:1,invalidateOnRefresh:true,onUpdate:self=>setMethodIndex(Math.min(cards.length-1,Math.floor(self.progress*cards.length)))}});
    }
    gsap.from('.final-inner > *',{opacity:0,y:55,stagger:.12,scrollTrigger:{trigger:'.final-scene',start:'top 70%',end:'center center',scrub:1}});
    const nav=document.querySelector('.om-nav');
    const navTones={'.hero-wrap':'hero','.portrait-wrap':'green','.newchapter-wrap':'beige','.understand-wrap':'green','.method-scroll':'orange','.final-scene':'beige'};
    Object.entries(navTones).forEach(([selector,tone])=>gsap.utils.toArray(selector).forEach(section=>ScrollTrigger.create({trigger:section,start:'top 28%',end:'bottom 28%',onEnter:()=>nav?.setAttribute('data-tone',tone),onEnterBack:()=>nav?.setAttribute('data-tone',tone)})));
    // Re-measure after fonts and priority images have settled. This is
    // especially important on narrow screens where image aspect ratios alter
    // the height of each sticky chapter.
    const refresh=()=>ScrollTrigger.refresh();
    window.addEventListener('load',refresh,{once:true});
    requestAnimationFrame(refresh);
  },root);
  return()=>{ctx.revert();ScrollTrigger.getAll().forEach(trigger=>trigger.kill())}
  },[]);
  async function submit(e){e.preventDefault();setStatus('loading');try{const res=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(form)});const data=await res.json();if(!res.ok)throw new Error();setStatus(data.demo?'demo':'success')}catch{setStatus('demo')}}
  return <main ref={root} className="oldmoney-root">
    <header className="om-nav" data-tone="hero"><div><span className="om-logo" role="img" aria-label="Zaurino Accademia"/><span>ZAURINO<br/>ACCADEMIA</span></div><button onClick={()=>document.querySelector('.final-scene').scrollIntoView({behavior:'smooth'})}>ЗАПИСАТЬСЯ НА УРОК</button></header>

    <section className="hero-wrap chapter-wrap" data-nav-tone="orange"><div className="om-stage hero-stage"><div className="ciao-title" aria-label="Ciao"><span className="ciao-letter">C</span><span className="ciao-letter ciao-i" aria-hidden="true"><i className="ciao-i-glyph">I</i></span><span className="ciao-letter">A</span><span className="ciao-letter">O</span><span className="ciao-letter">.</span></div><p className="hero-sub"><span>Кажется, это слово<br/>вы уже знаете.</span></p><span className="hero-scroll">SCORRI <b>↓</b></span></div></section>

    <section className="portrait-wrap zaur-story-wrap"><div className="om-stage portrait-stage zaur-story-stage"><div className="zaur-page-sheet"><div className="zaur-story-photo"><Image src="/Zaurino_landing/image/zaur-official.webp" alt="Заур Фархадов — основатель Zaurino Accademia" fill priority sizes="(max-width: 720px) 92vw, 52vw"/></div><div className="zaur-story-shade"/><div className="zaur-thought zaur-thought--one"><h2>А что вы скажете <em>дальше?</em></h2></div><div className="zaur-thought zaur-thought--two"><h2>Вот здесь и начинается <em>язык.</em></h2></div><div className="zaur-identity"><h2 className="zaur-name">ZAUR<br/>FARHADOV</h2><p className="zaur-role">Основатель Zaurino Accademia</p><div className="zaur-credentials"><span>Более 20 лет в Италии.</span><span>Международные отношения.</span><span>Дипломатическая карьера.</span><span>Знание нескольких языков.</span></div><p className="zaur-author-copy">Итальянский много лет был для меня рабочим инструментом — в переговорах, международной среде и реальном общении.</p></div></div></div></section>

    <section className="newchapter-wrap story-wrap"><div className="om-stage newchapter-stage"><div className="projects-illustration diplomacy-photo"><Image className="diplomacy-photo-main" src="/Zaurino_landing/image/zaur-diplomacy.webp" alt="Заур на дипломатической встрече с Папой Франциском" fill sizes="100vw" priority/></div><div className="projects-portrait"><Image src="/Zaurino_landing/image/zaur_website_2x.png" alt="Заур — основатель Zaurino Accademia" fill sizes="100vw"/></div><div className="projects-veil"/><div className="chapter-statement chapter-statement--second"><h2>Сегодня мой фокус — <em>собственные проекты.</em></h2><p>Один из них вырос из того, что сопровождало меня больше двадцати лет: Италии, итальянского языка и международного опыта.</p></div><div className="chapter-statement chapter-statement--third"><small>ZAURINO ACCADEMIA</small><h2>Так появился проект, в котором весь этот опыт получил <em>новую форму.</em></h2></div><div className="chapter-statement chapter-statement--fourth"><small>ZAURINO ACCADEMIA</small><h2>Добро пожаловать в<br/><em>Zaurino Accademia</em></h2></div></div></section>

    <section className="understand-wrap chapter-wrap"><div className="om-stage understand-stage"><div className="method-question"><small>ОДНО СЛОВО · НЕСКОЛЬКО СМЫСЛОВ</small><h2>Итальянский —<br/>это больше, чем <em>перевод слов.</em></h2><p>Смысл рождается из контекста, интонации и ситуации.</p></div><div className="meaning-demo"><small>КАК БЫ ВЫ ПЕРЕВЕЛИ?</small><h2>MAGARI</h2><p>Выберите наиболее точный вариант</p><div className="meaning-options">{['Возможно','Хотелось бы','Если бы!','Всё зависит от ситуации'].map((x,i)=><button className={meaning===i?'active':''} onClick={()=>setMeaning(i)} key={x}><span>0{i+1}</span>{x}</button>)}</div>{meaning!==null?<div className="meaning-answer"><b>{meaning===3?'ТОЧНО.':'ПОЧТИ.'}</b><p>Верный ответ — «всё зависит от ситуации». Контекст и интонация меняют смысл.</p></div>:null}</div></div></section>

    <section className="method-scroll"><div className="method-scroll-head"><small>МЕТОД ЗАУРINO</small><h2>Почему этот подход<br/><em>работает.</em></h2><p>Не набор правил, а понятный маршрут: от первого живого слова — к речи, которую вы действительно используете.</p></div><div className="method-scroll-marquee">ГОВОРИТЬ · СЛЫШАТЬ · ПОНИМАТЬ · ЖИТЬ · ГОВОРИТЬ · СЛЫШАТЬ · ПОНИМАТЬ · ЖИТЬ ·</div><div className="method-index" aria-label="Принципы метода">{principles.map((p,index)=><button type="button" className={index===methodIndex?"active":""} data-principle={index} onClick={()=>document.querySelectorAll(".method-principle")[index]?.scrollIntoView({behavior:"smooth",block:"center"})}>{p[0]}</button>)}</div><div className="method-principles">{principles.map((p,index)=><article className="method-principle" key={p[0]}><div className="method-principle-number">{p[0]}</div><div className="method-principle-copy"><small>{['С ПЕРВОГО ДНЯ','ПАМЯТЬ','ЗВУК','ДИАЛОГ','РЕАЛЬНАЯ ИТАЛИЯ','МЫСЛЬ','КОНТЕКСТ','ЛОГИКА'][index]}</small><h3>{p[2]}</h3><p>{p[3]}</p></div></article>)}</div><div className="method-scroll-conclusion"><small>ГЛАВНАЯ ЦЕЛЬ</small><p>Цель метода — не «пройти итальянский».</p><h2>Цель — научиться<br/><em>пользоваться им.</em></h2><button onClick={()=>document.querySelector('.final-scene').scrollIntoView({behavior:'smooth'})}>ПОГОВОРИТЬ С ЗАУРОМ <i>↘</i></button></div></section>

    <section className="final-scene"><div className="final-inner"><small>IL PRIMO PASSO</small><h2>Начнём<br/>с простого <em>ciao.</em></h2><p className="final-motivation">Ciao вы уже знаете. Пора узнать, что говорить дальше.</p><p>Оставьте сообщение и номер для обратной связи. Заур лично ответит и поможет договориться об индивидуальном уроке.</p><div className="final-price"><b>50 €</b><span>индивидуальный урок · 60 минут</span></div>{status==='success'||status==='demo'?<div className="om-success"><b>GRAZIE.</b><span>{status==='demo'?'Сообщение сохранено в demo-режиме. Для отправки Зауру подключите WhatsApp API.':'Заур получил ваше сообщение.'}</span></div>:<form onSubmit={submit}><label>Имя<input required minLength={2} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Номер для обратной связи<input required type="tel" minLength={6} placeholder="+39 …" value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></label><label>Ваше сообщение<textarea required minLength={4} rows={3} placeholder="Когда бы вы хотели провести первый урок?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button disabled={status==='loading'}>{status==='loading'?'ОТПРАВЛЯЕМ…':'ОТПРАВИТЬ ЗАУРУ'} <i>↗</i></button>{status==='error'?<span className="form-error">Не удалось отправить. Попробуйте ещё раз.</span>:null}</form>}</div><div className="final-orange"/></section>
    <footer><div className="footer-brand"><span className="footer-logo" role="img" aria-label="Zaurino Accademia"/><span>ZAURINO<br/>ACCADEMIA</span></div><a href="/privacy">PRIVACY</a><span>ITALIANO COME STILE DI VITA</span></footer>
  </main>
}
