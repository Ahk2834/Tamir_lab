# YenilikçiLab WordPress içerik ve yayın modeli

Bu belge, `yenilikcilab.yenilikciegitim.com` üzerinde kurulacak WordPress yönetim panelinin içerik sözleşmesidir. Canlı WordPress kurulumu ve hosting erişimi henüz bu kaynak klasörüne bağlı değildir; bu nedenle bu belge kurulumun kendisi değil, arayüz ve içerik entegrasyonunun bağlayıcı hazırlık planıdır.

## Yönetim yaklaşımı

- YenilikçiLab ayrı WordPress kurulumu, klasörü ve veritabanı kullanır.
- Sayfalar, ana sayfa bölümleri, menüler, görseller, renkler ve yerleşimler WordPress'in görsel Site Düzenleyicisi veya seçilen sayfa düzenleyicisiyle yönetilebilir.
- Projeler ayrı bir `YenilikçiLab Projeleri` içerik türü olur; proje ayrıntıları düzenli alanlarda tutulur.
- APK ve web arayüzü yalnızca yayımlanmış içerikleri okur. Yönetici yazma erişimi APK'ya veya tarayıcıda herkese açık betiklere verilmez.
- Taslak içerik ziyaretçilere ve APK'ya sunulmaz.

## Proje alanları

Her proje kaydında aşağıdaki alanlar bulunur:

| Alan | Amaç |
|---|---|
| Başlık, kısa açıklama, kapak görseli | Katalog kartı |
| Eğitim düzeyi, sınıf aralığı, atölye, zorluk | Filtreleme ve yaş uygunluğu |
| Öğrenme kazanımı, süre, yaklaşık maliyet | Proje beklentisini açıklama |
| Malzemeler ve güvenli/onaylı alternatifler | Hazırlık ve erişilebilirlik |
| Öğrenci görevi ve yetişkin/öğretmen görevi | Sınıfta ve evde sorumluluk paylaşımı |
| Numaralı adımlar | Adım adım rehber |
| Projeye özel şema ve şema açıklaması | Bağlantı/mekanik/akış planı |
| Güvenlik notu ve açık durma koşulları | Tehlikeli durumda işlemi durdurma |
| Test ölçütü, sorun giderme, gözlem soruları | Sonucu değerlendirme |
| Atık ve yeniden kullanım yönergesi | Güvenli malzeme sonlandırma |
| Tamamlanmış prototip görseli | Yalnızca proje tamamlanınca gösterilen örnek |
| İçerik gözden geçirme tarihi ve kontrol notu | Güncellik ve editoryal iz |

Eksik güvenlik notu, şema, adım veya yaş düzeyi bulunan proje yayıma hazır sayılmaz. Her seviye için hedeflenen 50 proje, kayıt sayısı olarak değil, gerekli içerik alanları tamamlanıp gözden geçirildikten sonra yayımlanır.

## Yayın akışı

1. **Taslak:** Yazar proje bilgilerini, görseli ve şemayı ekler.
2. **İnceleme bekliyor:** Güvenlik, yaş uygunluğu, yönerge ve görsel eşleşmesi kontrol edilir.
3. **Yayımlandı:** Kontrolü tamamlanan kayıt web ve APK'nın salt-okunur proje akışında görünür.
4. **Güncelleme gerekli / arşiv:** Eski veya sorunlu kayıt yayından kaldırılır; içerik geçmişi panelde korunur.

## Öğretmen ve aile föyü

Yazdırılabilir föy proje verisinden üretilir. Kazanım, düzey, süre, malzeme listesi, şema, adımlar ve güvenlik notuna ek olarak sınıf/grup, tarih, gözlem ve sonuç alanları içerir. Öğretmen/aile düzenlemeleri yalnızca açık föyün belleğinde tutulur; proje kataloğuna veya cihaz depolamasına yazılmaz ve föy kapatıldığında silinir. Güvenlik notu föyde kilitlidir. Föy doğrudan PDF olarak indirilir. Android uygulamasında sistem paylaşım menüsü açılır; buradan yazdırma veya dosyalara kaydetme hedefi seçilir. PDF kullanıcı tarafından paylaşılırsa alıcılar bu dosyadaki düzenlemeleri görür. Sınıf paylaşımı için öğrenci hesabı veya çocuklardan kişisel bilgi toplama zorunlu değildir.

## Veri ve gizlilik

- Favoriler ve tamamlanma işaretleri ilk aşamada cihazda tutulur.
- Tamamlanmış prototip fotoğrafı isteğe bağlıdır; cihazda yerel saklanır ve kullanıcı silebilir.
- Proje okuma API'si herkese açık salt-okunur olabilir; taslaklar, kullanıcı bilgileri, yönetici işlemleri ve içerik yazma uçları dışarı açılmaz.
- APK içinde yönetici parolası, veritabanı parolası veya yazma anahtarı bulunmaz.
- Çocuk hesapları, yorumlar ve herkese açık fotoğraf yükleme ilk sürüm kapsamına alınmaz.
