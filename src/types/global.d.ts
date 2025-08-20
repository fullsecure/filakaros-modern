declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
    googleTranslateScriptLoaded?: boolean;
    googleTranslateInitialized?: boolean;
  }
}

// This export is necessary to make the file a module and allow global augmentation.
export {};
