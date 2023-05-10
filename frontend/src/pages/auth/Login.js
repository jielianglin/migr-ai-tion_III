import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://migr-ai-tion.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjdmppbndrdm53dmZ6cnJ0dnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzM0OTMsImV4cCI6MTk5Mzk0OTQ5M30.6f3PL6nchUfFG-11-ZRFbZFt8q_VUdIKPuBsGdFpxtc"
);

export default function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            // navigate('/success');
            console.log('success')
        } else {
            // navigate('/login');
            console.log('login')
        }
    })
    return (
        <div className="App">
            <header className="App-header">
                {/* <Auth
                    supabaseClient={supabase}
                    theme="dark"
                /> */}
                Test
            </header>
        </div>
    );
}

