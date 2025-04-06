import { useState, useEffect } from "react";

export default function Page() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("pl") ? "pl" : "en");
  }, []);

  const content = {
    en: {
      title: "SofionAI",
      intro:
        "A philosophical AI companion for deep, thoughtful conversations about meaning, identity, suffering, and the human condition.",
      talk: "Talk to Sofion",
      talkDesc:
        "Ask deep questions and explore existential themes in conversation with an AI philosopher.",
      read: "Read the eBook",
      readDesc:
        "Discover reflective dialogues and space for your own thoughts in 'Conversations with SofionAI'.",
      toChat: "Start Conversation",
      toBook: "View on Amazon",
    },
    pl: {
      title: "SofionAI",
      intro:
        "Filozoficzna sztuczna inteligencja do głębokich, refleksyjnych rozmów o sensie, tożsamości, cierpieniu i ludzkim istnieniu.",
      talk: "Porozmawiaj z Sofionem",
      talkDesc:
        "Zadaj Sofionowi pytania i eksploruj tematy egzystencjalne w rozmowie z filozofem-AI.",
      read: "Przeczytaj eBook",
      readDesc:
        "Poznaj refleksyjne dialogi i przestrzeń do własnych przemyśleń w 'Rozmowach z SofionemAI'.",
      toChat: "Rozpocznij rozmowę",
      toBook: "Zobacz na Amazon",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-12 flex flex-col items-center justify-center gap-8">
      <div className="absolute top-4 right-4">
        <button
          className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
          onClick={() => setLang(lang === "en" ? "pl" : "en")}
        >
          {lang === "en" ? "🇵🇱 PL" : "🇬🇧 EN"}
        </button>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center">{t.title}</h1>
      <p className="text-center text-lg max-w-2xl">{t.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
        <div className="shadow-lg hover:shadow-xl transition duration-300 p-6 text-center border rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">{t.talk}</h2>
          <p className="mb-4">{t.talkDesc}</p>
          <a
            href="https://poe.com/SofionAI"
            target="_blank"
            className="inline-block px-4 py-2 bg-black text-white rounded-lg"
          >
            {t.toChat}
          </a>
        </div>
        <div className="shadow-lg hover:shadow-xl transition duration-300 p-6 text-center border rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">{t.read}</h2>
          <p className="mb-4">{t.readDesc}</p>
          <a
            href="https://www.amazon.com/dp/B0F36QJWG1"
            target="_blank"
            className="inline-block px-4 py-2 border border-black text-black rounded-lg"
          >
            {t.toBook}
          </a>
        </div>
      </div>
    </main>
  );
}
