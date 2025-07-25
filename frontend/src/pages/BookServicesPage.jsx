import React from "react";
import BookServices from "../components/bookServices";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BookServicesPage = () => {
    return (
        <>
            <Navbar />
            <BookServices />
            <Footer />
        </>
    );
}

export default BookServicesPage;