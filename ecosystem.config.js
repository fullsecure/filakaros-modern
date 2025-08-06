// ===== إعداد PM2 لموقع IKAROS =====
// PM2 Configuration for Filakaros Website

module.exports = {
  apps: [{
    // ===== إعدادات التطبيق الأساسية =====
    name: 'filakaros-website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: process.cwd(),
    
    // ===== إعدادات الأداء =====
    instances: 'max', // استخدام جميع المعالجات المتاحة
    exec_mode: 'cluster', // وضع العنقود للأداء الأفضل
    
    // ===== متغيرات البيئة =====
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: 1
    },
    
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: 1
    },
    
    env_development: {
      NODE_ENV: 'development',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: 1
    },
    
    // ===== إعدادات السجلات =====
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // ===== إعدادات الذاكرة والأداء =====
    max_memory_restart: '1G', // إعادة تشغيل عند تجاوز 1GB
    node_args: '--max-old-space-size=1024', // حد الذاكرة لـ Node.js
    
    // ===== إعدادات المراقبة =====
    watch: false, // تعطيل المراقبة في الإنتاج
    ignore_watch: [
      'node_modules',
      '.next',
      'logs',
      '.git',
      'public'
    ],
    
    // ===== إعدادات إعادة التشغيل =====
    restart_delay: 4000, // تأخير 4 ثوان قبل إعادة التشغيل
    max_restarts: 10, // حد أقصى 10 إعادات تشغيل
    min_uptime: '10s', // الحد الأدنى لوقت التشغيل
    
    // ===== إعدادات الشبكة =====
    listen_timeout: 8000,
    kill_timeout: 5000,
    
    // ===== إعدادات إضافية =====
    autorestart: true, // إعادة تشغيل تلقائية
    vizion: false, // تعطيل مراقبة Git
    
    // ===== معلومات إضافية =====
    merge_logs: true,
    combine_logs: true,
    
    // ===== إعدادات التطوير (للاختبار المحلي) =====
    env_dev: {
      NODE_ENV: 'development',
      PORT: 3000,
      WATCH: true
    }
  }],
  
  // ===== إعدادات النشر (اختيارية) =====
  deploy: {
    production: {
      user: 'deploy',
      host: ['your-server.com'],
      ref: 'origin/main',
      repo: 'git@github.com:filakaros/website.git',
      path: '/var/www/filakaros',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'apt update && apt install git -y'
    }
  }
};
