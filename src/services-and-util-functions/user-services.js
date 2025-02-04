const getSignedInUserData = async () => {
    try { 
        const res = await fetch("/api/users/me", {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) { 
            const errorData = await res.json();
            throw new Error(errorData.message || "Could not authenticate user");
        }
             
        const { signedInUser } = await res.json();

        return signedInUser;
    } catch(error) { 
        throw error;
    }
}

export { getSignedInUserData };