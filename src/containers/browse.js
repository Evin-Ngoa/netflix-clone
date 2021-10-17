import React, { useState, useEffect, useContext } from 'react';
import { SelectProfileContainer } from "../containers/profile";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    // make it loader gif for 3000 milliseconds
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return <SelectProfileContainer user={user} setProfile={setProfile} />
}