"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration-safe content after mount
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);

    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    // Persist in cookie so SSR layout reads it
    document.cookie = `i18next=${newLang}; path=/`;
  };

  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      <Globe className="mr-1" />
      {/* Hydration-safe: only show after mount */}
      <span suppressHydrationWarning>
        {mounted ? (i18n.language === "ar" ? "EN" : "AR") : ""}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
