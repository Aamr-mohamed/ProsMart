// import React, { useEffect, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import Item from "../../components/item";
// import { Typography } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useDispatch, useSelector } from "react-redux";
// // import { RootState, setItems } from "../../state/state";

// const ShoppingList = () => {
//   const dispatch = useDispatch();
//   const [value, setValue] = useState("all");
//   // const items = useSelector((state: RootState) => state.cart.items);
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   console.log("🚀 ~ ShoppingList ~ items:", items);
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   async function getItems() {
//     try {
//       setIsLoading(true);
//       const items = await fetch("http://localhost:8000/getItems/all", {
//         method: "GET",
//       });
//       const itemsJson = await items.json();
//       console.log("🚀 ~ getItems ~ itemsJson:", itemsJson);
//       // dispatch(setItems(itemsJson.data));
//       setItems(itemsJson.data);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     getItems();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   // categories
//   const topRatedItems = items?.filter(
//     (item) => item.category === "topRated" || []
//   );
//   const newArrivalsItems = items?.filter(
//     (item) => item.category === "newArrivals" || []
//   );
//   const bestSellersItems = items?.filter(
//     (item) => item.category === "bestSellers" || []
//   );

//   return (
//     <Box width="80%" margin="80px auto">
//       <Typography variant="h3" textAlign="center">
//         Our Featured <b>Products</b>
//       </Typography>
//       <Tabs
//         textColor="primary"
//         indicatorColor="primary"
//         value={value}
//         onChange={handleChange}
//         centered
//         TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
//         sx={{
//           m: "25px",
//           "& .MuiTabs-flexContainer": {
//             flexWrap: "wrap",
//           },
//         }}
//       >
//         <Tab label="ALL" value="all" />
//         <Tab label="NEW ARRIVALS" value="newArrivals" />
//         <Tab label="BEST SELLERS" value="bestSellers" />
//         <Tab label="TOP RATED" value="topRated" />
//       </Tabs>
//       <Box
//         margin="0 auto"
//         display="grid"
//         gridTemplateColumns="repeat(auto-fill, 300px)"
//         justifyContent="space-around"
//         rowGap="20px"
//         columnGap="1.33%"
//       >
//         {isLoading && <p>Loading...</p>}
//         {!isLoading &&
//           (value === "all"
//             ? items.map((item) => (
//                 <Item item={item} key={`${item.name}-${item.id}`} />
//               ))
//             : value === "newArrivals"
//             ? newArrivalsItems.map((item) => (
//                 <Item item={item} key={`${item.name}-${item.id}`} />
//               ))
//             : value === "bestSellers"
//             ? bestSellersItems.map((item) => (
//                 <Item item={item} key={`${item.name}-${item.id}`} />
//               ))
//             : value === "topRated"
//             ? topRatedItems.map((item) => (
//                 <Item item={item} key={`${item.name}-${item.id}`} />
//               ))
//             : null)}
//       </Box>
//     </Box>
//   );
// };

// export default ShoppingList;
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ShoppingList = () => {
  const [value, setValue] = useState("all");
  const [items, setItems] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    try {
      const itemsResponse = await fetch("http://localhost:8000/getItems/all", {
        method: "GET",
      });
      const itemsJson = await itemsResponse.json();

      setItems(itemsJson);
      console.log(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  console.log(items);
  useEffect(() => {
    getItems();
  }, []);

  // categories
  const topRatedItems =
    items?.filter((item) => item.category === "topRated") || [];
  const newArrivalsItems =
    items?.filter((item) => item.category === "newArrivals") || [];
  const bestSellersItems =
    items?.filter((item) => item.category === "bestSellers") || [];

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all"
          ? items.map(
              ({
                name,
                price,
                shortDescription,
                longDescription,
                id,
                category,
                image,
              }) => (
                <Item
                  name={name}
                  price={price}
                  shortDescription={shortDescription}
                  longDescription={longDescription}
                  id={id}
                  image={image}
                  category={category}
                  key={`${name}-${id}`}
                />
              )
            )
          : // :  value === "newArrivals"
            //   ? newArrivalsItems.map(item) => (
            //       <Item item={item} key={`${item.name}-${item.id}`} />
            //     ))
            //   : value === "bestSellers"
            //   ? bestSellersItems.map((item) => (
            //       <Item item={item} key={`${item.name}-${item.id}`} />
            //     ))
            //   : value === "topRated"
            //   ? topRatedItems.map((item) => (
            //       <Item item={item} key={`${item.name}-${item.id}`} />
            //     ))
            null}
      </Box>
    </Box>
  );
};

export default ShoppingList;
