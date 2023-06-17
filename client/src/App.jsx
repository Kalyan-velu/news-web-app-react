import * as React from 'react';
import CoreLayout from "./common/layout/CoreLayout";
import Navbar from "./common/components/navigation";
import Routes from './pages';

function App() {
    return (
        <>
            <CoreLayout>
                <Navbar />
                <Routes />
            </CoreLayout>
        </>
    );
}
export default App;