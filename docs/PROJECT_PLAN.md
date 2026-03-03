# Proje Plani

```json
{
  "proje": {
    "ad": "Online Eğitim Platformu",
    "aciklama": "Kapsamlı online eğitim çözümü sunan web platformu",
    "sure": "16 hafta",
    "toplam_maliyet": 125000,
    "teknoloji_stack": {
      "frontend": ["React.js", "Redux", "Material-UI", "Video.js"],
      "backend": ["Node.js", "Express.js", "MongoDB", "Redis"],
      "odeme": ["Stripe API", "PayPal API"],
      "video": ["AWS S3", "CloudFront", "FFmpeg"],
      "auth": ["JWT", "OAuth 2.0"],
      "deployment": ["Docker", "AWS EC2", "Nginx"]
    },
    "moduller": [
      {
        "ad": "Kurs Yönetimi",
        "aciklama": "Eğitmenler için kurs oluşturma ve yönetim sistemi",
        "sure": "3 hafta",
        "maliyet": 22000,
        "ozellikler": [
          "Kurs oluşturma ve düzenleme",
          "İçerik yükleme (video, döküman, resim)",
          "Kurs kategorilendirme",
          "Fiyatlandırma ayarları",
          "Kurs durumu yönetimi",
          "Analitik ve raporlama"
        ]
      },
      {
        "ad": "Öğrenci Kayıt Sistemi",
        "aciklama": "Kullanıcı kayıt, giriş ve profil yönetimi",
        "sure": "2 hafta",
        "maliyet": 15000,
        "ozellikler": [
          "Kullanıcı kayıt ve doğrulama",
          "Sosyal medya ile giriş",
          "Profil yönetimi",
          "Kurs kayıt işlemleri",
          "İlerleme takibi",
          "Favoriler ve wishlist"
        ]
      },
      {
        "ad": "Video Ders Sistemi",
        "aciklama": "Video içerik oynatma ve yönetim sistemi",
        "sure": "4 hafta",
        "maliyet": 35000,
        "ozellikler": [
          "Adaptif video oynatıcı",
          "Çoklu kalite seçenekleri",
          "İzleme geçmişi",
          "Hız kontrolü",
          "Not alma sistemi",
          "Video indirme (offline)",
          "DRM koruması"
        ]
      },
      {
        "ad": "Quiz ve Değerlendirme",
        "aciklama": "Öğrenci değerlendirme ve sınav sistemi",
        "sure": "2.5 hafta",
        "maliyet": 18000,
        "ozellikler": [
          "Çoktan seçmeli sorular",
          "Açık uçlu sorular",
          "Zamanlı sınavlar",
          "Otomatik puanlama",
          "Sonuç analizi",
          "Soru bankası",
          "Random soru seçimi"
        ]
      },
      {
        "ad": "Sertifika Sistemi",
        "aciklama": "Dijital sertifika oluşturma ve doğrulama",
        "sure": "1.5 hafta",
        "maliyet": 12000,
        "ozellikler": [
          "Otomatik sertifika oluşturma",
          "Özelleştirilebilir şablonlar",
          "QR kod doğrulama",
          "PDF indirme",
          "Sertifika paylaşma",
          "Geçerlilik kontrolü"
        ]
      },
      {
        "ad": "Ödeme Sistemi",
        "aciklama": "Güvenli ödeme altyapısı ve fatura yönetimi",
        "sure": "2 hafta",
        "maliyet": 16000,
        "ozellikler": [
          "Kredi kartı ödemeleri",
          "Taksit seçenekleri",
          "Kupon ve indirim kodları",
          "Otomatik faturalama",
          "Geri ödeme yönetimi",
          "Ödeme geçmişi",
          "Vergi hesaplama"
        ]
      },
      {
        "ad": "Sistem Entegrasyonu ve Test",
        "aciklama": "Modül entegrasyonu ve kapsamlı testler",
        "sure": "1 hafta",
        "maliyet": 7000,
        "ozellikler": [
          "API entegrasyonları",
          "Unit testler",
          "Integration testler",
          "Performance testler",
          "Security testler"
        ]
      }
    ],
    "zaman_plani": {
      "faz_1": {
        "ad": "Temel Altyapı",
        "sure": "4 hafta",
        "moduller": ["Öğrenci Kayıt Sistemi", "Kurs Yönetimi (Temel)"]
      },
      "faz_2": {
        "ad": "İçerik Yönetimi",
        "sure": "6 hafta",
        "moduller": ["Video Ders Sistemi", "Kurs Yönetimi (Gelişmiş)"]
      },
      "faz_3": {
        "ad": "Değerlendirme ve Sertifikasyon",
        "sure": "4 hafta",
        "moduller": ["Quiz ve Değerlendirme", "Sertifika Sistemi"]
      },
      "faz_4": {
        "ad": "Ticari İşlemler",
        "sure": "2 hafta",
        "moduller": ["Ödeme Sistemi", "Sistem Entegrasyonu ve Test"]
      }
    },
    "takım": [
      {
        "rol": "Proje Yöneticisi",
        "kisi_sayisi": 1,
        "haftalik_maliyet": 2000
      },
      {
        "rol": "Full Stack Developer",
        "kisi_sayisi": 2,
        "haftalik_maliyet": 3000
      },
      {
        "rol": "Frontend Developer",
        "kisi_sayisi": 1,
        "haftalik_maliyet": 1500
      },
      {
        "rol": "Backend Developer",
        "kisi_sayisi": 1,
        "haftalik_maliyet": 1500
      },
      {
        "rol": "UI/UX Designer",
        "kisi_sayisi": 1,
        "haftalik_maliyet": 1200
      },
      {
        "rol": "QA Engineer",
        "kisi_sayisi": 1,
        "haftalik_maliyet": 1000
      }
    ],
    "riskler": [
      {
        "risk": "Video streaming performans sorunları",
        "olasilik": "Orta",
        "etki": "Yüksek",
        "onlem": "CDN ve caching stratejileri"
      },
      {
        "risk": "Ödeme entegrasyonu gecikmeleri",
        "olasilik": "Düşük",
        "etki": "Yüksek",
        "onlem": "Erken API testleri ve sandbox ortamı"
      },
      {
        "risk": "Güvenlik açıkları",
        "olasilik": "Orta",
        "etki": "Kritik",
        "onlem": "Security audit ve penetrasyon testleri"
      }
    ],
    "teslim_edilecekler": [
      "Web uygulaması (responsive)",
      "Admin paneli",
      "API dokümantasyonu",
      "Kullanım kılavuzu",
      "Teknik dokümantasyon",
      "Test raporları",
      "Deployment scripti"
    ],
    "basari_kriterleri": [
      "1000+ eş zamanlı kullanıcı desteği",
      "Video yükleme süresi < 2 saniye",
      "Ödeme işlem başarı oranı > 99%",
      "Mobil uyumluluk skoru > 95",
      "Güvenlik taraması geçiş oranı 100%"
    ]
  }
}
```