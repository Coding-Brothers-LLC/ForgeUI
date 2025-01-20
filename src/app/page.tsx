export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-lg font-bold mb-4 text-center">
            Color Palette Showcase
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-forge-primary text-forge-off-white text-center">
              Forge Primary
              <br />
              #FF4500
            </div>
            <div className="p-4 rounded bg-forge-background text-forge-off-white text-center">
              Forge Background
              <br />
              #1B1B1D
            </div>
            <div className="p-4 rounded bg-forge-accent-charcoal text-forge-light-gray text-center">
              Forge Charcoal
              <br />
              #2C2C2E
            </div>
            <div className="p-4 rounded bg-forge-secondary text-forge-background text-center">
              Forge Secondary
              <br />
              #FFA500
            </div>
            <div className="p-4 rounded bg-forge-accent-steel text-forge-off-white text-center">
              Forge Steel
              <br />
              #5A5A5D
            </div>
            <div className="p-4 rounded bg-forge-light-gray text-forge-background text-center">
              Forge Light Gray
              <br />
              #E5E5E7
            </div>
            <div className="p-4 rounded bg-forge-off-white text-forge-background text-center">
              Forge Off White
              <br />
              #F2F2F2
            </div>
          </div>
        </section>

        {/* Color Showcase Section */}
        <section className="w-full mt-12">
          <h2 className="text-center text-2xl font-bold mb-10">
            ForgeUI.io Colors in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-forge-primary text-forge-off-white shadow-lg shadow-forge-primary/50">
              <h2 className="text-2xl font-bold mb-2">Primary Accent</h2>
              <p className="text-sm">
                This is the primary forge color. Use it for buttons, links, or
                highlights.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-forge-accent-charcoal text-forge-light-gray shadow-lg shadow-forge-accent-steel/50">
              <h2 className="text-2xl font-bold mb-2">Charcoal Gray</h2>
              <p className="text-sm">
                A versatile background color for cards or containers.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-forge-secondary text-forge-background shadow-lg shadow-forge-secondary/50">
              <h2 className="text-2xl font-bold mb-2">Secondary Accent</h2>
              <p className="text-sm">
                Use sparingly for attention-grabbing elements like hover effects
                or alerts.
              </p>
            </div>
            <div className="p-6 col-span-full text-center">
              <h2 className="text-2xl font-bold mb-6">Interactive Buttons</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-forge-primary text-forge-off-white px-6 py-3 rounded shadow-lg shadow-forge-primary/50 hover:bg-forge-secondary transition">
                  Primary Button
                </button>
                <button className="bg-forge-accent-charcoal text-forge-light-gray px-6 py-3 rounded shadow-lg shadow-forge-accent-steel/50 hover:bg-forge-background hover:text-forge-off-white transition">
                  Secondary Button
                </button>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-forge-primary to-forge-secondary text-forge-off-white shadow-lg shadow-forge-primary/50">
              <h2 className="text-2xl font-bold mb-2">Gradient Effect</h2>
              <p className="text-sm">
                A dynamic gradient combining the primary accent and secondary
                accent for unique backgrounds.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-forge-background border-2 border-forge-border text-forge-light-gray shadow-lg shadow-forge-border/50">
              <h2 className="text-2xl font-bold mb-2">Text and Borders</h2>
              <p className="text-sm">
                Combine neutral borders and light gray text for subtle effects.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
