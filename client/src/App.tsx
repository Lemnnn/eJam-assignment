import { useEffect, useState } from "react";
import AddInput from "./components/AddInput";
import { getAllSuperheroes, createSuperhero } from "./api/superheroAPI";

type Hero = {
  id: number;
  name: string;
  power: string;
  humility: number;
};

function App() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humility, setHumility] = useState("");
  const [superheroes, setSuperheroes] = useState<Hero[]>([]);
  const [loadingHeroes, setLoadingHeroes] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const limit = 5;

  const fetchSuperheroes = async () => {
    setLoadingHeroes(true);
    try {
      const response = await getAllSuperheroes(page, limit);
      console.log("API Response:", response);

      setSuperheroes(response.data);

      const totalItems = response.total;
      const totalPages = Math.ceil(totalItems / limit);
      setHasMore(page < totalPages);
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to load superheroes");
    } finally {
      setLoadingHeroes(false);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, [page]);

  const handleAddSuperhero = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !superpower || !humility) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const newHero = {
        name,
        power: superpower,
        humility: Number(humility),
      };

      await createSuperhero(newHero);
      console.log("Superhero created:", newHero);

      setName("");
      setSuperpower("");
      setHumility("");

      fetchSuperheroes();
    } catch (error) {
      console.error("Error creating superhero:", error);
      setErrorMessage("Failed to create superhero");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold mb-6">Superheroes</h1>

      <form
        className="flex flex-col md:flex-row items-center justify-center gap-5 mb-6"
        onSubmit={handleAddSuperhero}
      >
        <AddInput
          label="Superhero Name"
          placeholder="e.g Hulk..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AddInput
          label="Superpower"
          placeholder="e.g Superstrength..."
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <AddInput
          label="Humility Score"
          type="number"
          placeholder="1-10"
          min={1}
          max={10}
          value={humility}
          onChange={(e) => setHumility(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-10 py-2 rounded-2xl mt-8"
        >
          Add Superhero
        </button>
      </form>

      {loadingHeroes && <p>Loading superheroes...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {!loadingHeroes && superheroes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Power</th>
                <th className="border border-gray-300 px-4 py-2">Humility</th>
              </tr>
            </thead>
            <tbody>
              {superheroes.map((hero) => (
                <tr key={hero.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {hero.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hero.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hero.power}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {hero.humility}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loadingHeroes && <p>No superheroes found.</p>
      )}

      <div className="flex justify-center mt-4 gap-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            page > 1
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            hasMore
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasMore}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
