import { observer } from 'mobx-react';
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import GlobalStateAdmin from '../../AppStore/GlobalStateAdmin';

import ShowDetails from './showCardDetails';
import SetDetails from './setCardDetails';

import './adminBusiness.css'

//TAB
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
const AdminBusiness = observer(() => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <header id="admin-business-header">
            {
               !GlobalStateAdmin.isStateSetting  ? <ShowDetails /> : <SetDetails />
            }
  
            <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab disabled={GlobalStateAdmin.enableButton == true} label="Appointments" value="1" component={Link} to="appointments" />
                                <Tab disabled={GlobalStateAdmin.enableButton == true} label="Services" value="2" component={Link} to="services" />
                            </TabList>
                        </Box>

                    </TabContext>
                </Box>
                
          </header>
          <Outlet/>
        </div>
    
    )
})
export default AdminBusiness;

