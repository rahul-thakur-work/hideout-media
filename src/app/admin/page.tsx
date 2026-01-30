"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Artist {
  _id: string;
  name: string;
  slug: string;
  category: string;
  cities: string[];
  priceRange: { min: number; max: number };
  rating: number;
  totalShows: number;
  featured: boolean;
  verified: boolean;
}

export default function AdminPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [filter, setFilter] = useState({ category: "", city: "" });

  useEffect(() => {
    fetchArtists();
  }, [filter]);

  const fetchArtists = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filter.category) params.append("category", filter.category);
    if (filter.city) params.append("city", filter.city);

    const res = await fetch(`/api/artists?${params.toString()}`);
    const data = await res.json();
    if (data.success) {
      setArtists(data.data);
    }
    setLoading(false);
  };

  const handleSeedDatabase = async () => {
    if (!confirm("This will reset all data and seed the database. Continue?"))
      return;

    setSeeding(true);
    const res = await fetch("/api/seed");
    const data = await res.json();

    if (data.success) {
      alert("Database seeded successfully!");
      fetchArtists();
    } else {
      alert("Error: " + data.error);
    }
    setSeeding(false);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this artist?")) return;

    const res = await fetch(`/api/artists/${slug}`, { method: "DELETE" });
    const data = await res.json();

    if (data.success) {
      alert("Artist deleted successfully!");
      fetchArtists();
    } else {
      alert("Error: " + data.error);
    }
  };

  const categoryDisplay: Record<string, string> = {
    comedian: "Comedian",
    "dj-musician": "DJ/Musician",
    "motivational-speaker": "Speaker",
    anchor: "Anchor",
  };

  return (
    <div className="min-h-screen bg-[#f8ddbf] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#2f0003]">
              Admin Panel
            </h1>
            <p className="mt-2 text-sm text-[#2f0003]/70">
              Manage artists, cities, and categories
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-full border border-[#2f0003]/30 bg-white/70 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003] transition hover:bg-[#2f0003] hover:text-[#f8ddbf]"
            >
              ← Back to Site
            </Link>
            <button
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="rounded-full bg-[#ee0202] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] transition hover:bg-[#ff2626] disabled:opacity-50"
            >
              {seeding ? "Seeding..." : "Seed Database"}
            </button>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="mb-6 rounded-3xl border border-[#2f0003]/15 bg-white/70 p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/admin/artist/new"
              className="rounded-full bg-[#2f0003] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] transition hover:bg-black"
            >
              + Add New Artist
            </Link>

            <div className="flex flex-1 flex-wrap gap-3">
              <select
                value={filter.category}
                onChange={(e) =>
                  setFilter({ ...filter, category: e.target.value })
                }
                className="rounded-full border border-[#2f0003]/30 bg-white px-4 py-2 text-xs text-[#2f0003] outline-none transition focus:border-[#ee0202]"
              >
                <option value="">All Categories</option>
                <option value="comedian">Comedians</option>
                <option value="dj-musician">DJs & Musicians</option>
                <option value="motivational-speaker">Speakers</option>
                <option value="anchor">Anchors</option>
              </select>

              <select
                value={filter.city}
                onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                className="rounded-full border border-[#2f0003]/30 bg-white px-4 py-2 text-xs text-[#2f0003] outline-none transition focus:border-[#ee0202]"
              >
                <option value="">All Cities</option>
                <option value="delhi-ncr">Delhi NCR</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
              </select>

              {(filter.category || filter.city) && (
                <button
                  onClick={() => setFilter({ category: "", city: "" })}
                  className="rounded-full border border-[#2f0003]/30 bg-white px-4 py-2 text-xs text-[#2f0003] transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-[#2f0003]/15 bg-gradient-to-br from-[#ee0202] to-[#2f0003] p-6 text-[#f8ddbf]">
            <p className="mb-2 text-2xl font-bold">{artists.length}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f8ddbf]/80">
              Total Artists
            </p>
          </div>
          <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6">
            <p className="mb-2 text-2xl font-bold text-[#2f0003]">
              {artists.filter((a) => a.featured).length}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#2f0003]/70">
              Featured
            </p>
          </div>
          <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6">
            <p className="mb-2 text-2xl font-bold text-[#2f0003]">
              {artists.filter((a) => a.verified).length}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#2f0003]/70">
              Verified
            </p>
          </div>
          <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6">
            <p className="mb-2 text-2xl font-bold text-[#2f0003]">
              {artists.reduce((acc, a) => acc + a.totalShows, 0)}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#2f0003]/70">
              Total Shows
            </p>
          </div>
        </div>

        {/* Artists Table */}
        <div className="rounded-3xl border border-[#2f0003]/15 bg-white/70 p-6">
          <h2 className="mb-4 text-lg font-semibold text-[#2f0003]">
            All Artists
          </h2>

          {loading ? (
            <div className="py-12 text-center text-sm text-[#2f0003]/70">
              Loading...
            </div>
          ) : artists.length === 0 ? (
            <div className="py-12 text-center">
              <p className="mb-4 text-sm text-[#2f0003]/70">
                No artists found. Seed the database to get started.
              </p>
              <button
                onClick={handleSeedDatabase}
                className="rounded-full bg-[#ee0202] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] transition hover:bg-[#ff2626]"
              >
                Seed Database
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-[#2f0003]/10 text-left">
                  <tr>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Name
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Category
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Cities
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Price Range
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Rating
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Status
                    </th>
                    <th className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f0003]/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {artists.map((artist) => (
                    <tr
                      key={artist._id}
                      className="border-b border-[#2f0003]/5 hover:bg-[#f8ddbf]/50"
                    >
                      <td className="py-4">
                        <Link
                          href={`/artist/${artist.slug}`}
                          className="font-semibold text-[#2f0003] hover:text-[#ee0202]"
                        >
                          {artist.name}
                        </Link>
                      </td>
                      <td className="py-4 text-[#2f0003]/70">
                        {categoryDisplay[artist.category]}
                      </td>
                      <td className="py-4 text-[#2f0003]/70">
                        {artist.cities.length} cities
                      </td>
                      <td className="py-4 text-[#2f0003]/70">
                        ₹{(artist.priceRange.min / 1000).toFixed(0)}k - ₹
                        {(artist.priceRange.max / 1000).toFixed(0)}k
                      </td>
                      <td className="py-4">
                        <span className="flex items-center gap-1 text-[#ee0202]">
                          {artist.rating} ⭐
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          {artist.featured && (
                            <span className="rounded-full bg-[#ee0202] px-2 py-1 text-[10px] font-semibold text-[#f8ddbf]">
                              Featured
                            </span>
                          )}
                          {artist.verified && (
                            <span className="rounded-full bg-green-500 px-2 py-1 text-[10px] font-semibold text-white">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/artist/edit/${artist.slug}`}
                            className="rounded-full bg-[#2f0003] px-3 py-1 text-[10px] font-semibold text-[#f8ddbf] transition hover:bg-black"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(artist.slug)}
                            className="rounded-full border border-red-500 px-3 py-1 text-[10px] font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

