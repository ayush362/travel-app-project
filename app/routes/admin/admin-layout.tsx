import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            Admin layout
            <div className="children">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
