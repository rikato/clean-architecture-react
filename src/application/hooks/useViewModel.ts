import { useState } from "react";

export const useViewModel = <T>(create: () => T) => {
  const [viewModel] = useState(() => create());

  return { viewModel };
};
