export async function POST(request){
  try{
    const body=await request.json();
    const name=String(body.name||'').trim(),contact=String(body.contact||'').trim(),message=String(body.message||'').trim();
    if(name.length<2||contact.length<4||message.length<4)return Response.json({error:'Проверьте имя, номер и сообщение.'},{status:400});
    // Production integration point: forward to CRM/Telegram when ZAUR_LEAD_WEBHOOK is configured.
    if(process.env.ZAUR_LEAD_WEBHOOK){
      const response=await fetch(process.env.ZAUR_LEAD_WEBHOOK,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name,contact,message,source:'zaurino-landing',createdAt:new Date().toISOString()})});
      if(!response.ok)throw new Error('Webhook rejected lead');
    }
    return Response.json({ok:true,demo:!process.env.ZAUR_LEAD_WEBHOOK});
  }catch{return Response.json({error:'Не удалось отправить заявку. Попробуйте ещё раз.'},{status:500})}
}
