const API_URL = "http://localhost:3000/superheroes";

export const getAllSuperheroes = async (page: number, limit: number) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error("Failed to fetch superheroes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    throw error;
  }
};

export const createSuperhero = async (heroData: {
  name: string;
  power: string;
  humility: number;
}) => {
  const response = await fetch("http://localhost:3000/superheroes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(heroData),
  });

  if (!response.ok) {
    throw new Error("Failed to create superhero");
  }

  return response.json();
};
