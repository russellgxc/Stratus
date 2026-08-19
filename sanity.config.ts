"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { StudioIcon } from "./sanity/components/studio-icon";
import { StudioNavbar } from "./sanity/components/studio-navbar";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const configuredProjectId = projectId || "placeholder";

export default defineConfig({
  name: "stratus",
  title: "Stratus Content Studio",
  basePath: "/studio",
  icon: StudioIcon,
  projectId: configuredProjectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  schema: {
    types: schemaTypes,
  },
});
