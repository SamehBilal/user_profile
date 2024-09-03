"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function GoogleCaptchaWrapper({ children, }) {
//   const recaptchaKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaKey = "6Ld1uQsqAAAAAJNh3pDWzOFgXt6E4KSUNL5yaUMP"
  // console.log('recaptchaKey', recaptchaKey)
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}