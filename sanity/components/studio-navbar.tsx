import React from "react";
import type { NavbarProps } from "sanity";
import { Badge, Box, Card, Flex, Stack, Text } from "@sanity/ui";

export function StudioNavbar(props: NavbarProps) {
  return (
    <Card
      style={{
        background:
          "linear-gradient(180deg, rgba(5,130,244,0.08) 0%, rgba(249,246,240,0.96) 100%)",
        borderBottom: "1px solid rgba(5,130,244,0.16)",
      }}
    >
      <Box paddingX={4} paddingTop={3} paddingBottom={2}>
        <Flex align="center" justify="space-between" gap={3} wrap="wrap">
          <Stack space={2}>
            <Flex align="center" gap={2}>
              <Text size={3} weight="semibold">
                Stratus Content Studio
              </Text>
              <Badge
                mode="outline"
                style={{
                  color: "#0582F4",
                  borderColor: "rgba(5,130,244,0.25)",
                  background: "rgba(5,130,244,0.06)",
                }}
              >
                Client Editing
              </Badge>
            </Flex>
            <Text muted size={1}>
              Edit approved page content, images, and blog posts.
            </Text>
          </Stack>
        </Flex>
      </Box>
      {props.renderDefault(props)}
    </Card>
  );
}
