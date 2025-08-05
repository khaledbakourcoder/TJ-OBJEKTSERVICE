import React from "react";

export const metadata = {
  title: "Kontakt – TJ Objekt Services",
  description: "Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage!",
};

export default function KontaktPage() {
  return (
    <main className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-8">
          Kontaktformular
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Sie haben Fragen oder möchten ein Angebot? Füllen Sie einfach das folgende Formular aus –
          wir melden uns schnellstmöglich bei Ihnen.
        </p>

        <form className="space-y-6">
          {/* Leistungsauswahl */}
          <div>
            <label htmlFor="leistung" className="block text-sm font-medium text-gray-700">
              Gewünschte Leistung <span className="text-red-500">*</span>
            </label>
            <select
              id="leistung"
              name="leistung"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
            >
              <option value="">Bitte wählen</option>
              <option>Gebäudereinigung</option>
              <option>Gartenpflege</option>
              <option>Hausmeisterdienste</option>
            </select>
          </div>

          {/* Vorname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="vorname" className="block text-sm font-medium text-gray-700">
                Vorname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="vorname"
                name="vorname"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
              />
            </div>

            {/* Nachname */}
            <div>
              <label htmlFor="nachname" className="block text-sm font-medium text-gray-700">
                Nachname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nachname"
                name="nachname"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
              />
            </div>
          </div>

          {/* E-Mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-Mail-Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
            />
          </div>

          {/* Telefonnummer (optional) */}
          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
              Telefonnummer (optional)
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
            />
          </div>

          {/* Nachricht */}
          <div>
            <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700">
              Ihre Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-priborder-primary"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-priborder-primary hover:bg-priborder-primary/90 text-white font-bold py-2 px-6 rounded-md transition"
            >
              Anfrage absenden
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
