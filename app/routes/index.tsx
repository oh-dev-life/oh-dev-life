import { Box } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/posts");
  }, []);
  return <Box />;
}
