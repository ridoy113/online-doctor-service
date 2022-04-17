import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 text-center'>
            <h2>Authentication VS Authorization</h2>
            <p>Authentication :  Authentication verifies who the user is.  Authentication is visible to and partially changeable by the user.  Authentication is the first step of a good identity and access management process.</p>
            <p> Authorization : Authorization determines what resources a user can access.  Authorization always takes place after authentication.  Authorization isn’t visible to or changeable by the user.</p>


            <h2>Why using firebase? What Other Options do you have to implement auth?</h2>
            <p>Easily integrate Firebase into your team's favorite tools. Trusted by the largest apps. Firebase helps teams from startups to global enterprises build & run successful apps. Monitor App Performance. Build Extraordinary Apps. For Mobile or Web Apps.</p>
            <p>
                Cookie-Based authentication.
                <br />
                Token-Based authentication.
                <br />
                Third party access(OAuth, API-token)
                <br />
                OpenId.
                <br />
                SAML.
            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p>
                Cloud Firestore.
                Cloud Functions.
                <br />
                Authentication.
                <br />
                Hosting.
                <br />
                Cloud Storage.<br />

                Google Analytics.<br />
                Predictions.<br />
                Cloud Messaging.
            </p>
        </div>
    );
};

export default Blogs;