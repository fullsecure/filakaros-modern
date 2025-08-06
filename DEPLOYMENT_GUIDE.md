# 🚀 دليل النشر على Vercel - مشروع Filakaros

## ✅ التحديثات المطبقة

### 1. ترقية Next.js
- **من**: Next.js 13.5.6
- **إلى**: Next.js 14.2.31
- **السبب**: ضمان التوافق الكامل مع Vercel وحل مشاكل الاستيرادات المعقدة

### 2. إصلاح الاستيرادات المكررة
- إزالة الاستيرادات المكررة في `src/components/ui/index.ts`
- تحسين بنية التصدير للمكونات
- إضافة مكونات مفقودة للتصدير

### 3. تحسين إعدادات TypeScript
- تحديث `target` من `es5` إلى `es2017`
- إضافة `verbatimModuleSyntax: false`
- تحسين `moduleResolution` للتوافق مع Next.js 14

### 4. تحسين next.config.js
- تحديث `images.domains` إلى `images.remotePatterns` (الطريقة الجديدة)
- إزالة الإعدادات التي قد تسبب مشاكل في Vercel
- تحسين إعدادات الأمان والأداء

### 5. تحسين vercel.json
- تحديث إعدادات البناء والنشر
- إضافة متغيرات البيئة المحسنة
- تحسين إعدادات الـ functions
- إضافة headers أمان إضافية

### 6. إصلاح مشكلة TailwindCSS الحرجة ⚠️
- **المشكلة**: `Cannot find module 'tailwindcss'` على Vercel
- **الحل**: نقل `tailwindcss`, `postcss`, `autoprefixer` من `devDependencies` إلى `dependencies`
- **السبب**: Vercel يحتاج هذه الحزم أثناء عملية البناء في الإنتاج
- **النتيجة**: حل مشكلة البناء نهائياً على Vercel

## 🔧 خطوات النشر على Vercel

### الطريقة الأولى: عبر Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

### الطريقة الثانية: عبر GitHub Integration
1. ادفع التغييرات إلى GitHub
2. اربط المستودع مع Vercel
3. سيتم النشر تلقائياً

## 📋 متطلبات النشر

### متغيرات البيئة المطلوبة
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
SMTP_HOST=mail.filakaros.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@filakaros.com
SMTP_PASS=your_email_password_here
```

### إعدادات Vercel المطلوبة
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 18.x أو أحدث

## ✅ اختبارات ما قبل النشر

### 1. اختبار البناء المحلي
```bash
npm run build
```

### 2. اختبار ESLint
```bash
npm run lint
```

### 3. اختبار TypeScript
```bash
npx tsc --noEmit
```

## 🔍 استكشاف الأخطاء

### مشاكل شائعة وحلولها

#### 1. خطأ في الاستيرادات
- **المشكلة**: `Module not found` أو `Cannot resolve module`
- **الحل**: تأكد من صحة مسارات الاستيراد في `tsconfig.json`

#### 2. مشاكل الصور
- **المشكلة**: `Invalid src prop`
- **الحل**: تأكد من إعدادات `remotePatterns` في `next.config.js`

#### 3. مشاكل API Routes
- **المشكلة**: `Function timeout`
- **الحل**: تحقق من إعدادات `maxDuration` في `vercel.json`

## 📊 مراقبة الأداء

### مؤشرات مهمة
- **Build Time**: يجب أن يكون أقل من 5 دقائق
- **Bundle Size**: مراقبة حجم الحزم
- **Core Web Vitals**: مراقبة أداء الموقع

### أدوات المراقبة
- Vercel Analytics
- Vercel Speed Insights
- Google PageSpeed Insights

## 🛡️ الأمان

### Headers الأمان المطبقة
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### حماية الملفات الحساسة
- `.env` files محمية
- `src/` directory محمي
- `node_modules/` محمي

## 📞 الدعم

في حالة مواجهة مشاكل:
1. تحقق من logs في Vercel Dashboard
2. راجع هذا الدليل
3. تأكد من تطبيق جميع التحديثات المذكورة

---

**تم إعداد هذا الدليل بواسطة**: Augment Agent  
**تاريخ التحديث**: 2025-08-06  
**إصدار المشروع**: Filakaros Modern v0.1.0
