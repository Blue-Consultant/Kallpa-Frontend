import { API_ROUTES } from "config/config";

export const signInService = {
  login: async (email, password) => {
    try {
      const response = await fetch(API_ROUTES.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Se captura el error que retorna el backend
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in login service:", error);
      throw error; // Se vuelve a lanzar el error para que el controlador pueda manejarlo
    }
  },
};
