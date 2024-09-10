import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    return (
        <>{email ?? 'Not found'}</>
    )
}

export default Profile;