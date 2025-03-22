import { plansService } from "../services/plans.service";

export const plansController = {
  getPlans: async () => {
    try {
      const data = await plansService.getPlans();
      const optionData = await plansService.getOptionsPlans();

      const validOptions = Array.isArray(optionData) ? optionData : [];

      // Mapeamos los datos obtenidos para adaptarlos al formato que necesita el frontend
      const formattedPlans = data.map((plan) => ({
        title: plan.name,
        price: `PEN ${plan.price} por ${plan.duration_days} días`,
        afterPrice: `Después, PEN ${plan.price} por mes`,
        features: plan.benefits ? Object.values(plan.benefits) : [],
        buttonText: "Probar 1 mes por PEN 0",
        buttonGeneral: "Un pago único",
        buttonColor: "#ff80b5",
        descipPlan: plan.description || "Descripción del plan",
        options: validOptions.filter((option) => option.plan_id === plan.id),
      }));

      return formattedPlans;
    } catch (error) {
      console.error("Error in plans controller:", error);
      throw error;
    }
  },
};
