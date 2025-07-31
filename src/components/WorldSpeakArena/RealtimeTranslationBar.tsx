import React from 'react';

const RealtimeTranslationBar: React.FC = () => {
  const translations = [
    { lang: '🇪🇸 Spanish', text: 'La libertad de expresión es crucial...' },
    { lang: '🇫🇷 French', text: 'La liberté d’expression est cruciale...' },
    { lang: '🇩🇪 German', text: 'Die Redefreiheit ist entscheidend...' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/70 text-white p-2 z-40 flex flex-col md:flex-row md:justify-around gap-2 text-sm">
      {(translations ?? []).map((t, idx) => (
        <div key={idx} className="truncate">
          <strong>{t.lang}:</strong> {t.text}
        </div>
      ))}
    </div>
  );
};

export default RealtimeTranslationBar;
