import type { BaseLocal } from "~base/locales/en";

export const ar: BaseLocal = {
  signIn: "تسجيل الدخول",
  userName: "اسم المستخدم",
  password: "كلمة السر",
  continue: "متابعة",
  successfullyLoggedIn: "تم تسجيل الدخول بنجاح",
  errorLoggedIn: " عذراً , تم  ادخال اسم المستخدم او كلمة السر بشكل خاطىء ",
  welcome: " اهلاً و سهلاً",
  tryAgain: "حاول مجدداً",
  forgotPassword: "هل نسيت كلمة السر ؟",
  enterYourEmailToResetYourPassword:
    "أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك",
  theEmailYouEnteredDoesNotExist: "البريد الالكتروني الذي ادخلته غير مستخدم",
  fieldRequired: "الحقل مطلوب",
  submitting: "يتم الارسال...",
  commonValidationMessage: "حدثت أخطاء في التحقق من صحة الدخل",
  okGotIt: "هيا بنا",
  add: "اضافة",
  noDataFound: "لا توجد بيانات",
  confirmDeleteTitle: "هل انت متأكد من انك تريد حذف هذا العنصر؟",
  defaultCancel: "لا, ألغ الأمر",
  defaultConfirmation: "نعم, متأكد",
} as const;
