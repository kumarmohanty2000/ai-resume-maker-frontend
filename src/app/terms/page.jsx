import { Button } from "@/components/ui/button";
import React from "react";
Button
import { ArrowLeft } from 'lucide-react'
import Link from "next/link";

export default function termAndConditions() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      <div className="min-h-screen flex items-center justify-center flex-col mx-auto text-slate-500 text-3xl">
        {" "}
        Hey all are free enjoy it👍👍😊😊
      </div>
      <Link href="/" className="fixed bottom-4 left-4 text-white hover:text-indigo-200 flex items-center">
        <Button variant="ghost" className="p-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
