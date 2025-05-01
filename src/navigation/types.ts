export type RootStackParamList = {
  Tabs: undefined;
  StarshipDetails: {
    id: string;
    starship: {
      name: string;
      url: string;
      model: string;
      consumables?: string;
      manufacturer?: string;
    };
  };
};
