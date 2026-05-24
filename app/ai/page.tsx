import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const aiProjects = [
  {
    id: 1,
    title: "One image, Full motion",
    thumbnail: "/thumbnails/Gaussian_Houdini.png",
    videoUrl: "https://youtu.be/_5RyjAx2ra0",
    description: `
One image, Full motion using Gaussian splatting with Houdini.
`,
  },
  {
    id: 2,
    title: "LG-Global POV Contents",
    thumbnail: "/thumbnails/LG_AI_V02.jpg",
    videoUrl: "https://www.youtube.com/shorts/hKf5k8ZIu_A",
    description: `
LG-Global POV Series.
`,
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
]

export default function AIPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">AI / R&D</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            AI R&D and New Technology Sandbox.
          </p>

          <ProjectGrid projects={aiProjects} />
        </div>
      </main>
    </div>
  )
}