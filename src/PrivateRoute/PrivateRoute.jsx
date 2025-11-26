"use client";
import Loading from "@/Componants/Loading/Loading";
import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return <Loading></Loading>;
  }

    useEffect(() => {
     if (!user) {
       router.push("/login");
     }
   
      }, [user, router]);


  if (!user) {
    return null;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
