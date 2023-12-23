import { Img } from "@chakra-ui/image";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const Sidebar = () => {
  return (
    <VStack
      p={"1vw 0.7vw"}
      gap={"1vw"}
      h={"100vh"}
      alignItems={"center"}
      bg={"#1E2640"}
      w={"15.5vw"}
      position={"fixed"}
    >
      <VStack gap={"1.7vw"}>
        <HStack
          cursor={"pointer"}
          w={"13.3vw"}
          justify={"space-between"}
          align={"center"}
        >
          <Img src="logo.png" w={"2.7vw"} h={"2.7vw"} borderRadius={"4px"} />
          <Box color={"white"} w={"7.5vw"}>
            <Text fontWeight={500}>Nishyan</Text>
            <Text
              fontWeight={400}
              fontSize={"14px"}
              textDecorationLine={"underline"}
              opacity={0.8}
            >
              Visit Store
            </Text>
          </Box>
          <Img src="Chevron Down.svg" w={"1.4vw"} />
        </HStack>
        <VStack gap={"0.28vw"} color={"white"} h={"75.5vh"}>
          <NavOption src={"nav1.svg"} text={"Home"} />
          <NavOption src={"nav2.svg"} text={"Orders"} />
          <NavOption src={"nav3.svg"} text={"Products"} />
          <NavOption src={"nav4.svg"} text={"Delivery"} />
          <NavOption src={"nav5.svg"} text={"Marketing"} />
          <NavOption src={"nav6.svg"} text={"Analytics"} />
          <NavOption src={"nav7.svg"} text={"Payouts"} />
          <NavOption src={"nav8.svg"} text={"Discounts"} />
          <NavOption src={"nav9.svg"} text={"Audience"} />
          <NavOption src={"nav10.svg"} text={"Appearence"} />
          <NavOption src={"nav11.svg"} text={"Plugins"} />
        </VStack>
      </VStack>
      <HStack
        p={"0.42vw 0.84vw"}
        gap={"0.7vw"}
        borderRadius={"4px"}
        bg={"#353C53"}
        w={"13.3vw"}
      >
        <Box
          cursor={"pointer"}
          p={"0.42vw"}
          borderRadius={"4px"}
          bg={"rgba(255, 255, 255, 0.10)"}
        >
          <Img src="wallet.svg" />
        </Box>
        <Box color={"white"} w={"7.5vw"}>
          <Text fontWeight={400} fontSize={"14px"} opacity={0.8}>
            Available credits
          </Text>
          <Text fontWeight={400} fontSize={"17px"}>
            222.10
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Sidebar;

function NavOption({ src, text }) {
  return (
    <HStack
      cursor={"pointer"}
      p={"0.5vw 1vw"}
      gap={"0.83vw"}
      w={"14.5vw"}
      borderRadius={"4px"}
      bg={text === "Payouts" && "#353C53"}
    >
      <Img src={src} w={"1.4vw"} />
      <Text
        fontWeight={500}
        fontSize={"15px"}
        opacity={text !== "Payouts" && 0.8}
      >
        {text}
      </Text>
    </HStack>
  );
}
