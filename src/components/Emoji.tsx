import React from "react";
import bullsEye from "../assets/bullseys.png";
import { Image } from "@chakra-ui/react";
interface Props {
  rating_top: number;
}
interface Emoji {
  src: string;
  alt: string;
}
const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;

  const emojiIcon: { [key: number]: Emoji } = {
    3: { src: bullsEye, alt: "bullsEye" },
    4: { src: bullsEye, alt: "bullsEye" },
    5: { src: bullsEye, alt: "bullsEye" },
    6: { src: bullsEye, alt: "bullsEye" },
    7: { src: bullsEye, alt: "bullsEye" },
    8: { src: bullsEye, alt: "bullsEye" },
    9: { src: bullsEye, alt: "bullsEye" },
    10: { src: bullsEye, alt: "bullsEye" },
  };
  return (
    <Image {...emojiIcon[rating_top]} boxSize="20px" marginTop="10px"></Image>
  );
};

export default Emoji;
