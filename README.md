
# Bankacılık Sektörü İçin CRM Web Uygulaması

Bu proje, Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü bünyesinde, Yönetim Bilgi Sistemleri (YBS) dersi kapsamında geliştirilmiştir. Proje, bankacılık süreçlerini dijitalleştiren kapsamlı bir Müşteri İlişkileri Yönetimi (CRM) sistemidir.

## 📊 Proje Genel Bakış
Sistem; müşteri kayıt, şikayet yönetimi, toplu iletişim ve kampanya öneri modüllerinden oluşmaktadır. Proje kapsamında sektör lideri CRM çözümleri (Oracle PeopleSoft, Temenos Infinity, nCino) ile karşılaştırmalı analizler yapılmıştır.

## 🛠 Teknik Mimari
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, JavaScript
- **Veritabanı:** PostgreSQL / SQL (Müşteri ve Bilet verilerini yönetmek için)
- **Modüller:** Toplu Mail (Nodemailer), Şikayet Takip Sistemi, Müşteri Notları

## 🏗 Sistem Tasarımı
Projenin mimarisi şu teknik dökümanlara dayanmaktadır:
- **ER Diyagramı:** Veritabanı tabloları arasındaki ilişkiler (Müşteri -> Şikayet -> Admin).
- **Kullanım Senaryosu (Use Case):** Müşteri ve Yönetici rollerinin sistem üzerindeki etkileşimleri.

##  Repository Yapısı
- **`public/`**: Frontend dosyaları (HTML/CSS).
- **`index.js`**: Uygulama sunucusu ve API endpointleri.
- **`queries.js`**: Veritabanı CRUD operasyonları ve SQL sorguları.
- **`sendmail.js`**: Toplu iletişim modülü kodları.

---
*Bu çalışma bir üniversite projesi olup, akademik araştırma ve uygulama geliştirme amacıyla hazırlanmıştır.*
