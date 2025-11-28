"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";

// Helper function for date formatting
const formatDate = (dateString) => {
  try {
    if (!dateString || dateString === null) {
      return "Date not available";
    }

    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Date not available";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return "Date not available";
  }
};

export function EventCard({ event }) {
  return (
    <Card className="overflow-hidden">
      <div
        className={`h-32 sm:h-40 ${event.image} rounded-t-lg flex items-center justify-center`}
      >
        <div className="text-center">
          <Calendar className="mx-auto h-8 w-8 text-gray-600 dark:text-gray-300 mb-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            Event Image
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {formatDate(event.date)}
          {event.status && (
            <Badge variant="outline" className="ml-auto text-xs">
              {event.status}
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {event.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="ml-auto" disabled>
          Learn More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}