## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Selamlar

Css için Tailwind CSS kullandım, bazı iconlar için react-icons yükledim ve sliderlar için swiper eklendi.

Tüm görseller önceden boyutlandırılıp optimize edildi, böylece sayfa performansı artırıldı.

API’den farklı endpoint’lere istek atamadığım için veriyi toplu olarak çektim ve context aracılığıyla diğer sayfalara dağıttım.
Slug sayfasında ise SEO uyumluluğunu korumak için veriyi client tarafındaki context’ten almak yerine server tarafında tekrar fetch ettim. Datayı toplu çekip filterlamak doğru değil biliyorum ama api izin vermediği için toplu almak zorundaydım.

Artı olarak figmadan logoyu kesip favicon olarak ekledim.

Projeyi bitirmek yaklaşık 15 saatimi aldı.

Mobile menu için tasarım yoktu bu yüzden idare eder bişeyler koydum.

Tasarımda blog ve blogun slugları vardı ama tasarımdaki navigasyonda blog sayfasına yönlediricek yer yoktu tasarımı bozmamak adına değişim yapmadım ama haberlere tıklayınca blog sayfasına gidilebilir.

Pixel perfect yapmaya çalıştım boyutları figmadaki piksellerle aynıdır.

Fetchlerdeki urlli env içine alabilirdim ama api sabit olduğundan gerek duymadım.
