import { createContext, useState, useContext } from "react";

// 1. إنشاء السياق
const ThemeContext = createContext(undefined);

// 2. بناء المزوّد (Provider) الذي سيغلف التطبيق
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // الوضع الافتراضي هو الفاتح

  // دالة ذكية لعكس الثيم الحالي
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // نمرر الثيم والدالة ككائن (Object) داخل الـ value
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook مخصص لسهولة استهلاك الثيم في أي مكون لاحقاً
export const useTheme = () => useContext(ThemeContext);