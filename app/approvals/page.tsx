import getCurrentUser from "../actions/getCurrentUser"
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

const ApprovalsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorised"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <EmptyState 
                title="No requests to approve"
                subtitle="Looks like there aren't any potential bookings yet"
            />
        </ClientOnly>
    )
}

export default ApprovalsPage;