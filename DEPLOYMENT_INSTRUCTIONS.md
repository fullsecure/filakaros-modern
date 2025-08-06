# 🚀 دليل النشر الشامل - مشروع Filakaros

## 📋 **الإجابات المباشرة على أسئلتك**

### ❌ **ما يجب تجنبه:**
- **لا تقم بضغط مجلد المشروع بالكامل ورفعه!**
- لا ترفع مجلد `node_modules` (حجمه كبير وغير ضروري)
- لا ترفع ملفات التطوير مثل `.git/` و `src/` بعد البناء

### ✅ **أفضل طريقة للنشر:**

## 🎯 **الطريقة الأولى: النشر المحسن (الموصى بها)**

### **1. متطلبات السيرفر:**
```bash
# Node.js الإصدار المطلوب
Node.js: 18.18.0+ (موصى به: 20.x)
npm: 9.0.0+
الذاكرة: 2GB+ (موصى به: 4GB)
مساحة التخزين: 1GB+
```

### **2. خطوات التحضير المحلي:**
```bash
# 1. فحص الكود
npm run lint

# 2. بناء المشروع للإنتاج
npm run build

# 3. اختبار البناء محلياً
npm run start
```

### **3. الملفات المطلوبة للنشر:**
```
📁 حزمة النشر تحتوي على:
├── .next/                 # ملفات البناء (مطلوبة)
├── public/               # الملفات العامة (مطلوبة)
├── package.json          # معلومات المشروع (مطلوبة)
├── package-lock.json     # قفل التبعيات (مطلوبة)
├── next.config.ts        # إعدادات Next.js (مطلوبة)
├── .env.production       # متغيرات البيئة (مطلوبة)
└── ecosystem.config.js   # إعدادات PM2 (مطلوبة)
```

### **4. الملفات المستبعدة:**
```
❌ لا ترفع هذه الملفات:
├── node_modules/         # سيتم تثبيتها على السيرفر
├── .next/cache/          # ذاكرة التخزين المؤقت
├── src/                  # الكود المصدري (غير مطلوب بعد البناء)
├── .git/                 # تاريخ Git
├── logs/                 # ملفات السجلات
├── *.log                 # ملفات السجلات
├── .env.local            # متغيرات التطوير
├── .env.development      # متغيرات التطوير
├── tsconfig.tsbuildinfo  # ملفات البناء المؤقتة
└── coverage/             # تقارير الاختبارات
```

## 🔧 **خطوات النشر على السيرفر:**

### **الخطوة 1: تحضير السيرفر**
```bash
# تثبيت Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# تثبيت PM2
sudo npm install -g pm2

# تثبيت Nginx
sudo apt update
sudo apt install nginx
```

### **الخطوة 2: رفع الملفات**
```bash
# إنشاء مجلد المشروع
sudo mkdir -p /var/www/filakaros
sudo chown $USER:$USER /var/www/filakaros

# رفع حزمة النشر (استخدم SCP أو FTP)
scp -r deployment-package/* user@server:/var/www/filakaros/
```

### **الخطوة 3: تثبيت التبعيات**
```bash
cd /var/www/filakaros
npm ci --only=production
```

### **الخطوة 4: إعداد متغيرات البيئة**
```bash
# إنشاء ملف .env.production
cat > .env.production << EOF
NODE_ENV=production
PORT=3000
# أضف متغيرات البيئة الخاصة بك هنا
EOF
```

### **الخطوة 5: تشغيل المشروع**
```bash
# تشغيل باستخدام PM2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

## 🌐 **إعداد Nginx (اختياري لكن موصى به)**

### **إنشاء ملف إعداد Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🚀 **الطريقة الثانية: النشر باستخدام Git**

### **1. على السيرفر:**
```bash
# استنساخ المشروع
git clone https://github.com/your-username/filakaros-modern.git
cd filakaros-modern

# تثبيت التبعيات
npm ci

# بناء المشروع
npm run build

# تشغيل المشروع
pm2 start ecosystem.config.js --env production
```

### **2. للتحديثات المستقبلية:**
```bash
git pull origin main
npm ci
npm run build
pm2 restart filakaros-modern
```

## 📊 **مراقبة الأداء:**
```bash
# مراقبة العمليات
pm2 monit

# عرض السجلات
pm2 logs

# إعادة تشغيل
pm2 restart filakaros-modern

# إيقاف
pm2 stop filakaros-modern
```

## 🔒 **نصائح الأمان:**
1. استخدم HTTPS دائماً
2. قم بتحديث Node.js بانتظام
3. استخدم firewall لحماية المنافذ
4. قم بعمل نسخ احتياطية منتظمة
5. راقب استخدام الموارد

## 🆘 **استكشاف الأخطاء الشائعة:**

### **خطأ: "Module not found"**
```bash
# حل: إعادة تثبيت التبعيات
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **خطأ: "Port already in use"**
```bash
# حل: تغيير المنفذ أو إيقاف العملية
pm2 stop all
pm2 start ecosystem.config.js --env production
```

### **خطأ: "Permission denied"**
```bash
# حل: تصحيح الصلاحيات
sudo chown -R $USER:$USER /var/www/filakaros
chmod -R 755 /var/www/filakaros
```

---

## 📞 **الدعم:**
إذا واجهت أي مشاكل، تحقق من:
1. سجلات PM2: `pm2 logs`
2. سجلات Nginx: `sudo tail -f /var/log/nginx/error.log`
3. حالة العمليات: `pm2 status`
