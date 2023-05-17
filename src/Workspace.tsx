import { Box, Stack } from "@mui/material";
import Button from "./components/buttons/Button";
import TextField from "./components/fields/TextField";
import TitleContainer from "./components/layouts/TitleContainer";

const Workspace = () => {
  return (
    <Stack spacing={6} alignItems="center">
      <TitleContainer
        title="Bienvenue Victoire !"
        description="Pour commencer, nous allons créer ensemble votre premier Espace de Travail."
        alignment="center"
      />
      <Box sx={{ width: 300 }}>
        <Stack alignItems="flex-end" spacing={2}>
          <TextField
            label="Mon espace de travail"
            placeholder="SuperHeros Limited"
          />
          <TextField
            label="URL de destination"
            placeholder="https://www.weareheroes.com"
          />
          <Button type="submit" label="Valider" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Workspace;
