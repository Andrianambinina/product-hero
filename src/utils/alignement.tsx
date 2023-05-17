const getAlignment = (
  alignment: "left" | "center" | "right"
): "flex-start" | "flex-end" | "center" => {
  if (alignment === "left") {
    return "flex-start";
  }
  if (alignment === "right") {
    return "flex-end";
  }

  return "center";
};

export default getAlignment;
