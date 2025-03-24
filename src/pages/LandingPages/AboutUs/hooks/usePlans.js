import { useState, useEffect } from "react";
import { plansController } from "../controllers/plans.controller";

export default function usePlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //para options de planes
  const [openModal, setOpenModal] = useState(false);
  const [modalOptions, useModalOptions] = useState([]);
  const [selectedPlanName, useSelectedPlanName] = useState("");

  const handleOpenModal = (options, planName) => {
    const validOptions = Array.isArray(options) ? options : [];
    setOpenModal(true);
    useModalOptions(validOptions);
    useSelectedPlanName(planName);
  };
  // Cerrar el modal
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await plansController.getPlans();
        setPlans(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []); // Se ejecuta solo una vez al montar el componente
  return {
    plans,
    loading,
    error,
    openModal,
    modalOptions,
    handleOpenModal,
    handleCloseModal,
    selectedPlanName,
  };
}
// Lógica si es necesario, como funciones para actualizar los planes, etc.
