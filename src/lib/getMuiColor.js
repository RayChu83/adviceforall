export default function getMuiColor() {
  const colors = [
    "primary.light",
    "primary.main",
    "primary.dark",
    "secondary.light",
    "secondary.main",
    "secondary.dark",
    "error.light",
    "error.main",
    "error.dark",
    "warning.light",
    "warning.main",
    "warning.dark",
    "info.light",
    "info.main",
    "info.dark",
    "success.light",
    "success.main",
    "success.dark",
    "",
  ];
  let random = Math.floor(Math.random() * (colors.length + 1));
  return colors[random];
}
