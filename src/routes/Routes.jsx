import React from "react";
import { BrowserRouter, Route, Routes as PageRoutes } from "react-router-dom";
import { Index } from "../pages";

export function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <Route path="/" element={<Index />} />
      </PageRoutes>
    </BrowserRouter>
  );
}
