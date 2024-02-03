import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import Addicon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../state/state";
import { useNavigate } from "react-router-dom";

const Item = ({
  name,
  price,
  shortDescription,
  longDescription,
  id,
  category,
  image,
}) => {
  console.log(name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  //   const {
  // palette: { neutral },
  //   } = useTheme();

  return (
    <Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          onClick={() => navigate(`/item/${id}`)}
          src={`http://localhost:8000/uploads/images/${image}`}
          width="300px"
          height="400px"
          alt={name}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              bgcolor="#f5f5f5"
              borderRadius="3px"
            >
              <IconButton
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon />
              </IconButton>

              <Typography color="#666666">{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Addicon />
              </IconButton>
            </Box>

            <Button
              // onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: "#666666", color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color="#7c7b7b">
          {category
            .replace(/([A-Z])/g, "$1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
