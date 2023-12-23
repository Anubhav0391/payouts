import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Box, Flex, HStack, VStack, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import PayoutTable from "./PayoutTable";
import RefundTable from "./RefundTable";

const Dashboard = () => {
  const [table, setTable] = useState(true);
  return (
    <Flex>
      <Sidebar />
      <Box flexGrow={1} overflowY={"auto"} ml={"15.5vw"}>
        <HStack
          p={"0.84vw 2.72vw"}
          justify={"space-between"}
          align={"center"}
          h={"4.5vw"}
          borderBottom={"1px solid #D9D9D9"}
        >
          <HStack w={"25vw"} align={"center"} gap={"1vw"}>
            <Text fontSize={"20px"} fontWeight={500}>
              Payouts
            </Text>
            <HStack gap={"6px"}>
              <Img src="Help.svg" />
              <Text color={"#4D4D4D"} fontSize={"13px"}>
                How it works
              </Text>
            </HStack>
          </HStack>
          <HStack
            w={"28vw"}
            align={"center"}
            p={"0.6vw 1vw"}
            bg={"#F2F2F2"}
            borderRadius={"4px"}
          >
            <Img src="search.svg" />
            <Input
              w={"100%"}
              outline={"none"}
              type="text"
              placeholder="Search features, tutorials, etc."
              bg={"#F2F2F2"}
            />
          </HStack>
          <HStack justify={"flex-end"} gap={"0.9vw"} w={"25vw"}>
            <Flex
              bg={"#E6E6E6"}
              w={"40px"}
              h={"40px"}
              borderRadius={"50%"}
              align={"center"}
              justify={"center"}
            >
              <Img src="Group.svg" />
            </Flex>
            <Img src="Menu.svg" />
          </HStack>
        </HStack>
        <Box p={"2.72vw"} bg={"#FAFAFA"}>
          <HStack align={"center"} justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={500}>
              Overview
            </Text>
            <Box
              borderRadius="4px"
              border="1px solid #D9D9D9"
              color="#4D4D4D"
              padding="6px 14px"
            >
              <select style={{ outline: "none" }}>
                <option value="">This Month</option>
              </select>
            </Box>
          </HStack>
          <HStack
            justify={"space-between"}
            align={"flex-start"}
            mt={"1.6vw"}
            mb={"2.2vw"}
          >
            <VStack gap={0} bg={"#146EB4"} borderRadius={"8px"}>
              <VStack
                p={"1.4vw"}
                gap={"1vw"}
                boxShadow={"0px 2px 6px 0px rgba(26, 24, 30, 0.04);"}
              >
                <HStack gap={"8px"} w={"22.5vw"}>
                  <Text fontSize={"17px"} fontWeight={400} color={"white"}>
                    New Payout
                  </Text>
                  <Img src="Help2.svg" />
                </HStack>
                <HStack justify={"space-between"} w={"100%"}>
                  <Text fontWeight={500} color={"white"} fontSize={"32px"}>
                    ₹2,312.23
                  </Text>
                  <HStack>
                    <Text
                      color={"white"}
                      fontSize={"17px"}
                      fontWeight={500}
                      textDecorationLine={"underline"}
                    >
                      23 orders
                    </Text>
                    <Img src="Chevron Right2.svg" />
                  </HStack>
                </HStack>
              </VStack>
              <HStack
                justify={"space-between"}
                bg={"#0E4F82"}
                borderRadius={"8px"}
                p={"0.6vw 1.6vw"}
                w={"100%"}
              >
                <Text color={"#F2F2F2"} fontWeight={400} fontSize={"14px"}>
                  New payout date:
                </Text>
                <Text fontSize={"14px"} color={"white"}>
                  Today, 04:00PM
                </Text>
              </HStack>
            </VStack>
            <VStack
              p={"1.4vw"}
              gap={"1vw"}
              borderRadius={"8px"}
              boxShadow={"0px 2px 6px 0px rgba(26, 24, 30, 0.04);"}
            >
              <HStack gap={"8px"} w={"22.5vw"}>
                <Text fontSize={"17px"}>Amount Pending</Text>
                <Img src="Help.svg" />
              </HStack>
              <HStack justify={"space-between"} w={"100%"}>
                <Text fontWeight={500} fontSize={"32px"}>
                  ₹92,312.20
                </Text>
                <HStack>
                  <Text
                    color={"#146EB4"}
                    fontSize={"17px"}
                    fontWeight={500}
                    textDecorationLine={"underline"}
                  >
                    13 orders
                  </Text>
                  <Img src="Chevron Right.svg" />
                </HStack>
              </HStack>
            </VStack>
            <VStack
              p={"1.4vw"}
              gap={"1vw"}
              borderRadius={"8px"}
              boxShadow={"0px 2px 6px 0px rgba(26, 24, 30, 0.04);"}
            >
              <HStack gap={"8px"} w={"22.5vw"}>
                <Text fontSize={"17px"}>Amount Processed</Text>
                <Img src="Help.svg" />
              </HStack>
              <HStack justify={"space-between"} w={"100%"}>
                <Text fontWeight={500} fontSize={"32px"}>
                  ₹23,92,312.19
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text fontSize={"20px"} fontWeight={500} mb={"1.4vw"}>
            Transaction | This Month
          </Text>
          <HStack gap={"0.7vw"}>
            <Button
              p={"0.4vw 1vw"}
              borderRadius={"40px"}
              bg={table ? "#146EB4" : "#E6E6E6"}
              color={table ? "white" : "black"}
              onClick={() => setTable(true)}
            >
              Payouts (6)
            </Button>
            <Button
              p={"0.4vw 1vw"}
              borderRadius={"40px"}
              bg={!table ? "#146EB4" : "#E6E6E6"}
              color={!table ? "white" : "black"}
              onClick={() => setTable(false)}
            >
              Refunds (6)
            </Button>
          </HStack>
          <Box p={"0.8vw"} mt={"1.4vw"}>
            <HStack justify={"space-between"} mb={"0.8vw"}>
              <HStack
                w={"17vw"}
                align={"center"}
                p={"0.6vw 1vw"}
                borderRadius={"4px"}
                border={"1px solid #D9D9D9"}
              >
                <Img src="search.svg" w={"14px"} />
                <Input
                  fontSize={"14px"}
                  w={"100%"}
                  outline={"none"}
                  type="text"
                  placeholder="Order ID or Transaction ID"
                />
              </HStack>
              <HStack align={"center"} gap={"1vw"}>
                <HStack
                  cursor={"pointer"}
                  borderRadius={"4px"}
                  p={"6px 12px"}
                  border={"1px solid #D9D9D9"}
                  align={"center"}
                >
                  <Text color={"#4D4D4D"}>Sort</Text>
                  <Img src="Sort.svg" />
                </HStack>
                <Box
                  cursor={"pointer"}
                  borderRadius={"4px"}
                  p={"8px"}
                  border={"1px solid #D9D9D9"}
                >
                  <Img src="download.svg" />
                </Box>
              </HStack>
            </HStack>
            {table ? <PayoutTable /> : <RefundTable />}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
