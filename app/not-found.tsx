"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  // Avoid hydration mismatch by skipping render until translations are ready
  if (!i18n.isInitialized) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        priority={true}
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
      />
      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("notFound.title")}</h1>
        <p className="text-destructive">{t("notFound.description")}</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          {t("notFound.button")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
