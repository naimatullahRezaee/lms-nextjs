import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const LoginPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>
          Login with your Github & Email Account
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LoginPage;
