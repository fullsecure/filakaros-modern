
let scriptPromise: Promise<void> | null = null;

export const loadGoogleTranslateScript = (): Promise<void> => {
  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise((resolve, reject) => {
    // If script is already loaded or loading, resolve immediately
    if (window.googleTranslateScriptLoaded) {
      resolve();
      return;
    }

    // Create the container if it doesn't exist
    if (!document.getElementById('google_translate_element')) {
      const container = document.createElement('div');
      container.id = 'google_translate_element';
      container.style.display = 'none';
      document.body.appendChild(container);
    }

    // Define the callback function
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement && !window.googleTranslateInitialized) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ar,fr,es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true,
            },
            'google_translate_element'
          );
          window.googleTranslateInitialized = true;
          console.log('✅ Google Translate Initialized');
          resolve();
        } else if (window.googleTranslateInitialized) {
          // If already initialized, just resolve
          resolve();
        } else {
          reject(new Error('Google Translate API not available on callback.'));
        }
      } catch (error) {
        console.error('❌ Error initializing Google Translate:', error);
        reject(error);
      }
    };

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = (error) => {
      console.error('❌ Failed to load Google Translate script:', error);
      window.googleTranslateScriptLoaded = false; // Reset flag on error
      scriptPromise = null; // Allow retrying
      reject(new Error('Failed to load translation script.'));
    };
    
    document.head.appendChild(script);
    window.googleTranslateScriptLoaded = true;
  });

  return scriptPromise;
};
