import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

interface Props {
    children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </>
    );
};

export default AppLayout;
