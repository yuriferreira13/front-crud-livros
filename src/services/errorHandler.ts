export const handleApiError = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = "Erro desconhecido ao processar a requisição.";

    try {
      const errorData = await response.json();

      if (typeof errorData === "object") {
        errorMessage =
          typeof errorData.message === "object" && "message" in errorData.message
            ? errorData.message.message
            : errorData.message || errorData.error || JSON.stringify(errorData);
      }
    } catch {
      errorMessage = response.statusText;
    }

    throw new Error(errorMessage);
  }

  return response.json();
};