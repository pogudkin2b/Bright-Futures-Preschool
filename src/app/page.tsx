'use client';

import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Curriculum from '@/components/Curriculum';
import DailyRoutine from '@/components/DailyRoutine';
import Specialists from '@/components/Specialists';
import Groups from '@/components/Groups';
import Teachers from '@/components/Teachers';
import Montessori from '@/components/Montessori';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Curriculum />
          <DailyRoutine />
          <Specialists />
          <Groups />
          <Teachers />
          <Montessori />
          <Contacts />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
