"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Edukia</div>
        <nav
          className="flex gap-4"
          role="navigation"
          aria-label="Main navigation"
        >
          <Button
            variant="default"
            size="default"
            aria-label="Start your Edukia journey"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
