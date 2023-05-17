import { Stack } from "@mui/material";
import TextField from "./components/Fields/TextField";
import TitleContainer from "./components/Layout/TitleContainer";

const Workspace = () => {
  return (
    <Stack spacing={6}>
      <TitleContainer
        title="Bienvenue Victoire !"
        description="Pour commencer, nous allons créer ensemble votre premier Espace de Travail."
        alignment="center"
      />
      <Stack alignItems="center" spacing={4}>
        <TextField
          label="Mon espace de travail"
          placeholder="SuperHeros Limited"
        />
        <TextField
          label="URL de destination"
          placeholder="https://www.weareheroes.com"
        />
      </Stack>
    </Stack>
  );
};

export default Workspace;
