import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        loginTitle: "Login",
        loginSubtitle: "Enter your phone number to continue",
        otpTitle: "Enter OTP",
        otpSubtitle: "Please enter the 6-digit OTP sent to your phone",
        phoneLabel: "Phone Number",
        otpLabel: "OTP Code",
        sendOTP: "Send OTP",
        verify: "Verify OTP",
        changeNumber: "Change phone number",
        invalidPhone: "Phone number must be at least 9 digits",
        invalidOTP: "OTP must be 6 digits",
        otpSent: "OTP has been sent!",
        loginSuccess: "Login successful!",
        welcomeTitle: "Welcome to BabyBoom",
        welcomeSubtitle: "Your maternal health companion",
        welcomeDescription:
          "Securely purchase and store your Health Voucher. Access quality care for you and your baby.",
        nextButton: "Following",
        skipButton: "Pass",
      },
    },
    fr: {
      translation: {
        loginTitle: "Connexion",
        loginSubtitle: "Entrez votre numéro de téléphone pour continuer",
        otpTitle: "Entrer le code OTP",
        otpSubtitle: "Veuillez entrer les 6 chiffres envoyés à votre téléphone",
        phoneLabel: "Numéro de téléphone",
        otpLabel: "Code OTP",
        sendOTP: "Envoyer OTP",
        verify: "Vérifier",
        changeNumber: "Changer le numéro",
        invalidPhone: "Le numéro doit contenir au moins 9 chiffres",
        invalidOTP: "Le code doit avoir 6 chiffres",
        otpSent: "OTP envoyé !",
        loginSuccess: "Connexion réussie !",
        welcomeTitle: "Bienvenue sur BabyBoom",
        welcomeSubtitle: "Votre compagnon de santé maternelle",
        welcomeDescription:
          "Achetez et stockez en toute sécurité votre Bon de Santé. Accédez à des soins de qualité pour vous et votre bébé.",
        nextButton: "Suivant",
        skipButton: "Passer",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
