import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bgbackground">
      {/* Sidebar */}
      <DashboardSidebar />

      <div>
        {/* Navigation */}
        <div>Navigation</div>

        {/* children */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
