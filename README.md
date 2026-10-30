# YenilikçiLab

**Tamir et, keşfet, üret.**

YenilikçiLab; evde düşük riskli küçük tamir rehberleri ile elektronik, robotik, programlama ve STEM deney atölyelerini bir araya getiren web/PWA ve Android APK projesidir.

## Mevcut arayüz

- Renkli, mobil uyumlu ana sayfa
- Evde Güvenli Tamir, Elektronik, Robotik, Programlama ve STEM atölye girişleri
- Örnek proje kataloğunda arama, seviye/kategori filtresi ve favoriler
- Proje detayında malzemeler, adımlar ve güvenlik notu
- Öğretmen/aile için düzenlenebilir, cihazda taslak tutan çalışma föyü; indirilebilir HTML, paylaşım ve tarayıcı yazdırma seçenekleri
- Cihazda saklanan favoriler, tamamlanan projeler ve isteğe bağlı prototip fotoğrafı
- Web sürümünde çevrim dışı önbellek; kişisel ilerleme verisi sunucuya gönderilmez
- GitHub Pages ve Android APK için GitHub Actions iş akışları

Katalogdaki örnekler prototip arayüzü gösterir; 1–4, 5–8 ve 9–12. sınıflar için 50'şer doğrulanmış proje içeriği ürün yol haritasında yer alır. Sayı tamamlanmadan 150 proje yayımlanmış gibi gösterilmemelidir.

WordPress yönetim paneli için tam sayfa düzenleme, proje alanları ve taslak → inceleme → yayımlama akışı [içerik modelinde](docs/wordpress-content-and-review-workflow.md) tanımlıdır. WordPress henüz canlı bir sunucuya bağlanmadı; APK ve web arayüzü şu an statik yerel katalogla çalışır.

## Geliştirme

Statik web arayüzü `www/` içinde bulunur. Yerel web sunucusu için herhangi bir statik sunucu kullanılabilir. Android kabuğu Capacitor ile oluşturulur; GitHub Actions Java/Android SDK ortamını kurar, APK'yı derler ve artifact olarak yükler.

## Güvenlik içerik ilkeleri

Tamir içerikleri yalnızca düşük riskli başlangıç işlerini kapsar. Şebeke elektriği, gaz, cihaz içi tehlikeli onarım, lityum hücre/pil paketi müdahalesi veya yüksek riskli yapım adımları yayımlanmaz. Lehimli projelerde havya yetişkin tarafından kullanılır. Her eğitim projesi güvenlik ve yaş uygunluğu kontrolünden geçmelidir.

## Renk sistemi

Canlı mor, mercan, sarı, turkuaz ve yeşil; koyu mürekkep rengi ve açık sıcak arka planla dengelenmiştir. Görsel bileşenler CSS ve yerel SVG kullanır; dış görsel servisine bağımlılık yoktur.
