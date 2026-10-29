const projects=[...(window.TAMIRLAB_WORKSHOP_PROJECTS||[]),...(window.TAMIRLAB_HOME_REPAIRS||[])];
const featuredIds=['e01','r01','p01','s01','e13','r13','p14','s14'];
projects.sort((a,b)=>{const ai=featuredIds.indexOf(a.id),bi=featuredIds.indexOf(b.id);return (ai<0?999:ai)-(bi<0?999:bi)});
const state={filter:'Tümü',search:'',expanded:false,favorites:new Set(JSON.parse(localStorage.getItem('tamirlab-favorites')||'[]'))};
const grid=document.getElementById('projectGrid');const empty=document.getElementById('emptyState');const toast=document.getElementById('toast');
function cardMarkup(p){return `<article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title} rehberini aç"><div class="project-visual ${p.visual}"><span class="visual-orb"></span><span class="project-level">${p.level}</span><button class="project-fav ${state.favorites.has(p.id)?'is-fav':''}" data-fav="${p.id}" aria-label="${state.favorites.has(p.id)?'Favorilerden çıkar':'Favoriye ekle'}">${state.favorites.has(p.id)?'♥':'♡'}</button><span class="project-emoji">${p.emoji}</span></div><div class="project-body"><div class="project-tags"><span class="project-tag ${p.tagType==='robotics'?'tag-robotics':p.tagType==='coding'?'tag-coding':p.tagType==='home'?'tag-home':''}">${p.tag}</span></div><h3 class="project-title">${p.title}</h3><p class="project-desc">${p.description}</p><div class="project-meta"><span>◷ ${p.time}</span><strong>${p.difficulty}</strong><span class="meta-arrow">↗</span></div></div></article>`}
function matches(p){const f=state.filter;const levelMatch=['İlkokul','Ortaokul','Lise'].includes(f)?p.level===f:true;const categoryMatch=['Elektronik','Robotik','Programlama','Evde Tamir'].includes(f)?p.category===f: f==='STEM'?p.category==='STEM':true;const searchMatch=(p.title+' '+p.category+' '+p.level+' '+p.description+' '+p.tag+' '+p.materials.join(' ')).toLocaleLowerCase('tr').includes(state.search.toLocaleLowerCase('tr'));return levelMatch&&categoryMatch&&searchMatch}
function render(){let list=projects.filter(matches);if(!state.expanded&&state.filter==='Tümü')list=list.slice(0,8);grid.innerHTML=list.map(cardMarkup).join('');empty.hidden=list.length>0;grid.hidden=list.length===0;}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}
function projectDiagram(p){
 const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const wrap=v=>{const words=String(v).split(/\s+/),lines=[];let line='';for(const word of words){if((line+' '+word).trim().length>18&&line){lines.push(line);line=word}else line=(line+' '+word).trim()}if(line)lines.push(line);return lines.slice(0,2)};
 if(p.id==='e01')return `<section class="modal-section diagram-section"><h3>Bağlantı şeması</h3><p class="diagram-caption">Enerji kapalıyken kur: pil yuvası (+) → anahtar → uygun direnç → LED (A/+ ile K/−) → pil yuvası (−).</p><div class="diagram-frame"><svg viewBox="0 0 760 250" role="img" aria-labelledby="nameCardDiagramTitle nameCardDiagramDesc"><title id="nameCardDiagramTitle">Işıklı isim kartı seri devre şeması</title><desc id="nameCardDiagramDesc">Kapalı AA pil yuvasının artı ucundan anahtara, uygun dirence ve LED anotuna giden; LED katodundan pil yuvasının eksi ucuna dönen tek devre yolu.</desc><rect x="1" y="1" width="758" height="248" rx="18" fill="#fbfaff" stroke="#e9e4f1"/><text x="32" y="36" class="diagram-label">KAPALI AA PİL YUVASI</text><rect x="34" y="64" width="142" height="118" rx="14" fill="#fff" stroke="#7547ff" stroke-width="3"/><rect x="58" y="93" width="38" height="55" rx="8" fill="#fff0a8" stroke="#d1a900" stroke-width="2"/><rect x="111" y="93" width="38" height="55" rx="8" fill="#d9f8f4" stroke="#16a99c" stroke-width="2"/><text x="70" y="126" class="diagram-cell">AA</text><text x="123" y="126" class="diagram-cell">AA</text><text x="157" y="82" class="diagram-mark">+</text><text x="157" y="171" class="diagram-mark">−</text><path d="M176 82 H245" class="wire-positive"/><circle cx="250" cy="82" r="5" fill="#7547ff"/><circle cx="297" cy="82" r="5" fill="#7547ff"/><path d="M250 82 L286 61" class="wire-positive"/><path d="M302 82 H345" class="wire-positive"/><text x="243" y="120" class="diagram-label">ANAHTAR</text><rect x="345" y="64" width="130" height="36" rx="7" fill="#fff0e9" stroke="#ff665e" stroke-width="2"/><text x="362" y="88" class="diagram-component">UYGUN DİRENÇ</text><path d="M475 82 H525" class="wire-positive"/><circle cx="568" cy="82" r="34" fill="#fff9d9" stroke="#f3bd00" stroke-width="3"/><path d="M553 82 H583 M568 67 V97" stroke="#f3bd00" stroke-width="3" stroke-linecap="round"/><path d="M568 116 V161 M568 161 H176 V181" class="wire-return"/><path d="M176 181 H157" class="wire-return"/><text x="530" y="137" class="diagram-label">LED</text><text x="532" y="49" class="diagram-mark">A (+)</text><text x="583" y="103" class="diagram-mark">K (−)</text><text x="34" y="220" class="diagram-note">İki bakır bant yolu birbirine değmesin. Anahtar kapanınca devre tamamlanır.</text><path d="M199 76 l10 6 -10 6" fill="#7547ff"/><path d="M516 76 l10 6 -10 6" fill="#7547ff"/></svg></div><p class="diagram-caption">Şema yön gösterir; direnç değeri ve pil adedi kullandığınız hazır LED kitinin talimatına göre seçilir.</p></section>`;
 const t=p.title.toLocaleLowerCase('tr');let heading='Proje şeması',nodes=[],caption='';
 if(p.category==='Elektronik'){
  heading='Devre akış şeması';
  let input='Giriş / bileşen',output='LED / ölçüm';
  if(t.includes('güneş')||t.includes('solar'))input='Güneş hücresi';
  else if(t.includes('sıcaklık')||t.includes('nem'))input='Sıcaklık / nem';
  else if(t.includes('ses')||t.includes('akustik'))input='Ses sensörü';
  else if(t.includes('su seviyesi')||t.includes('su'))input='Su sensörü';
  else if(t.includes('ışığa')||t.includes('ışığa duyarlı')||t.includes('lamba'))input='Işık sensörü';
  else if(t.includes('buton')||t.includes('morse')||t.includes('tepki'))input='Buton / anahtar';
  else if(t.includes('rgb')||t.includes('renk'))input='Renk girişi';
  else if(t.includes('zar'))input='Buton / rastgele sayı';
  else if(t.includes('bileşen'))input='Parça / şema';
  if(t.includes('güneş'))output='Ölçüm tablosu';
  else if(t.includes('morse'))output='LED kod dizisi';
  else if(t.includes('alarm'))output='Işıklı uyarı';
  nodes=['Düşük gerilimli güç',input,'Devre / kontrol',output];
  caption='Bu şema işlev akışını gösterir. Birebir pin bağlantısı için eğitim kartının doğrulanmış şemasını izleyin; bağlantıyı değiştirmeden önce gücü ayırın.';
 }else if(p.category==='Robotik'){
  heading='Parça ve hareket şeması';
  let input='Sensör / elle giriş',middle='Gövde / mekanizma',output='Hareket / görev';
  if(t.includes('şırınga')||t.includes('hidrolik')){input='İğnesiz şırınga';middle='Su dolu hortum';output='Kepçe kolu hareketi'}
  else if(t.includes('balon')){input='Balondaki hava';middle='Hafif araç gövdesi';output='İleri hareket'}
  else if(t.includes('çizgi')){input='Çizgi sensörleri';middle='Kontrol kartı';output='Motor yönü'}
  else if(t.includes('engel')||t.includes('mesafe')){input='Mesafe sensörü';middle='Karar / kontrol';output='Güvenli yön değişimi'}
  else if(t.includes('kol')||t.includes('kıskaç')||t.includes('el')){input='El / servo komutu';middle='Eklem ve bağlantı';output='Hafif nesne kavrama'}
  else if(t.includes('dişli')||t.includes('kam')||t.includes('makara')){input='El ile döndürme';middle='Dişli / makara';output='Aktarılan hareket'}
  else if(t.includes('güneş')){input='Mini güneş hücresi';middle='Eğitim motoru';output='Düşük hızlı araç'}
  nodes=[input,middle,'Denge / bağlantı kontrolü',output];
  caption='Şema ana parçaların görev ilişkisini gösterir; ölçüleri ve kart bağlantılarını kullandığınız kitin kılavuzuna göre belirleyin. Hareket testini düşük hızda, boş bir zeminde yapın.';
 }else if(p.category==='Programlama'){
  heading='Algoritma akış şeması';
  let input='Tuş / olay',logic='Kural / algoritma',decision='Koşul / tekrar',output='Ekran / sonuç';
  if(t.includes('labirent')||t.includes('rota'))input='Başlangıç / hedef';
  if(t.includes('anket')||t.includes('veri')){input='Örnek veri';logic='Sınıflandır';decision='Hesapla';output='Tablo / grafik'}
  else if(t.includes('hesap makinesi')){input='İki sayı ve işlem';logic='İşlemi seç';decision='Sonucu hesapla';output='Ekrana yaz'}
  else if(t.includes('parola')){input='Örnek parola';logic='Kural kontrolü';decision='Güç göstergesi';output='Güvenli öneri'}
  else if(t.includes('kamera')){input='Kamera olayı';logic='Yerel ağ akışı';decision='İzin / süre kontrolü';output='Yerel görüntü'}
  else if(t.includes('hata')||t.includes('debug')){input='Test girdisi';logic='Adımları izle';decision='Hata noktası';output='Düzeltilmiş kod'}
  nodes=[input,logic,decision,output];
  caption='Önce akışı kâğıt üzerinde kurun; sonra küçük parçalar hâlinde kodlayıp farklı örneklerle deneyin. Kişisel veri toplamayan test girdileri kullanın.';
 }else if(p.category==='STEM'){
  heading='Deney ve ölçüm şeması';
  let setup='Proje düzeneği',measure='Gözlem / ölçüm',record='Çizelge / grafik';
  if(t.includes('köprü')||t.includes('kule')){setup='Farklı yapı biçimleri';measure='Hafif yük testi';record='Denge / taşıma tablosu'}
  else if(t.includes('su filtresi')||t.includes('yağmur suyu')){setup='Katmanlı filtre modeli';measure='Görünüm karşılaştırması';record='Sonuç (içilmez)'}
  else if(t.includes('tohum')||t.includes('çimlenme')){setup='Etiketli tohum kapları';measure='Büyüme ölçümü';record='Günlük çizelgesi'}
  else if(t.includes('gölge')||t.includes('güneş')){setup='Sabit gözlem noktası';measure='Gölge / ışık ölçümü';record='Zaman grafiği'}
  else if(t.includes('ses')||t.includes('gürültü')){setup='Anonim ses noktası';measure='Ses düzeyi';record='Alan karşılaştırması'}
  else if(t.includes('şırınga')){setup='İğnesiz şırınga modeli';measure='Hareket / kuvvet';record='Deneme tablosu'}
  nodes=['Soru / tahmin',setup,measure,record];
  caption='Bir seferde tek değişkeni değiştirin, diğer koşulları sabit tutun ve ölçümü en az üç kez kaydedin. Güvenlik notundaki sınırları uygulayın.';
 }else{
  heading='Güvenli tamir akışı';
  nodes=['Önce görsel kontrol','Basit bakım adımı','Hafifçe dene','Hasar varsa dur'];
  caption='Çatlak, yanık, sızıntı, keskin parça veya uzmanlık gerektiren durum görürseniz işlemi bırakıp yetişkine/uzmana başvurun.';
 }
 const colors=['#7547ff','#ff665e','#17a99e','#efbd00'];
 const boxes=nodes.map((label,i)=>{const x=22+i*198,lines=wrap(label);return `<g><rect x="${x}" y="74" width="158" height="98" rx="15" fill="#fff" stroke="${colors[i]}" stroke-width="2.5"/><circle cx="${x+20}" cy="94" r="11" fill="${colors[i]}"/><text x="${x+20}" y="98" text-anchor="middle" class="diagram-number">${i+1}</text><text x="${x+79}" y="116" text-anchor="middle" class="diagram-node-label">${esc(lines[0]||'')}</text>${lines[1]?`<text x="${x+79}" y="137" text-anchor="middle" class="diagram-node-label">${esc(lines[1])}</text>`:''}</g>${i<3?`<path d="M${x+164} 123 H${x+190} l-7 -6 m7 6 -7 6" class="diagram-arrow"/>`:''}`}).join('');
 return `<section class="modal-section diagram-section"><h3>${esc(heading)}</h3><p class="diagram-caption"><b>${esc(p.title)}</b></p><div class="diagram-frame"><svg viewBox="0 0 800 220" role="img" aria-label="${esc(p.title)} için ${esc(heading.toLocaleLowerCase('tr'))}"><rect x="1" y="1" width="798" height="218" rx="18" fill="#fbfaff" stroke="#e9e4f1"/>${boxes}<text x="24" y="201" class="diagram-note">${esc(caption.slice(0,118))}</text></svg></div><p class="diagram-caption">${esc(caption)}</p></section>`;
}
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 const modal=document.getElementById('modalBackdrop');
 document.getElementById('modalContent').innerHTML=`<div class="modal-hero"><div class="modal-icon ${p.visual}">${p.emoji}</div><div><span class="modal-label">${p.level.toLocaleUpperCase('tr')} · ${p.category.toLocaleUpperCase('tr')}</span><h2 class="modal-title" id="modalTitle">${p.title}</h2><p class="modal-lead">${p.description}</p></div></div>${projectDiagram(p)}<div class="modal-stats"><span class="modal-stat">◷ ${p.time}</span><span class="modal-stat">${p.difficulty} seviye</span><span class="modal-stat">Maliyet: ${p.cost}</span></div><div class="modal-section"><h3>Gerekli malzemeler</h3><ul>${p.materials.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="modal-section"><h3>Adım adım</h3><ol>${p.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="modal-warning"><b>Güvenlik notu:</b> ${p.safety}</div><div class="modal-section"><h3>Bu projede ne öğreneceksin?</h3><p>${p.learning}</p></div><button class="button button-dark modal-action" id="startGuide">Projeye başla <span>→</span></button>`;
 modal.hidden=false;document.body.style.overflow='hidden';
 document.getElementById('startGuide').addEventListener('click',()=>renderGuideSetup(p));
}
function renderGuideSetup(p){
 const host=document.getElementById('modalContent');
 host.innerHTML=`<div class="guide-topline"><span class="section-kicker">PROJEYE HAZIRLAN</span><span class="guide-count">0 / ${p.steps.length} adım</span></div><h2 class="guide-title">${p.title}</h2><p class="guide-intro">Önce malzemelerini gözden geçir. Hazır oldukça kutuları işaretle; ardından ilk adıma geç.</p><div class="guide-progress"><span style="width:0%"></span></div><div class="guide-materials"><h3>Malzeme kontrolü</h3>${p.materials.map((m,i)=>`<label class="guide-check"><input type="checkbox" id="guideMaterial${i}"><span>${m}</span></label>`).join('')}</div><div class="modal-warning"><b>Güvenlik notu:</b> ${p.safety}</div><div class="guide-actions"><button class="button button-outline" id="guideOverview">Proje özetine dön</button><button class="button button-dark" id="guideBegin">İlk adıma geç <span>→</span></button></div>`;
 document.getElementById('guideOverview').addEventListener('click',()=>openProject(p.id));
 document.getElementById('guideBegin').addEventListener('click',()=>renderGuideStep(p,0));
}
function renderGuideStep(p,index){
 const host=document.getElementById('modalContent'),total=p.steps.length,percent=Math.round(((index+1)/total)*100);
 host.innerHTML=`<div class="guide-topline"><span class="section-kicker">${p.category.toLocaleUpperCase('tr')}</span><span class="guide-count">${index+1} / ${total} adım</span></div><h2 class="guide-title">${p.title}</h2><div class="guide-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${index+1}"><span style="width:${percent}%"></span></div><section class="guide-step-card"><span class="guide-step-label">ADIM ${index+1}</span><p>${p.steps[index]}</p></section><div class="modal-warning"><b>Güvenlik notu:</b> ${p.safety}</div><div class="guide-actions"><button class="button button-outline" id="guidePrevious">${index===0?'Malzemelere dön':'← Önceki adım'}</button>${index<total-1?'<button class="button button-dark" id="guideNext">Sonraki adım →</button>':'<button class="button button-coral" id="guideFinish">Projeyi tamamladım ✓</button>'}</div>`;
 document.getElementById('guidePrevious').addEventListener('click',()=>index===0?renderGuideSetup(p):renderGuideStep(p,index-1));
 const next=document.getElementById('guideNext');if(next)next.addEventListener('click',()=>renderGuideStep(p,index+1));
 const finish=document.getElementById('guideFinish');if(finish)finish.addEventListener('click',()=>renderGuideComplete(p));
 host.scrollTop=0;
}
function projectPrototype(p){
 const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let art='';
 if(p.id==='e01'){
  art=`<rect x="152" y="36" width="296" height="220" rx="22" fill="#fffdf3" stroke="#ff665e" stroke-width="4"/><path d="M177 88 H423 M177 205 H423" stroke="#19aaa0" stroke-width="5" stroke-dasharray="7 5"/><circle cx="198" cy="88" r="12" fill="#ff665e"/><circle cx="580" cy="88" r="12" fill="#efbd00"/><circle cx="198" cy="205" r="12" fill="#7547ff"/><circle cx="580" cy="205" r="12" fill="#23b879"/><circle cx="198" cy="88" r="23" fill="#ff665e" opacity=".14"/><circle cx="580" cy="88" r="23" fill="#efbd00" opacity=".17"/><text x="300" y="153" text-anchor="middle" class="proto-name">TAMIRLAB</text><text x="300" y="181" text-anchor="middle" class="proto-sub">IŞIKLI İSİM KARTI</text><path d="M120 78 h25 M120 218 h25 M455 78 h25 M455 218 h25" stroke="#7547ff" stroke-width="4" stroke-linecap="round"/>`;
 }else if(p.category==='Elektronik'){
  art=`<rect x="145" y="58" width="510" height="178" rx="22" fill="#dff8f4" stroke="#16a99c" stroke-width="3"/><path d="M181 90 H620 M181 204 H620 M205 90 V204 M600 90 V204" stroke="#16a99c" stroke-width="3" stroke-dasharray="8 7"/><rect x="277" y="103" width="205" height="92" rx="15" fill="#fff" stroke="#7547ff" stroke-width="4"/><text x="379" y="139" text-anchor="middle" class="proto-sub">EĞİTİM KARTI</text><text x="379" y="164" text-anchor="middle" class="proto-caption">SENSÖR • DEVRE • ÇIKTI</text><circle cx="227" cy="148" r="15" fill="#ff665e"/><circle cx="544" cy="118" r="14" fill="#efbd00"/><circle cx="544" cy="178" r="14" fill="#23b879"/><circle cx="227" cy="148" r="28" fill="#ff665e" opacity=".14"/><path d="M125 115 h20 M125 177 h20 M655 115 h20 M655 177 h20" stroke="#7547ff" stroke-width="5" stroke-linecap="round"/>`;
 }else if(p.category==='Robotik'){
  art=`<ellipse cx="400" cy="222" rx="220" ry="22" fill="#251d3c" opacity=".08"/><rect x="260" y="119" width="280" height="88" rx="28" fill="#7547ff"/><rect x="306" y="70" width="188" height="92" rx="32" fill="#ffcc58" stroke="#30283e" stroke-width="5"/><circle cx="362" cy="113" r="12" fill="#30283e"/><circle cx="438" cy="113" r="12" fill="#30283e"/><path d="M369 137 Q400 154 431 137" fill="none" stroke="#30283e" stroke-width="5" stroke-linecap="round"/><circle cx="280" cy="211" r="39" fill="#30283e"/><circle cx="520" cy="211" r="39" fill="#30283e"/><circle cx="280" cy="211" r="16" fill="#18b8ad"/><circle cx="520" cy="211" r="16" fill="#18b8ad"/><path d="M400 70 V42" stroke="#30283e" stroke-width="6" stroke-linecap="round"/><circle cx="400" cy="35" r="10" fill="#ff665e"/><rect x="367" y="157" width="66" height="30" rx="8" fill="#dff8f4"/><text x="400" y="177" text-anchor="middle" class="proto-caption">ROBOT</text>`;
 }else if(p.category==='Programlama'){
  art=`<rect x="151" y="42" width="498" height="196" rx="22" fill="#30283e"/><rect x="171" y="61" width="458" height="151" rx="13" fill="#fbfaff"/><rect x="191" y="80" width="185" height="30" rx="8" fill="#ff8ca5"/><text x="207" y="100" class="proto-code">BAŞLA</text><rect x="211" y="120" width="220" height="30" rx="8" fill="#ffcc58"/><text x="228" y="140" class="proto-code">TEKRARLA / KONTROL ET</text><rect x="231" y="160" width="250" height="30" rx="8" fill="#74d5cb"/><text x="249" y="180" class="proto-code">SONUCU GÖSTER</text><path d="M400 238 L350 270 H450 Z" fill="#625a71"/><rect x="312" y="264" width="176" height="11" rx="6" fill="#30283e"/>`;
 }else if(p.category==='STEM'){
  if(p.title.toLocaleLowerCase('tr').includes('köprü')){
   art=`<path d="M147 222 H653" stroke="#625a71" stroke-width="7" stroke-linecap="round"/><path d="M207 219 L256 100 L310 219 M310 219 L369 78 L429 219 M429 219 L492 108 L548 219" fill="none" stroke="#ff665e" stroke-width="12" stroke-linejoin="round"/><path d="M199 96 H556" stroke="#7547ff" stroke-width="9" stroke-linecap="round"/><rect x="320" y="48" width="132" height="30" rx="15" fill="#ffcc58"/><text x="386" y="68" text-anchor="middle" class="proto-caption">KÖPRÜ MODELİ</text>`;
  }else if(p.title.toLocaleLowerCase('tr').includes('tohum')||p.title.toLocaleLowerCase('tr').includes('bitki')){
   art=`<path d="M400 128 C345 63 269 79 281 125 C291 163 355 166 400 145 C445 166 509 163 519 125 C531 79 455 63 400 128Z" fill="#48b96e"/><path d="M400 126 V218 M400 160 L357 132 M400 176 L445 143" stroke="#287e50" stroke-width="9" stroke-linecap="round"/><path d="M327 210 Q400 190 473 210 L456 257 H344 Z" fill="#ff8b62"/><path d="M340 220 H460" stroke="#a9573e" stroke-width="8"/>`;
  }else{
   art=`<rect x="166" y="74" width="188" height="145" rx="16" fill="#dff8f4" stroke="#16a99c" stroke-width="3"/><path d="M201 193 V128 Q260 81 319 128 V193" fill="#fff" stroke="#16a99c" stroke-width="4"/><path d="M194 192 H327" stroke="#7547ff" stroke-width="5"/><rect x="416" y="74" width="202" height="145" rx="16" fill="#fff" stroke="#e8e2f0" stroke-width="3"/><path d="M446 188 L480 157 L515 169 L558 111 L591 132" fill="none" stroke="#ff665e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M444 194 H592 M447 101 V194" stroke="#a7a0b4" stroke-width="2"/>`;
  }
 }else{
  art=`<rect x="200" y="80" width="400" height="155" rx="24" fill="#fff" stroke="#dcd6e8" stroke-width="4"/><text x="400" y="162" text-anchor="middle" class="proto-emoji">${esc(p.emoji||'🧰')}</text><circle cx="577" cy="83" r="38" fill="#e8f8e6"/><path d="M558 83 L571 97 L598 68" fill="none" stroke="#39a331" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><text x="400" y="218" text-anchor="middle" class="proto-caption">GÜVENLİ BAKIM SONUCU</text>`;
 }
 return `<figure class="prototype-preview"><div class="prototype-heading"><span>ÖRNEK PROTOTİP</span><small>Beklenen sonuç</small></div><div class="prototype-frame"><svg viewBox="0 0 800 300" role="img" aria-label="${esc(p.title)} için örnek tamamlanmış prototip"><rect x="1" y="1" width="798" height="298" rx="22" fill="#fbfaff" stroke="#e9e4f1"/>${art}</svg></div><figcaption>${esc(p.title)} · Örnek çizim; kullanılan malzemeye ve tasarıma göre görünüm değişebilir.</figcaption></figure>`;
}
function renderGuideComplete(p){
 const host=document.getElementById('modalContent');
 host.innerHTML=`<div class="guide-complete"><div class="guide-complete-mark">✓</div><span class="section-kicker">GÜZEL İŞ!</span><h2 class="guide-title">${p.title}</h2>${projectPrototype(p)}<p>Proje adımlarını tamamladın. Neyi öğrendiğini ve bir sonraki denemede neyi değiştireceğini proje defterine not et.</p><div class="guide-actions"><button class="button button-outline" id="guideRepeat">Rehberi yeniden aç</button><button class="button button-dark" id="guideDone">Kapat</button></div></div>`;
 document.getElementById('guideRepeat').addEventListener('click',()=>renderGuideSetup(p));
 document.getElementById('guideDone').addEventListener('click',()=>{document.getElementById('modalBackdrop').hidden=true;document.body.style.overflow=''});
}
function toggleFavorite(id){if(state.favorites.has(id)){state.favorites.delete(id);showToast('Favorilerden çıkarıldı.')}else{state.favorites.add(id);showToast('Favorilerine eklendi.')}localStorage.setItem('tamirlab-favorites',JSON.stringify([...state.favorites]));render()}
grid.addEventListener('click',e=>{const fav=e.target.closest('[data-fav]');if(fav){e.stopPropagation();toggleFavorite(fav.dataset.fav);return}const card=e.target.closest('[data-id]');if(card)openProject(card.dataset.id)});grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.project-card')){e.preventDefault();openProject(e.target.dataset.id)}});
document.querySelectorAll('.filter-chip').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.filter=b.dataset.filter;state.expanded=state.filter!=='Tümü';render()}));
document.getElementById('projectSearch').addEventListener('input',e=>{state.search=e.target.value;render()});document.getElementById('modalClose').addEventListener('click',()=>{document.getElementById('modalBackdrop').hidden=true;document.body.style.overflow=''});document.getElementById('modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop'){e.currentTarget.hidden=true;document.body.style.overflow=''}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('modalBackdrop').hidden=true;document.body.style.overflow=''}if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();document.getElementById('projectSearch').focus()}});
document.querySelectorAll('.workshop-card').forEach(a=>a.addEventListener('click',()=>{const cat=a.dataset.category;document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('selected',x.dataset.filter===cat));state.filter=cat;state.expanded=true;render()}));
document.querySelector('.feature-copy .button-coral').addEventListener('click',()=>{document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('selected',x.dataset.filter==='Evde Tamir'));state.filter='Evde Tamir';state.expanded=true;render()});
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.desktop-nav').classList.toggle('open'));document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.desktop-nav').classList.remove('open')));document.querySelector('.search-open').addEventListener('click',()=>{document.getElementById('projectSearch').focus();document.getElementById('projeler').scrollIntoView({behavior:'smooth'})});
render();