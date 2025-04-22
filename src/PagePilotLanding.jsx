export default function PagePilotLanding() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to PagePilot</h1>
        <p className="text-lg text-gray-700">
          Affordable, modern websites for small businesses. Fully managed. Built to convert.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid gap-8 py-8">
        <div className="bg-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Starter websites from just £250</li>
            <li>Mobile-friendly, SEO-ready pages</li>
            <li>Booking systems, online stores, and more</li>
            <li>Fast turnaround and clean design</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Why PagePilot?</h2>
          <p className="text-gray-700">
            We handle everything — design, setup, hosting, and updates — so you can focus on your business. Whether you're just starting or levelling up, we've got a package to suit.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Let's Build Your Site</h2>
          <p className="text-gray-700 mb-4">
            Drop us a message to get started. We'll guide you through it all.
          </p>
          <a
            href="mailto:info@pagepilotstudio.co.uk"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm py-8">
        &copy; {new Date().getFullYear()} PagePilot – a trading name of Rely Core Ltd
      </footer>
    </div>
  );
}
