import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { VaultPage } from './pages/VaultPage';
import { VaultLoginPage } from './pages/VaultLoginPage';
import { VaultSetupPreviewPage } from './pages/VaultSetupPreviewPage';
import { VaultDashboardPreviewPage } from './pages/VaultDashboardPreviewPage';
import { VaultHistoryPreviewPage } from './pages/VaultHistoryPreviewPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col font-sans antialiased">
        <Header />
        <CartDrawer />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/mirrors" element={<Shop />} />
            <Route path="/shop/wardrobes" element={<Shop />} />
            <Route path="/shop/vault" element={<Navigate to="/products/the-vault" replace />} />
            <Route path="/mirrors" element={<Shop />} />
            <Route path="/wardrobes" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="/vault/login" element={<VaultLoginPage />} />
            <Route path="/vault/setup-preview" element={<VaultSetupPreviewPage />} />
            <Route path="/vault/dashboard-preview" element={<VaultDashboardPreviewPage />} />
            <Route path="/vault/history-preview" element={<VaultHistoryPreviewPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/savings" element={<Navigate to="/vault" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
