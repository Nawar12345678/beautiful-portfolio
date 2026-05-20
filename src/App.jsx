import { HashRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/i18n";
import i18n from "@/i18n/config";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Toaster />
        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;
