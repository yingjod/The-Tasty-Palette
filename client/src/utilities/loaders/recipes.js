

export async function getAllRecipes() {
  try {
    const res = await fetch('/api/recipes');
    if (!res.ok) {
      throw new Error('Error fetching recipes');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}
export async function getSingleRecipe(id) {
  try {
    console.log('Fetching recipe with ID:', id);
    const res = await fetch(`/api/recipes/${id}`);
    console.log('Response:', res); // Log the response
    if (!res.ok) {
      throw new Error(`Error fetching recipe with ID ${id}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    throw error;
  }
}

