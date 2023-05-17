import { Stack } from "@mui/material";
import TextField from "./components/Fields/TextField";
import TitleContainer from "./components/Layout/TitleContainer";

const Workspace = () => {
  return (
    <Stack spacing={3}>
      <TitleContainer
        title="Bienvenue Victoire !"
        description="Pour commencer, nous allons créer ensemble votre premier Espace de Travail."
        alignment="center"
      />
      <Stack alignItems="center">
        <TextField
          label="Mon espace de travail"
          placeholder="SuperHeros Limited"
        />
      </Stack>
    </Stack>
  );
};

export default Workspace;
