import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    //1. Load the Auth user
    const { isLoading, isAuthenticated, fetchStatus} = useUser();

    //3. If there is NO auth user, redirect to the /login
    useEffect(() => {
       if(!isAuthenticated &&  !isLoading && fetchStatus !== "fetching") navigate("/login");
    }, [isAuthenticated, isLoading, navigate, fetchStatus]);

    //2. While loading, show a spinner
    if(isLoading)
    return(
        <FullPage>
            <Spinner />
        </FullPage>
    );



    //4. If there is a user, render the app
    if(isAuthenticated) return children;

}

export default ProtectedRoute;