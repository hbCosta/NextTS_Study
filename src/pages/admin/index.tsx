import Form from "@/components/form/form";
import TopBar from "@/components/topbar";
import React from 'react';

export default function Admin(){

    return(
        <>
            <TopBar />
            <div className="grid place-items-center mt-16">
                <Form/>
            </div> 
        </>
    )
}