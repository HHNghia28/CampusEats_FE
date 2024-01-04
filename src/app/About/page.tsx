"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <p>about page</p>
      <Button variant="success" onClick={() => router.push("/")}>
        Back to home
      </Button>
    </div>
  );
};

export default About;
