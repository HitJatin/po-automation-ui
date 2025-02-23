import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from "./components/main/Main";
import VendorRegistration from "./components/main/vendorRegistration/VendorRegistration";
import AddSKUs from "./components/main/addSKUs/AddSKUs";
import AddBuyingOrder from "./components/main/addBuyingOrder/AddBuyingOrder";
import AppNavBar from "./components/navbar/AppNavBar";
import HomeLayout from "./components/layouts/HomeLayout";
import VendorDetails from "./components/main/vendorDetails/VendorDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element ={<HomeLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/vendor-registration" element={<VendorRegistration />} />
        <Route path="/new-skus/:vendorCode" element={<AddSKUs />} />
        <Route path="/new-buying-order/:vendorCode" element={<AddBuyingOrder />} />
        <Route path="/vendor/:vendorCode" element={<VendorDetails />} />
      </Route>
    </>
  )
)