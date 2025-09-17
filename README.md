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
Slug sayfasında ise SEO uyumluluğunu korumak için veriyi client tarafındaki context’ten almak yerine server tarafında tekrar fetch ettim.

Artı olarak figmadan logoyu kesip favicon olarak ekledim.

Projeyi bitirmek yaklaşık 15 saatimi aldı.
