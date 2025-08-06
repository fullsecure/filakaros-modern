# 🚀 دليل النشر الشامل - موقع IKAROS

## 📋 جدول المحتويات
- [متطلبات النشر](#متطلبات-النشر)
- [التحضير للنشر](#التحضير-للنشر)
- [طرق النشر](#طرق-النشر)
- [إعداد السيرفر](#إعداد-السيرفر)
- [النشر التلقائي](#النشر-التلقائي)
- [المراقبة والصيانة](#المراقبة-والصيانة)
- [استكشاف الأخطاء](#استكشاف-الأخطاء)

---

## 🔧 متطلبات النشر

### متطلبات السيرفر الأساسية:
- **نظام التشغيل:** Ubuntu 20.04+ / CentOS 8+ / Windows Server 2019+
- **Node.js:** الإصدار 18.18.0 أو أحدث
- **الذاكرة (RAM):** 2GB كحد أدنى، 4GB موصى به
- **مساحة التخزين:** 1GB كحد أدنى
- **المعالج:** نواة واحدة كحد أدنى، نواتان موصى بهما

### البرامج المطلوبة:
- Node.js و npm
- PM2 (لإدارة العمليات)
- Nginx (كخادم ويب عكسي)
- SSL Certificate (Let's Encrypt موصى به)

### متطلبات الشبكة:
- منفذ 80 (HTTP)
- منفذ 443 (HTTPS)
- منفذ 3000 (Next.js - داخلي)

---

## 🎯 التحضير للنشر

### 1. فحص المشروع محلياً:
```bash
# تثبيت التبعيات
npm install

# فحص الكود
npm run lint

# بناء المشروع
npm run build

# اختبار التشغيل
npm start
```

### 2. تحديث إعدادات الإنتاج:
```bash
# تحرير ملف البيئة
nano .env.production

# تحديث المتغيرات المطلوبة:
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
SMTP_HOST=mail.yourdomain.com
SMTP_USER=info@yourdomain.com
SMTP_PASS=your_email_password
```

### 3. إنشاء حزمة النشر:

#### على Windows:
```cmd
# تشغيل سكربت التصدير
scripts\export-production.bat
```

#### على Linux/Mac:
```bash
# تشغيل سكربت البناء
chmod +x scripts/build-production.sh
./scripts/build-production.sh
```

---

## 🌐 طرق النشر

### الطريقة الأولى: النشر اليدوي (موصى للمبتدئين)

#### 1. رفع الملفات:
```bash
# رفع حزمة الإنتاج
scp filakaros-production-*.zip user@your-server:~/

# الاتصال بالسيرفر
ssh user@your-server

# فك ضغط الملفات
unzip filakaros-production-*.zip
cd filakaros-production-*
```

#### 2. تثبيت التبعيات:
```bash
# تثبيت Node.js (إذا لم يكن مثبتاً)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# تثبيت PM2
sudo npm install -g pm2

# تثبيت تبعيات المشروع
npm install --production
```

#### 3. تشغيل الموقع:
```bash
# بدء التطبيق
pm2 start ecosystem.config.js

# حفظ إعدادات PM2
pm2 save

# تفعيل التشغيل التلقائي
pm2 startup
```

### الطريقة الثانية: النشر التلقائي

#### على Windows:
```powershell
# تشغيل سكربت النشر
.\scripts\deploy.ps1 -ServerIP "192.168.1.100" -Username "ubuntu"
```

#### على Linux/Mac:
```bash
# تحرير سكربت النشر
nano scripts/deploy.sh

# تشغيل النشر
./scripts/deploy.sh
```

---

## ⚙️ إعداد السيرفر

### 1. إعداد Nginx:

```bash
# إنشاء ملف إعداد Nginx
sudo nano /etc/nginx/sites-available/filakaros
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # إعدادات SSL
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # إعدادات الأمان
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # إعدادات الضغط
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # إعدادات التخزين المؤقت
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    location /images/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # البروكسي الرئيسي
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

```bash
# تفعيل الموقع
sudo ln -s /etc/nginx/sites-available/filakaros /etc/nginx/sites-enabled/

# اختبار الإعداد
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

### 2. إعداد SSL Certificate:

```bash
# تثبيت Certbot
sudo apt install certbot python3-certbot-nginx -y

# الحصول على الشهادة
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# تجديد تلقائي
sudo crontab -e
# إضافة السطر التالي:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

### 3. إعداد Firewall:

```bash
# تفعيل UFW
sudo ufw enable

# السماح بالمنافذ المطلوبة
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 80
sudo ufw allow 443

# عرض الحالة
sudo ufw status
```

---

## 📊 المراقبة والصيانة

### أوامر PM2 المفيدة:

```bash
# عرض حالة التطبيقات
pm2 status

# عرض السجلات
pm2 logs filakaros-website

# مراقبة الأداء
pm2 monit

# إعادة تشغيل التطبيق
pm2 restart filakaros-website

# إيقاف التطبيق
pm2 stop filakaros-website

# حذف التطبيق
pm2 delete filakaros-website
```

### مراقبة النظام:

```bash
# مراقبة استخدام الموارد
htop

# مراقبة مساحة القرص
df -h

# مراقبة الذاكرة
free -h

# مراقبة الشبكة
netstat -tlnp | grep :3000
```

### النسخ الاحتياطية:

```bash
# إنشاء نسخة احتياطية
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/filakaros

# جدولة النسخ الاحتياطية
crontab -e
# إضافة السطر التالي للنسخ الاحتياطي اليومي:
# 0 2 * * * tar -czf /backups/filakaros-$(date +\%Y\%m\%d).tar.gz /var/www/filakaros
```

---

## 🔄 التحديثات

### لتحديث الموقع:

```bash
# إيقاف التطبيق
pm2 stop filakaros-website

# نسخ احتياطية
cp -r /var/www/filakaros /var/www/filakaros-backup-$(date +%Y%m%d)

# رفع الملفات الجديدة
# ... رفع وفك ضغط الملفات الجديدة

# تثبيت التبعيات الجديدة
npm install --production

# بدء التطبيق
pm2 start filakaros-website
```

---

## ❗ استكشاف الأخطاء

### مشاكل شائعة:

#### 1. التطبيق لا يبدأ:
```bash
# فحص السجلات
pm2 logs filakaros-website

# فحص المنفذ
sudo netstat -tlnp | grep :3000

# فحص الصلاحيات
ls -la /var/www/filakaros
```

#### 2. مشاكل الذاكرة:
```bash
# زيادة حد الذاكرة
pm2 start ecosystem.config.js --node-args="--max-old-space-size=2048"
```

#### 3. مشاكل الصلاحيات:
```bash
# إصلاح الصلاحيات
sudo chown -R $USER:$USER /var/www/filakaros
sudo chmod -R 755 /var/www/filakaros
```

#### 4. مشاكل Nginx:
```bash
# فحص إعدادات Nginx
sudo nginx -t

# فحص سجلات Nginx
sudo tail -f /var/log/nginx/error.log

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

#### 5. مشاكل SSL:
```bash
# فحص حالة الشهادة
sudo certbot certificates

# تجديد الشهادة
sudo certbot renew --dry-run
```

---

## 📞 الدعم

### في حالة وجود مشاكل، تحقق من:
- سجلات PM2: `pm2 logs`
- سجلات Nginx: `sudo tail -f /var/log/nginx/error.log`
- سجلات النظام: `sudo journalctl -u nginx`
- حالة الخدمات: `sudo systemctl status nginx`

### معلومات الاتصال:
- **الموقع:** https://filakaros.com
- **Telegram:** https://t.me/ikarosworld
- **Twitter:** https://x.com/IkarosWorld1975

---

**🎉 تهانينا! موقع IKAROS الآن يعمل على السيرفر بنجاح!**
