import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";
import "./scss/appContent.scss";

import ProtectedRoutes from "../../auth/ProtectedRoute";
import AdminEdit from "../AdminEdit/AdminEdit";

const FormData = React.lazy(() => import("../FormData/FormData"));
// const ViewContact = React.lazy(() => import("../FormData/ViewContact"));
const Contact = React.lazy(() => import("../FormData/contactus/Contact"));

// volunteers
const Viewvolunteers = React.lazy(() => import("../FormData/Volunteers/viewVolunteers"));
const Addvolunteers = React.lazy(() =>import("../FormData/Volunteers/addvolunteers"));
const EditVoluneers = React.lazy(() =>import("../FormData/Volunteers/EditVolunteers"));

// become volunteers
const View_become_volunteers = React.lazy(() => import("../FormData/become-volunteers/view-become-volunteers"));
const Add_become_volunters = React.lazy(() =>import("../FormData/become-volunteers/add-become-volunteers"));
const Edit_become_volunteers = React.lazy(() =>import("../FormData/become-volunteers/edit-become-volunteers"));

//donation

const View_donation = React.lazy(() =>  import("../FormData/donation/view_donation"));
const Add_donation = React.lazy(() =>  import("../FormData/donation/add_donation"));
const Edit_donation = React.lazy(() =>  import("../FormData/donation/edit_donation"));

//dashboard
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));

//Blog
const Blog = React.lazy(() => import("../FormData/Blog/Blog"));
const BlogManagement = React.lazy(() => import("../FormData/Blog/BlogManagement"));
const EditBlog = React.lazy(() => import("../FormData/Blog/EditBlog"));

//Header
const Header = React.lazy(() => import("../Header/Header"));

//Gallery
const View_gallery = React.lazy(() => import("../FormData/gallery/view_gallery"));
const Add_gallery = React.lazy(() => import("../FormData/gallery/add_gallery"));
const Edit_gallery = React.lazy(() => import("../FormData/gallery/edit_gallery"));

//slider
const View_slider = React.lazy(() => import("../FormData/slider/view_slider"));
const Add_slider = React.lazy(() => import("../FormData/slider/add_slider"));
const Edit_slider = React.lazy(() => import("../FormData/slider/edit_slider"));



const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense
        fallback={
          <>
            <div className="loader-content">
              <CSpinner color="secondary" />
            </div>
          </>
        }
      >
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-edit" element={<AdminEdit />} />
            <Route
              path="/"
              element={<Navigate replace to="/admin/dashboard" />}
            />
            <Route
              path="*"
              element={<Navigate replace to="/admin/dashboard" />}
            />

            {/* Blog  */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/blogmanagement" element={<BlogManagement />} />
            <Route path="/blog/blogmanagement/:id" element={<EditBlog />} />

            {/* FormData */}
            {/* <Route path="/formdata/viewcontact/:id" element={<ViewContact />} /> */}

            {/* volunteers */}
            <Route path="/our-volunteers" element={<Viewvolunteers />} />
            <Route
              path="/our-volunteers/edit-volunteers/:id"
              element={<EditVoluneers />}
            />
            <Route path="/our-volunteers/add-volunteers" element={<Addvolunteers />} />
            
            {/* become volunteers */}
            <Route path="/become-volunteers" element={<View_become_volunteers />} />
            <Route path="/become-volunteers/edit-become-volunteers/:id"
              element={<Edit_become_volunteers />}/>
            <Route path="/become-volunteers/add-become-volunteers" element={<Add_become_volunters />} />

           {/* donation  */}
            <Route path="/donation" element={<View_donation />} />
            <Route
              path="/donation/edit-donation/:id"
              element={<Edit_donation />}
              exact
            />
            <Route path="/donation/add-donation" element={<Add_donation />} />

            {/* contact */}
            <Route path="/formdata/contact" element={<Contact />} />
            <Route path="/formdata/formdata" element={<FormData />} />

            {/* Headers */}
            <Route path="/header/:id" element={<Header />} />

            {/* gallery */}
            <Route path="/slider" element={<View_slider />} />
            <Route path="/slider/edit-slider/:id"
              element={<Edit_slider />}/>
            <Route path="/slider/add-slider" element={<Add_slider />} />

            <Route path="/gallery" element={<View_gallery />} />
            <Route path="/gallery/edit-gallery/:id"
              element={<Edit_gallery />}/>
            <Route path="/gallery/add-gallery" element={<Add_gallery />} />
          </Route>
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
