import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const RefundTable = () => {
  return (
    <Table fontSize={"15px"} variant={"unstyled"} w={"100%"} textAlign={"left"}>
      <Thead fontWeight={500} color={"#4D4D4D"}>
        <Th bg={"#F2F2F2"} borderLeftRadius={"4px"} p={"0.6vw 0.8vw"}>
          Order ID
        </Th>
        <Th bg={"#F2F2F2"} p={"0.6vw 0.8vw"}>
          Status
        </Th>
        <Th bg={"#F2F2F2"} p={"0.6vw 0.8vw"}>
          Transaction ID
        </Th>
        <Th bg={"#F2F2F2"} p={"0.6vw 0.8vw"}>
          Refund date
        </Th>
        <Th bg={"#F2F2F2"} p={"0.6vw 0.8vw"} textAlign={"right"}>
          Order amount
        </Th>
      </Thead>
      <Tbody fontWeight={400}>
        {new Array(6).fill(0).map((_, i) => (
          <Tr key={i} borderBottom={"1px solid #D9D9D9"}>
            <Td p={"0.8vw 0.97vw"} color={"#146EB4"} fontWeight={500}>
              #281209
            </Td>
            {i == 1 ? (
              <Td p={"0.8vw 0.97vw"} color={"#1A181E"}>
                <HStack>
                  <Box
                    bg={"#999999"}
                    h={"0.6vw"}
                    w={"0.6vw"}
                    borderRadius={"50%"}
                  ></Box>{" "}
                  <Text>Processing</Text>
                </HStack>
              </Td>
            ) : (
              <Td p={"0.8vw 0.97vw"} color={"#1A181E"}>
                <HStack>
                  <Box
                    bg={"#17B31B"}
                    h={"0.6vw"}
                    w={"0.6vw"}
                    borderRadius={"50%"}
                  ></Box>{" "}
                  <Text>Successful</Text>
                </HStack>
              </Td>
            )}
            <Td p={"0.8vw 0.97vw"} color={"#4D4D4D"}>
              131634495747
            </Td>
            <Td p={"0.8vw 0.97vw"} color={"#4D4D4D"}>
              {i == 0
                ? "Today, 08:45 PM"
                : i == 1
                ? "Yesterday, 03:00 PM"
                : "12 Jul 2023, 03:00 PM"}
            </Td>
            <Td p={"0.8vw 0.97vw"} color={"#1A181E"} textAlign={"right"}>
              ₹1,125.00
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RefundTable;
