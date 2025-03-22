import { API_ROUTES } from "config/config";

export const plansService = {
  getPlans: async () => {
    try {
      const response = await fetch(API_ROUTES.PLANS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Token de autorización si es necesario
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch plans");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching plans:", error);
      throw error;
    }
  },
  getOptionsPlans: async () => {
    try {
      const response = await fetch(API_ROUTES.OPTIONSPLANS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Token de autorización si es necesario
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch options plans");
      }

      const data = await response.json();

      // Verificar que los datos son un array antes de devolverlos
      if (!Array.isArray(data)) {
        throw new Error("Expected an array for options plans");
      }

      return data; // Devolver los datos si es un array
    } catch (error) {
      console.error("Error fetching options plans:", error);
      throw new Error(`Error fetching options plans: ${error.message}`); // Mejor manejo de errores
    }
  },
};
