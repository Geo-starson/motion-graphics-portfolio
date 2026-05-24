import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const lectureProjects = [
  {
    id: 1,
    title: "2026 Houdini HUG",
    thumbnail: "/thumbnails/houdini.png",
    videoUrl: "https://docs.google.com/presentation/d/1N3PsQnH0v3IIQ5u48M2hqFblV5yzym9SIiZiYML9MmE/edit?slide=id.g3e0b3e8f504_1_0#slide=id.g3e0b3e8f504_1_0",
    description: "AI Assisted FX Layout Design",
  },
]

export default function LecturePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Lecture</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Lecture, tutorial, and educational content.
          </p>

          <ProjectGrid projects={lectureProjects} />
        </div>
      </main>
    </div>
  )
}