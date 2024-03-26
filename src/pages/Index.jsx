import React, { useRef, useEffect } from "react";
import { Box, Heading, VStack, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const viewer = new window.Sketchfab.SketchfabViewer(viewerRef.current, {
        api: {
          version: "1.12.1",
          token: "YOUR_SKETCHFAB_API_TOKEN",
        },
        ui_infos: 0,
        ui_controls: 0,
        ui_stop: 0,
      });

      // Load a 3D model of an office desk with open laptop
      viewer.init("https://sketchfab.com/models/8b7fdbdb8852419f90a95c0f35c1a026");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePrevious = () => {
    // TODO: Implement previous object functionality
  };

  const handleNext = () => {
    // TODO: Implement next object functionality
  };

  return (
    <Box>
      <VStack spacing={8} align="center" py={12}>
        <Heading as="h1" size="2xl">
          3D Viewer
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Explore objects in 360 degrees
        </Text>
        <Box ref={viewerRef} width="100%" height="400px" />
        <Flex>
          <IconButton icon={<FaArrowLeft />} aria-label="Previous" onClick={handlePrevious} mr={4} />
          <Button onClick={handleNext}>Next</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
