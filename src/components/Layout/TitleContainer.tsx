import { Box, Stack } from "@mui/material";
import getAlignment from "../../utils/alignement";
import Description from "../Typography/Description";
import Title from "../Typography/Title";

type Props = {
  title: string;
  description: string;
  alignment?: "left" | "center" | "right";
};

const TitleContainer = ({
  title,
  description,
  alignment = "center"
}: Props) => {
  return (
    <Stack spacing={0} alignItems={getAlignment(alignment)}>
      <Title text={title} alignment={alignment} />
      <Box sx={{ width: 326 }}>
        <Description text={description} alignment={alignment} />
      </Box>
    </Stack>
  );
};

export default TitleContainer;
