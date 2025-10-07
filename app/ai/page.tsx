import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const aiProjects = [
  {
    id: 1,
    title: "BloomXCircle Project Gucci Style",
    thumbnail: "/thumbnails/Gucci.png",
    description: `
BloomXCircle Project Gucci Style MoodBoard Image using Midjourney

Slogan: Made to Be Seen
USP: Fearless Creativity
Core Keywords: Art, Boldness, Unisex
Signature Colors: Green–Red–Green Stripe, Ivory / Beige / Brown tones, Red, Gold
Patterns & Motifs: Flora / Nature / Animal Motifs, Green–Red–Green Stripe, Bamboo
`,
  },
  {
    id: 2,
    title: "BloomXCircle Project Dior Style",
    thumbnail: "/thumbnails/Dior.png",
    description: `
BloomXCircle Project Dior Style MoodBoard Image using Midjourney

Slogan: Born from Dreams
USP: A brand that is as emotional as a dream, yet as precise as architecture.
Core Keywords: Dreamlike, Feminine, Exquisite Precision
Signature Colors: Dior Grey, Trianon Pink, Ivory White, Midnight Navy
Patterns & Motifs: Oblique Monogram, Toile de Jouy
`,
  },
  {
    id: 3,
    title: "BloomXCircle Project D&G Style",
    thumbnail: "/thumbnails/D&G.png",
    description: `
BloomXCircle Project D&G Style MoodBoard Image using Midjourney

Slogan: Light Wears the Dark
USP: Black as Emotion, Gold as Soul
Core Keywords: Contrast and Dramatic Expression, Dual Nature of Identity, Harmony of Tradition and Innovation
Signature Colors: Black, White / Ivory, Gold / Metallic
Patterns & Motifs: Lace Texture, Contrasting Pattern Mix, Gilded Baroque and Jacquard Fabric Motifs
`,
  },

];

export default function AIPage() {
  const featureProjects = aiProjects.filter((p) => [1, 2, 3].includes(p.id));
  const otherProjects = aiProjects.filter((p) => ![1, 2, 3].includes(p.id));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">AI</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            AI R&D and New Technology Sandbox.
          </p>

          {/* ✅ 1~3번: 룩북 스타일 카드 */}
          <div className="space-y-16 mb-20">
            {featureProjects.map((project) => (
              <div
                key={project.id}
                className="relative flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.08)] p-8 backdrop-blur-sm hover:bg-white/10 transition"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full max-w-lg rounded-lg mb-8 shadow-lg"
                />
                <h2 className="text-2xl font-semibold mb-6">{project.title}</h2>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed max-w-2xl mx-auto">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ 나머지 (예: 4번)는 기존 그리드 */}
          <ProjectGrid projects={otherProjects} />
        </div>
      </main>
    </div>
  );
}
