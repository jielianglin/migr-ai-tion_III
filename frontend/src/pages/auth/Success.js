import React from 'react';
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


const supabase = createClient(
    "https://gcvjinwkvnwvfzrrtvti.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjdmppbndrdm53dmZ6cnJ0dnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzM0OTMsImV4cCI6MTk5Mzk0OTQ5M30.6f3PL6nchUfFG-11-ZRFbZFt8q_VUdIKPuBsGdFpxtc"
);

export default function Success() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else 
    {
        return (<div>Logged in!</div>)
    }
}