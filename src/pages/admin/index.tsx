import Form from "@/components/form/form";
import TopBar from "@/components/topbar";
import React from 'react';

export default function Admin(){

    return(
        <>
            <TopBar />
            <div className="flex justify-center items-center mt-36">
                <Form/>
            </div> 
        </>
    )
}