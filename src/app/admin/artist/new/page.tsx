"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewArtistPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "comedian",
    bio: "",
    shortDescription: "",
    image: "/assets/shows-poster.png",
    cities: [] as string[],
    priceMin: "50000",
    priceMax: "100000",
    specialties: "",
    languages: "",
    experience: "5",
    totalShows: "100",
    rating: "5",
    featured: false,
    verified: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const artistData = {
      name: formData.name,
      category: formData.category,
      bio: formData.bio,
      shortDescription: formData.shortDescription,
      image: formData.image,
      cities: formData.cities,
      priceRange: {
        min: parseInt(formData.priceMin),
        max: parseInt(formData.priceMax),
      },
      specialties: formData.specialties.split(",").map((s) => s.trim()),
      languages: formData.languages.split(",").map((l) => l.trim()),
      experience: parseInt(formData.experience),
      totalShows: parseInt(formData.totalShows),
      rating: parseFloat(formData.rating),
      featured: formData.featured,
      verified: formData.verified,
    };

    const res = await fetch("/api/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Artist created successfully!");
      router.push("/admin");
    } else {
      alert("Error: " + data.error);
    }
    setLoading(false);
  };

  const handleCityToggle = (city: string) => {
    setFormData((prev) => ({
      ...prev,
      cities: prev.cities.includes(city)
        ? prev.cities.filter((c) => c !== city)
        : [...prev.cities, city],
    }));
  };

  const cities = [
    "delhi-ncr",
    "mumbai",
    "bangalore",
    "pune",
    "hyderabad",
    "chennai",
    "kolkata",
    "chandigarh",
    "ahmedabad",
    "jaipur",
  ];

  return (
    <div className="min-h-screen bg-[#f8ddbf] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <Link
            href="/admin"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[#2f0003]/70 hover:text-[#ee0202]"
          >
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-semibold text-[#2f0003]">
            Add New Artist
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#2f0003]/15 bg-white/70 p-8"
        >
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                >
                  <option value="comedian">Comedian</option>
                  <option value="dj-musician">DJ / Musician</option>
                  <option value="motivational-speaker">
                    Motivational Speaker
                  </option>
                  <option value="anchor">Anchor / Emcee</option>
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                Short Description * (Max 200 chars)
              </label>
              <input
                type="text"
                required
                maxLength={200}
                value={formData.shortDescription}
                onChange={(e) =>
                  setFormData({ ...formData, shortDescription: e.target.value })
                }
                className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                Full Biography *
              </label>
              <textarea
                required
                rows={6}
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="w-full rounded-3xl border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
              />
            </div>

            {/* Cities */}
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                Available Cities *
              </label>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => handleCityToggle(city)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      formData.cities.includes(city)
                        ? "bg-[#ee0202] text-[#f8ddbf]"
                        : "border border-[#2f0003]/30 bg-white text-[#2f0003] hover:border-[#ee0202]"
                    }`}
                  >
                    {city.replace(/-/g, " ").toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Minimum Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.priceMin}
                  onChange={(e) =>
                    setFormData({ ...formData, priceMin: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Maximum Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.priceMax}
                  onChange={(e) =>
                    setFormData({ ...formData, priceMax: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>
            </div>

            {/* Specialties & Languages */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Specialties (comma separated) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Stand-up Comedy, Corporate Shows"
                  value={formData.specialties}
                  onChange={(e) =>
                    setFormData({ ...formData, specialties: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Languages (comma separated) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Hindi, English"
                  value={formData.languages}
                  onChange={(e) =>
                    setFormData({ ...formData, languages: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Experience (years) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Total Shows *
                </label>
                <input
                  type="number"
                  required
                  value={formData.totalShows}
                  onChange={(e) =>
                    setFormData({ ...formData, totalShows: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Rating (1-5) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  className="w-full rounded-full border border-[#2f0003]/30 bg-white px-4 py-3 text-sm text-[#2f0003] outline-none focus:border-[#ee0202]"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="h-4 w-4"
                />
                <span className="text-sm text-[#2f0003]">Featured Artist</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.verified}
                  onChange={(e) =>
                    setFormData({ ...formData, verified: e.target.checked })
                  }
                  className="h-4 w-4"
                />
                <span className="text-sm text-[#2f0003]">Verified Profile</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#ee0202] px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-lg transition hover:bg-[#ff2626] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Artist"}
            </button>
            <Link
              href="/admin"
              className="rounded-full border border-[#2f0003]/30 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2f0003] transition hover:bg-[#2f0003] hover:text-[#f8ddbf]"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

