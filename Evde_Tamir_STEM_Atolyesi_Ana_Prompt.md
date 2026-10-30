# Evde Tamir ve STEM Atölyesi — Ana Geliştirme Promptu

## 1. Rolün ve hedefin

Bu projede deneyimli bir ürün tasarımcısı, web/Android geliştiricisi ve eğitim içeriği editörü gibi çalış. Türkiye’deki ailelerin, öğrencilerin ve öğretmenlerin kullanabileceği; evde güvenle yapılabilecek basit tamirleri anlatan ve çocuklarla STEM, elektronik, robotik, kodlama ve geri dönüşüm projeleri sunan bir uygulama geliştir.

Uygulamanın çalışma adı **YenilikçiLab** olsun. Slogan: **“Tamir et, keşfet, üret.”** Bu ad geliştirme boyunca kullanılsın; alan adı ve marka uygunluğu ayrıca kontrol edilmeden tescilli veya kesinleşmiş marka gibi sunulmasın. Ürün yalnızca tasarım maketi olmasın: web sitesinde çalışsın, Android APK olarak kurulabilsin, telefon ekranında rahat kullanılsın ve temel içerikleri internet olmadan açabilsin.

## 2. Ürünün temel amacı

Uygulama dört birbiriyle bağlantılı alanı tek yerde karşılasın:

1. **Evde Güvenli Tamir:** Başlangıç seviyesinde, düşük riskli ev bakım ve küçük onarım işlerini anlaşılır, görselli ve adım adım anlat.
2. **Elektronik Atölyesi:** Elektronik bileşenleri, basit devreleri, breadboard kullanımını, sensörleri ve güvenli lehim projelerini kademeli öğret.
3. **Robotik Atölyesi:** Mekanik tasarım, hareket, motor, sensör, kontrol ve robot yapımını sınıf seviyesine göre öğret.
4. **Programlama Atölyesi:** Algoritmik düşünmeden blok kodlamaya, uygun seviyelerde metin tabanlı kodlamaya ve robot/sensör projelerine ilerleyen bir öğrenme yolu sun.

Fen deneyleri, mühendislik tasarımı, matematik-veri çalışmaları ve güvenli geri dönüşüm bu atölyelerin tümüne yayılsın. İlkokul, ortaokul ve lise öğrencileri tek başına değil; uygun yetişkin desteğiyle, ailece veya öğretmen rehberliğinde çalışabilsin.

Ürün, kullanıcının yapamayacağı veya tehlikeli bir işi denemesine yol açmamalı. “Usta gibi her işi yaptıran” bir uygulama değil; güvenli sınırları doğru belirleyen bir rehber olmalı.

## 3. Hedef kullanıcılar

- Evde küçük bakım ve onarım yapmak isteyen yetişkinler
- Çocuklarıyla üretken etkinlik yapmak isteyen aileler
- İlkokul, ortaokul ve lise öğrencileri
- STEM, teknoloji tasarım ve robotik öğretmenleri
- Eski, bozuk veya kullanılmayan elektronik eşyaları güvenli biçimde değerlendirmek isteyen kişiler

Arayüz ve bütün ilk sürüm içerikleri Türkçe olsun. Dil açık, doğal, kısa cümleli ve yaş seviyesine uygun yazılsın. Gereksiz teknik terim kullanılırsa hemen açıklansın.

## 4. İçerik güvenliği — değiştirilemez kurallar

### 4.1 Ev tamiri kapsamı

Yalnızca temel el aletleriyle yapılabilen, uzmanlık veya tehlikeli işlem gerektirmeyen küçük işler yayımlanabilir. Örnek kapsam:

- Mobilya kulpu ve menteşe vidalarını sıkma
- Kapı gıcırtısını giderme ve basit ayar
- Mobilya altına koruyucu keçe takma
- Küçük çivi deliğini macunlama ve küçük boya rötuşu
- Yapışkanlı kapı/pencere fitili yenileme
- Musluk perlatörü veya duş başlığı gibi kullanıcı tarafından çıkarılabilir parçaları temizleme
- Süzgeç veya pompa gibi basit yöntemlerle yüzeysel tıkanıklığı giderme
- Üretici tarafından kullanıcı bakımı için tasarlanmış, çıkarılabilir filtreleri temizleme/değiştirme

Her kılavuz, işin yalnızca anlatılan koşullarda yapılabileceğini belirtmeli. Belirsizlik, hasar, kaçak, yanık izi, kıvılcım, aşırı ısınma, gaz kokusu, küf, yapısal çatlak veya alışılmadık durum görülürse kullanıcıya devam etmemesini söylemeli.

### 4.2 Kesinlikle rehberlik edilmeyecek işler

Aşağıdaki işler için sökme, onarma, kablo bağlama veya müdahale adımları verme:

- Şebeke elektriği, priz, anahtar, elektrik panosu, bina tesisatı ve sabit aydınlatma hattı
- Gaz tesisatı, kombi, şofben, ocak, kazan, baca ve yanma sistemi
- Mikrodalga fırın, CRT/tüplü televizyon, güç kaynağı, inverter, yüksek gerilimli veya enerji depolayabilen cihazların içi
- Çamaşır/bulaşık makinesi, buzdolabı gibi elektrikli ev aletlerinin iç onarımı
- Gizli kablo veya boru olabilecek duvarı delme; taşıyıcı duvar, çatı, balkon, cephe, merdiven ve yük taşıyan sabitlemeler
- Su yalıtımı, gizli tesisat, basınçlı hatlar, büyük su kaçağı, küf/asbest şüphesi
- Yüksekte çalışma, ağır parça kaldırma, kesme/taşlama, güçlü elektrikli el aleti kullanımı
- Araç, motor, basınçlı kap veya yangın söndürme sistemleri

Bu tür bir talepte uygulama adım adım onarım vermesin. Kısa biçimde “Bu iş uzman müdahalesi gerektirir” diyerek uygun yetkili servis/uzman türüne yönlendirsin. Acil durumda yalnızca resmî ve güncel acil yardım bilgisi gösterilsin; kullanıcıya tehlikeli kurtarma müdahalesi öğretilmesin.

### 4.3 Elektronik güvenliği ve lehim

Lehimleme uygulamanın atölye kapsamına dahildir; ancak yalnızca eğitim amacıyla hazırlanmış, düşük gerilimli ve akımı sınırlandırılmış devre projelerinde kullanılabilir.

- İlk sürümde havya ve sıcak işlem yetişkin tarafından yapılır. Çocuklar devreyi kurma, bileşenleri tanıma, mekanik montaj, programlama ve testte yaşlarına uygun biçimde görev alır.
- Lehimleme rehberleri dumanın solunmaması, uygun havalandırma/duman emişi, havya sehpası, göz koruması ve sıcak ucun güvenli kullanımı konusunda proje başlamadan bilgi verir.
- Projeler breadboard veya güvenli hazır modüllerle lehimsiz alternatif de sunabiliyorsa bunu belirtir.
- Düşük gerilim, “hiç risk yok” anlamına gelmez. Kısa devre, aşırı ısınma ve yanlış bağlantı kontrolleri her ilgili projede bulunur.

### 4.4 Pil ve güç sınırları

- Lityum iyon/lityum polimer hücreleri veya pil paketlerini açma, sökme, onarma, yeniden hücreleme, şarj devresi yapma ya da başka projeye aktarma kesinlikle anlatılmayacak.
- Telefon, tablet, dizüstü bilgisayar, powerbank, elektrikli bisiklet/scooter gibi cihazların pilleriyle çalışma yok.
- Şişmiş, delinmiş, ısınan veya hasarlı pil için kullanıcıya müdahale tarifi verme; kullanımı durdurup güvenli atık/uzman yönlendirmesi göster.
- Uygun robotik projelerde yalnızca yeni AA/AAA alkalin piller, doğru pil yuvasında ve denetimli düşük gerilimli devrede kullanılabilir; pil şarjı veya pil paketi yapımı gösterilmez.
- Sabit projelerde kapalı, değiştirilmemiş, uygun sertifikalı USB güç kaynağı veya akım sınırlamalı eğitim kaynağı kullanılabilir. Adaptör açma/değiştirme yok.
- Eski cihazlardan pil sökme ve pil yeniden kullanma yok.

### 4.5 Eski elektroniklerden güvenli üretim

Geri dönüşüm projelerinde öncelik cihazların kasa, düğme, tuş, tekerlek ve diğer mekanik parçalarına verilsin. Elektronik devre kartlarının sökülmesi yalnızca cihazın düşük gerilimli olduğu, enerji kaynağının güvenle ayrıldığı ve ilgili proje için riskin içerik editörü tarafından değerlendirildiği durumlarda ele alınabilir. Şebeke elektriğiyle çalışan veya bilinmeyen cihazlar açtırılmasın.

Şırıngalı araç ve kepçe projelerinde iğnesiz şırınga ve su kullan; basınçlı hava, yanıcı sıvı, kapalı basınç kabı veya keskin parça kullanma.

## 5. STEM proje kütüphanesi: en az 150 özgün proje

Yayımlanmış başlangıç kataloğunda **her eğitim seviyesinde en az 50 proje** bulunsun:

- İlkokul: 1–4. sınıf — en az 50
- Ortaokul: 5–8. sınıf — en az 50
- Lise: 9–12. sınıf — en az 50

Toplam başlangıç hedefi en az 150 özgün projedir. Her eğitim seviyesindeki 50 projenin konu dağılımı dengeli olsun: en az 10 elektronik, 10 robotik, 10 programlama/kodlama ve kalan 20 proje fen deneyleri, ölçüm, matematik-veri, mühendislik/tasarım ve güvenli yeniden kullanım alanlarını kapsasın. Entegre STEM projeleri bir ana kategoriye atanarak sayımda yalnızca bir kez yer alsın. Aynı projenin renk, şekil veya küçük parça değişiklikleriyle yeniden sunulması ayrı proje sayılmaz.

Bu 150 proje, üç atölyenin genişliğini göstermeli; atölyeler yalnızca proje başlıklarından ibaret kalmamalı. Her biri kendi öğrenme basamaklarına, mini derslerine, araç/bileşen sözlüğüne, alıştırmalarına ve proje bağlantılarına sahip olsun.

### 5.1 Geniş öğrenme yolları

**Elektronik Atölyesi:** Elektrik devresi kavramı; güvenli düşük gerilim; pil yuvası ve kutuplar; LED ve direnç; anahtar/buton; breadboard; seri-paralel bağlantı; multimetreyle temel ölçüm; ışık, sıcaklık, nem, mesafe ve hareket sensörleri; küçük motorlar ve sürücüler; lehimli/lehimsize alternatif devreler; devre şeması okuma; güvenli hata bulma. Konular sınıf seviyesine göre basitten karmaşığa ilerlesin.

**Robotik Atölyesi:** Gövde ve denge; tekerlek, dişli ve bağlantı; hareket ve yön; DC motor ve servo; sensör seçimi; robotun çevresini algılaması; koşul ve karar verme; çizgi izleme, engelden kaçma ve labirent çözme; geri bildirim ve kontrol; LEGO/uyumlu yapı parçalarıyla modeller; karton ve geri kazanılmış mekanik parçalarla gövde tasarımı. Her seviyede tasarım-test-iyileştirme döngüsü bulunsun.

**Programlama Atölyesi:** Ekransız algoritma oyunları; sıralama, olay, döngü, koşul, değişken, fonksiyon ve hata ayıklama; blok kodlama; donanım ve sensörlerle etkileşim; uygun ortaokul/lise seviyelerinde metin tabanlı programlama; robotu kontrol etme; veriyi toplama, düzenleme ve grafikleme. Kullanılan platform ve kod örnekleri cihaz gereksinimleriyle belirtilsin. Kodlar kopyalanabilir, açıklamalı ve projede gerçekten çalışacak biçimde verilsin.

**STEM Deney ve Tasarım Atölyesi:** Kuvvet-hareket, enerji dönüşümü, ışık, ses, basınç, ölçme, oran, geometri, veri ve prototip tasarımı konularını evde bulunan güvenli malzemelerle araştır. Her deneyde soru, tahmin, değişken, ölçüm, gözlem, sonuç ve geliştirme bölümü olsun.

### 5.2 Kapsama alınacak örnek temalar

- İğnesiz şırıngalarla su basıncı kullanan araç, kepçe veya hidrolik kol
- LEGO veya uyumlu yapı parçalarıyla mekanik araç ve robotlar
- LED devreleri, sensörler, butonlar ve temel elektronik
- Titreşim robotu, çizgi izleyen robot, engelden kaçan robot, labirent çözen robot
- Blok kodlama ile başlayıp uygun lise projelerinde metin tabanlı programlamaya ilerleme
- Sıcaklık, nem, ışık, toprak nemi veya su seviyesi ölçümü
- Mini sera, hava durumu ölçer, güneşi takip eden panel modeli
- Köprü ve kule tasarımı, yük/denge/dayanıklılık ölçümleri
- Rüzgâr türbini kanadı ve enerji verimi modeli
- Eski klavye, fare veya uygun düşük gerilimli aksesuarların mekanik parçalarıyla yeni ürün
- Eski cep telefonunu açmadan, kendi alanında ve açık izinle kamera olarak değerlendirme

Telefonun iç kamera modülünü söküp başka karta takma her modelde çalışmaz. Bunu yalnızca belirli model, bağlantı, sürücü ve uyum doğrulanırsa ileri seviye deney olarak yayımla; doğrulanmadıysa “uyumluluğu doğrulanmadığı için uygulanabilir rehber yok” de. Güvenlik kamerası projelerinde gizli izleme, izinsiz kayıt, yüz tanıma veya açık internete kontrolsüz yayın özelliği sunma. Kamera yalnızca kullanıcının kendi alanında ve izinli biçimde kullanılmalı.

Her proje kartında şu alanlar yer alsın:

- Proje adı, görseli/şeması ve kısa tanıtımı
- Sınıf seviyesi ve önerilen yaş uygunluğu
- STEM kazanımları ve öğrenme hedefleri
- Zorluk, süre, yaklaşık maliyet ve gerekli ön bilgi
- Malzeme/adet listesi, araçlar ve güvenli alternatifler
- Çocuk ve yetişkin görevleri
- Ön hazırlık ve güvenlik kontrol listesi
- Numaralı adımlar; her adımda açıklama ve gerektiğinde fotoğraf/şema
- Elektronik proje ise devre şeması, bağlantı tablosu ve doğrulanmış kod
- Test etme, beklenen sonuç, sık hata ve güvenli sorun giderme
- Projeyi geliştirme veya farklılaştırma önerileri
- Geri dönüşüm/atık bilgisi
- İçeriğin gözden geçirilme tarihi ve editoryal durum

Her seviyede yalnızca başlık listesi değil, uygulamaya dönüştürülebilir rehberler bulunsun. İçeriği teknik veya güvenlik açısından doğrulanmamış projeyi yayımlanmış sayma; taslaksa “hazırlanıyor” olarak işaretle ve 50 sayısına dahil etme.

## 6. Uygulama modülleri

### A. Ana sayfa

- “Evde Güvenli Tamir” ve “Elektronik ve Robotik Atölyesi” şeklinde iki ana giriş
- Arama çubuğu
- Popüler ve yeni eklenen rehberler
- Sınıf seviyesine, kategoriye, süreye, zorluğa ve gerekli malzemelere göre keşif
- Güvenlik ilkesini kısa ve görünür biçimde anlatan alan

### B. Evde Güvenli Tamir

- Soruna veya eşyaya göre rehber bulma
- Malzeme ve araç listesi
- Tahmini süre/maliyet
- Adım adım ilerleme ve tamamlandı işaretleme
- “Burada dur” koşulları ve uzman yönlendirme kutusu
- Favoriler ve son görüntülenenler

### C. Atölyeler

- **Elektronik Atölyesi**, **Robotik Atölyesi**, **Programlama Atölyesi** ve **STEM Deney/Tasarım Atölyesi** ayrı giriş ve öğrenme yolları olarak gösterilsin.
- Her atölyede ilkokul, ortaokul ve lise seviyeleri; ön koşullar ve ilerleme adımları bulunsun.
- Projeler STEM alanı, zorluk, süre, maliyet, gerekli malzeme ve aileyle yapılabilirlik etiketleriyle aranabilsin.
- Öğretmenler için sınıf/etkinlik görünümü ve çıktı alınabilir malzeme listesi sunulsun.
- Lehimli/lehimsize alternatif, çocuk/yetişkin görevleri ve güvenlik uyarıları açıkça ayrılsın.
- Kodlar açıklamalı görüntülenip kopyalanabilsin; devre şeması ve bağlantı tablosu adımlarla eşleşsin.
- Proje adımları ve öğrenme yolu cihazda kaydedilebilsin.
- Her atölyede temel kavram mini dersleri, terimler sözlüğü, örnekler, uygulama görevleri ve güvenli malzeme/atık açıklamaları bulunsun.

### D. Yardımcı alanlar

- Temel araç ve elektronik bileşen sözlüğü
- Basit birim ve ölçüm açıklamaları
- Güvenli atık ve geri dönüşüm notları
- “Bu işi kendim yapabilir miyim?” ön kontrol akışı
- Rehber içerik hatası/iyileştirme bildirimi

## 7. Tasarım ve kullanılabilirlik

- Modern, sade, sıcak ve güven veren tasarım; çocukça görünmeden aile ve öğrenci dostu olsun.
- Öncelik mobil kullanım; büyük dokunma alanları, okunaklı yazı, iyi kontrast ve basit menüler kullan.
- Uzun rehberleri küçük adımlara böl; kullanıcı kaldığı adıma geri dönebilsin.
- Görseller açıklayıcı ve doğru olsun; tehlikeli işlemi özendiren dekoratif görsel kullanma.
- Renk tek başına güvenlik göstergesi olmasın; simge ve metin de kullan.
- Görme/okuma erişilebilirliği için görsel alt açıklamaları, klavye ile kullanım ve uygun kontrast sağla.
- Çevrimdışı içerik durumunu kullanıcıya göster.

## 8. Teknik altyapı

Önerilen başlangıç mimarisi:

- Tek kod tabanından web sitesi ve Android uygulaması üret.
- React + TypeScript + Vite ve Android kabuğu için Capacitor kullan; güncel kararlı sürümlerin resmi gereksinimlerini uygulamaya başlamadan doğrula.
- Web sürümünü statik site olarak GitHub Pages’te yayımla.
- GitHub Actions ile web sürümünü yayımla ve Android APK derlemesini üret.
- Her derleme için APK’yı GitHub Actions artifact olarak indirilebilir kıl. İmzalı dağıtım gerekiyorsa keystore veya imza bilgilerini kod deposuna koyma; yalnızca GitHub’ın güvenli secrets mekanizmasını kullan.
- Rehber içerikleri uygulamadan ayrı, düzenlenebilir yerel JSON/Markdown dosyalarında tutulabilsin; yeni içerik eklemek için uygulama kodunun tamamını değiştirmek gerekmesin.
- İlk sürümde kullanıcı hesabı, reklam, ödeme, sunucuya sağlık/kişisel veri yükleme veya zorunlu bulut bağlantısı olmasın.
- Projeler, resimler, kod örnekleri ve temel sözlük çevrimdışı erişime uygun paketlensin. Favoriler ve ilerleme bilgisi cihazda saklansın.
- Web ve APK aynı içerik kaynağını kullansın.
- Ana hedef güncel Android telefonlar olsun; Android minimum sürümü kullanılan Capacitor sürümünün resmi gereksinimine göre belirlenip belgelerde açıkça yazılsın. Android 7.1.2 tablet uyumluluğunu ayrıca dene; çalışacağı garanti edilmeden destekleniyor diye ilan etme.
- Gizli anahtar, token, kişisel veri veya özel erişim bilgisi kaynak koduna eklenmesin.
- GitHub Pages altında alt dizin URL’sinin doğru çalışmasına dikkat et.

## 9. İçerik yönetimi ve güven

- İçerikler başlık, kategori, eğitim seviyesi, risk durumu, sürüm ve gözden geçirme tarihiyle düzenli tutulmalı.
- Teknik devre ve kod örnekleri mümkün olduğunda cihaz/bağlantı/gerilim bilgisiyle doğrulanmalı.
- Üreticiye özgü işlem anlatılıyorsa ilgili ürün modelini ve resmi kullanım belgesini belirt; model belirsizse genelleme yapma.
- Resmî kaynak veya uzman doğrulaması olmayan riskli talimat yayımlama.
- Uygulamanın hiçbir ekranı tehlikeli bir işi yalnızca “dikkatli ol” uyarısıyla güvenliymiş gibi sunmasın.
- Kullanıcıların gönderdiği proje içerikleri editör kontrolü olmadan yayımlanmasın.

## 10. Teslim ve kabul ölçütleri

İlk teslimatta:

1. Çalışan, Türkçe ve mobil uyumlu web uygulaması ile Android proje yapısı oluştur.
2. GitHub Pages dağıtım ve APK derleme iş akışlarını depoya ekle.
3. Tamir bölümü ile dört ayrı atölye girişini, arama/filtreleri, rehber sayfalarını, çevrimdışı temel kullanımı ve cihazda favori/ilerleme özelliklerini oluştur.
4. İçerik şemasını ve yeni rehber ekleme yönergesini belgele.
5. Her eğitim düzeyinde en az 50 özgün proje sağla; her seviyede en az 10 elektronik, 10 robotik ve 10 programlama projesi bulunsun. Projeler doğrulanmış, güvenli ve adım adım uygulanabilir olsun; doldurma amaçlı tekrar kullanma.
6. Evde tamir rehberleri yalnızca onaylı düşük risk kapsamındaki işleri içersin.
7. Tehlikeli bir iş seçildiğinde uygulama onarım adımı göstermeden güvenli biçimde durdurup uzman yönlendirmesi yapsın.
8. Kurulum, yerel geliştirme, web yayını, APK indirme ve içerik ekleme adımlarını Türkçe README’de anlat.
9. Uygulamayı gösterişli ama karmaşık yapma; öncelik güven, açıklık, erişilebilirlik ve kolay kullanımdır.

İşe başlamadan önce repo yapısını ve mevcut kodu incele. Mevcut dosyaları koru, değişiklikleri küçük ve anlaşılır aşamalarda yap. Kullanıcı onayı olmadan siteyi yayımlama, dış hizmete veri gönderme veya ücretli servise bağlama.
