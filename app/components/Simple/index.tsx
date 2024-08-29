
'use client'
import { PopupWidget } from "react-calendly";
import React, { useEffect, useState } from 'react';
import './style.css';

const Simple = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    useEffect(() => {
        // This code runs only on the client side
        setRootElement(document.getElementById('calendly-widget') as HTMLElement);
      }, []);
    return (
        <div className="simple-bg relative" id="chat-section">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">Ready to Boost Your Brand?</h3>
                <h6 className="text-center text-offwhite text-1xl lg:text-3xl font-semibold mb-6">Let’s Chat and Plan Your Next Move</h6>
                <p className="text-center text-bluish text-lg font-normal mb-8">Got questions or excited to get started? Drop us a message using the form on the right or book a call directly through our Calendly. We’re here to help you make great things happen!</p>
                <div className="flex justify-center ">
                    <button id="calendly-widget">
                        <PopupWidget
                            url="https://calendly.com/your-calendly-url" 
                            rootElement={rootElement}
                            text="Get Started"
                            // textColor="#ffffff"
                            // color="transparent"
                        />                
                    </button>
                </div>
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    )
}

export default Simple;
