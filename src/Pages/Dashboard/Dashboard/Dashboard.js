import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PaymentIcon from '@mui/icons-material/Payment';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Button from '@restart/ui/esm/Button';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const {user, logout, admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={`${url}`}>Dashboard</Link></li>
        {/* Admin Route */}
        {admin && <li><Link to={`${url}/allOrder`}>Manage All Orders</Link></li>}
        {admin && <li><Link to={`${url}/addProduct`}>Add A Product</Link></li>}
        {admin && <li><Link to={`${url}/makeAdmin`}>Make Admin</Link></li>}
        {admin && <li><Link to={`${url}/manageProducts`}>Manage Products</Link></li>}

        {/* Simple User Route */}
        { !admin && <li><Link to={`${url}/pay`}>Pay</Link></li>}
        { !admin && <li><Link to={`${url}/myOrders`}>My Orders</Link></li>}
        { !admin && <li><Link to={`${url}/addReview`}>Review</Link></li>}
        {
          user?.email && <Button onClick={logout} variant="primary">Logout</Button>
        }
      </ul>
      
      <List>
        {['Pay', 'My Orders'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <PaymentIcon /> : <ProductionQuantityLimitsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['Review', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ReviewsIcon/> : <LogoutIcon/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Car Bazar :: Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/allOrder`}>
            <AllOrders></AllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
