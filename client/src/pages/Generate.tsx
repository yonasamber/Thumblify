import { useState } from "react";
import { useParams } from "react-router-dom";
import type { IThumbnail } from "../assets/assets";

const Generate = () => {
  const { id } = useParams();
  cont[(title, setTitle)] = useState("");
  cont[(additionalDetails, setAdditionalDetails)] = useState("");
  cont[(thumbnail, seThumbnail)] = useState<IThumbnail>(null);

  return <div></div>;
};

export default Generate;
