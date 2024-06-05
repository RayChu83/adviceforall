export const GRADUAL = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
export const MULTIDIRECTION_SLIDE_VARIANTS = {
  leftHidden: { opacity: 0, x: "-10%" },
  visible: { opacity: 1, x: 0 },
  rightHidden: { opacity: 0, x: "10%" },
};
export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};
export const BLUR_IN = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};
