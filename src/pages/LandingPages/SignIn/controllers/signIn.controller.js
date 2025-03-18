import { signInService } from "../services/signIn.service.js";

export const signInController = {
  login: async (email, password) => {
    // Aquí podrías hacer validaciones simples
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Llama al servicio
    const data = await signInService.login(email, password);
    return data;
  },
};
