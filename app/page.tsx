export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-12 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">SofionAI</h1>
      <p className="text-center text-lg max-w-2xl">
        A philosophical AI companion for deep, thoughtful conversations about meaning, identity, suffering, and the human condition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
        <div className="shadow-lg hover:shadow-xl transition duration-300 p-6 text-center border rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Talk to Sofion</h2>
          <p className="mb-4">Ask deep questions and explore existential themes in conversation with an AI philosopher.</p>
          <a href="https://poe.com/SofionAI" target="_blank" className="inline-block px-4 py-2 bg-black text-white rounded-lg">Start Conversation</a>
        </div>
        <div className="shadow-lg hover:shadow-xl transition duration-300 p-6 text-center border rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Read the eBook</h2>
          <p className="mb-4">Discover reflective dialogues and space for your own thoughts in 'Conversations with SofionAI'.</p>
          <a href="https://www.amazon.com/dp/B0F36QJWG1" target="_blank" className="inline-block px-4 py-2 border border-black text-black rounded-lg">View on Amazon</a>
        </div>
      </div>
    </main>
  )
}
